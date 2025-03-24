import { useReadContract, useWriteContract, useWaitForTransactionReceipt, usePublicClient } from 'wagmi';
import { parseEther, formatEther } from 'viem';

// ABI do contrato TokenSale (apenas as funções necessárias)
export const tokenSaleAbi = [
  {
    "inputs": [],
    "name": "buyTokens",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bnbAmount",
        "type": "uint256"
      }
    ],
    "name": "calculateTokenAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBNBPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "TOKEN_PRICE_USD",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// Valor fixo para preço do token XSTP
const XSTP_PRICE_USD = 0.001; // $0.001 por token

/**
 * Busca o preço atual do BNB em USD usando a API da Binance
 */
async function fetchBNBPrice() {
  try {
    const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');
    const data = await response.json();
    return parseFloat(data.price);
  } catch (error) {
    console.error('Erro ao buscar preço do BNB na Binance:', error);
    return 300; // Valor de fallback se a API falhar
  }
}

/**
 * Hook personalizado para interagir com o contrato TokenSale (BNB)
 * @param {string} contractAddress - Endereço do contrato TokenSale
 */
export function useTokenSaleBNB(contractAddress) {
  const { writeContract, writeContractAsync } = useWriteContract();
  const { data: waitTransactionData, isLoading: isWaitingTransaction, isSuccess: isTransactionSuccess } = useWaitForTransactionReceipt();
  const publicClient = usePublicClient();
  
  // Leitura reativa do preço do BNB
  const { data: bnbPriceData } = useReadContract({
    address: contractAddress || undefined,
    abi: tokenSaleAbi,
    functionName: 'getBNBPrice',
    enabled: !!contractAddress
  });

  /**
   * Calcula a quantidade de tokens que serão recebidos por um valor em BNB
   * @param {string|number} bnbAmount - Quantidade de BNB em ether
   * @param {number|null} cachedBnbPrice - Preço do BNB já obtido anteriormente
   */
  const calculateTokens = async (bnbAmount, cachedBnbPrice = null) => {
    if (!bnbAmount) return "0";
    
    try {
      // Usar o preço em cache ou buscar um novo
      const bnbPrice = cachedBnbPrice || await fetchBNBPrice();
      
      // Calcular o valor em USD
      const bnbAmountNum = parseFloat(bnbAmount);
      const usdValue = bnbAmountNum * bnbPrice;
      
      // Calcular a quantidade de tokens
      const tokenAmount = usdValue / XSTP_PRICE_USD;
      
      // Formatar com 2 casas decimais
      return parseFloat(tokenAmount).toFixed(2);
    } catch (error) {
      console.error('Erro ao calcular tokens:', error);
      return "0";
    }
  };

  /**
   * Compra tokens enviando BNB
   * @param {string|number} bnbAmount - Quantidade de BNB em ether
   */
  const buyTokensWithBNB = async (bnbAmount) => {
    if (!bnbAmount || !contractAddress) {
      return {
        success: false,
        error: "Invalid BNB amount or contract address"
      };
    }

    try {
      // Converter para wei usando viem
      const bnbAmountWei = parseEther(bnbAmount.toString());
      console.log(`Starting purchase with ${bnbAmount} BNB (${bnbAmountWei} wei) on contract ${contractAddress}`);

      // Usar writeContractAsync que retorna uma promessa com o hash
      const hash = await writeContractAsync({
        address: contractAddress,
        abi: tokenSaleAbi,
        functionName: 'buyTokens',
        value: bnbAmountWei
      });

      console.log('BNB transaction hash:', hash);

      // Aguardar confirmação
      console.log('Waiting for transaction confirmation...');
      
      // Usar o publicClient para aguardar a confirmação da transação
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      console.log('Transaction receipt:', receipt);

      return {
        success: true,
        hash,
        receipt
      };
    } catch (error) {
      console.error("Error buying tokens with BNB:", error);
      
      // Verificar o tipo de erro e retornar mensagens mais amigáveis
      let errorMessage = 'Unknown error buying tokens';
      
      if (error.message) {
        if (error.message.includes('rejected')) {
          errorMessage = 'You rejected the transaction in your wallet';
        } else if (error.message.includes('insufficient')) {
          errorMessage = 'Insufficient BNB balance for this operation';
        } else if (error.message.includes('network') || error.message.includes('connect')) {
          errorMessage = 'Network connection problem. Check your internet';
        } else if (error.message.includes('gas') || error.message.includes('fee')) {
          errorMessage = 'Insufficient gas for this operation';
        } else if (error.message.includes('nonce')) {
          errorMessage = 'Nonce error. Try reloading the page or resetting your wallet';
        } else {
          errorMessage = error.message;
        }
      }
      
      return {
        success: false,
        error: errorMessage
      };
    }
  };

  /**
   * Obtém o preço atual do BNB em USD
   */
  const getBNBPrice = () => {
    if (!bnbPriceData) return "0";
    
    // O preço vem com 8 casas decimais
    return (Number(bnbPriceData) / 10**8).toString();
  };

  return {
    calculateTokens,
    buyTokensWithBNB,
    fetchBNBPrice
  };
} 