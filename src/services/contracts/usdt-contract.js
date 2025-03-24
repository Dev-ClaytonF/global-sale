import { useWriteContract, useReadContract, useWaitForTransactionReceipt as useWait } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { XSTP_TOKEN_ADDRESS } from '../constants';

// ABI do contrato USDT para XSTP
export const xstpSaleAbi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmount",
        "type": "uint256"
      }
    ],
    "name": "buyTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmount",
        "type": "uint256"
      }
    ],
    "name": "calculateUSDTCost",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTokensAvailable",
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

// ABI básico para token ERC20 (para aprovação USDT)
export const erc20Abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
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

// Valor fixo do preço do token XSTP
const XSTP_PRICE_USD = 0.001; // $0.001 por token

/**
 * Hook personalizado para interagir com o contrato de venda XSTP via USDT
 * @param {string} contractAddress - Endereço do contrato XSTPSaleFinal
 * @param {string} usdtTokenAddress - Endereço do token USDT
 */
export function useTokenSaleUSDT(contractAddress, usdtTokenAddress) {
  const { writeContractAsync } = useWriteContract();
  
  /**
   * Calcula o custo em USDT para uma determinada quantidade de tokens XSTP
   * @param {string|number} tokenAmount - Quantidade de tokens XSTP
   */
  const calculateUSDTCost = async (tokenAmount) => {
    if (!tokenAmount || !contractAddress) return "0";
    
    try {
      // Converter para wei
      const tokenAmountWei = parseEther(tokenAmount.toString());
      
      // Fazer cálculo direto pelo preço fixo
      const usdtCost = parseFloat(tokenAmount) * XSTP_PRICE_USD;
      
      return usdtCost.toFixed(2);
    } catch (error) {
      console.error("Erro ao calcular custo em USDT:", error);
      return "0";
    }
  };

  /**
   * Calcula a quantidade de tokens XSTP que podem ser comprados com um valor em USDT
   * @param {string|number} amountUSDT - Quantidade de USDT
   */
  const calculateTokenAmount = (amountUSDT) => {
    // Validar entrada
    if (!amountUSDT || isNaN(amountUSDT) || parseFloat(amountUSDT) <= 0) {
      return '0';
    }

    // Calculando a quantidade de tokens a receber: USDT / preço por token
    const amountInUSD = parseFloat(amountUSDT);
    const tokenAmount = amountInUSD / XSTP_PRICE_USD;
    
    // Formatar com 2 casas decimais
    return tokenAmount.toFixed(2);
  };

  /**
   * Aprova o gasto de USDT
   * @param {string|number} amountUSDT - Quantidade de USDT a ser aprovada
   */
  const approveUSDT = async (amountUSDT) => {
    console.log(`Starting approval of ${amountUSDT} USDT for the contract ${contractAddress}`);
    
    try {
      // Converter para Wei (6 decimais para USDT BEP20)
      const amountInWei = parseEther(amountUSDT.toString());
      console.log(`Valor em Wei: ${amountInWei}`);
      
      // Approve USDT spend
      console.log(`Aprovando ${amountInWei} USDT para o contrato ${contractAddress}`);
      const approvalHash = await writeContractAsync({
        address: usdtTokenAddress,
        abi: erc20Abi,
        functionName: 'approve',
        args: [contractAddress, amountInWei]
      });
      
      console.log('Hash de aprovação USDT:', approvalHash);
      return { 
        success: true, 
        hash: approvalHash 
      };
    } catch (error) {
      console.error('Erro ao aprovar USDT:', error);
      
      // Verificar o tipo de erro e retornar mensagens mais amigáveis
      let errorMessage = 'Unknown error in USDT approval';
      
      if (error.message) {
        if (error.message.includes('rejected')) {
          errorMessage = 'You rejected the USDT approval in your wallet';
        } else if (error.message.includes('insufficient')) {
          errorMessage = 'Insufficient USDT balance for this operation';
        } else if (error.message.includes('network') || error.message.includes('connect')) {
          errorMessage = 'Network connection problem. Check your internet';
        } else if (error.message.includes('gas') || error.message.includes('fee')) {
          errorMessage = 'Insufficient gas for this operation';
        }
      }
      
      return { 
        success: false, 
        error: errorMessage
      };
    }
  };

  /**
   * Conclui a compra após a aprovação
   * @param {string|number} amountUSDT - Quantidade de USDT a ser comprada
   */
  const completePurchase = async (amountUSDT) => {
    console.log(`Finalizing purchase of tokens with ${amountUSDT} USDT`);
    
    try {
      // Converter para Wei (6 decimais para USDT BEP20)
      const amountInWei = parseEther(amountUSDT.toString());
      
      // Enviar a transação de compra
      console.log(`Buying tokens with ${amountInWei} USDT`);
      const purchaseHash = await writeContractAsync({
        address: contractAddress,
        abi: xstpSaleAbi,
        functionName: 'buyTokens',
        args: [amountInWei]
      });
      
      console.log('Hash de compra com USDT:', purchaseHash);
      return { 
        success: true, 
        hash: purchaseHash 
      };
    } catch (error) {
      console.error('Erro ao comprar com USDT:', error);
      
      // Verificar o tipo de erro e retornar mensagens mais amigáveis
      let errorMessage = 'Unknown error in USDT purchase';
      
      if (error.message) {
        if (error.message.includes('rejected')) {
          errorMessage = 'You rejected the purchase transaction in your wallet';
        } else if (error.message.includes('insufficient')) {
          errorMessage = 'Insufficient balance to complete the purchase';
        } else if (error.message.includes('network') || error.message.includes('connect')) {
          errorMessage = 'Network connection problem. Check your internet';
        } else if (error.message.includes('gas') || error.message.includes('fee')) {
          errorMessage = 'Insufficient gas for this operation';
        } else if (error.message.includes('allowed') || error.message.includes('allowance')) {
          errorMessage = 'The USDT spending approval has expired. Try the process from the beginning again';
        }
      }
      
      return { 
        success: false, 
        error: errorMessage
      };
    }
  };

  /**
   * Compra tokens XSTP usando USDT
   * @param {string|number} amountUSDT - Quantidade de USDT a ser gasta
   */
  const buyTokensWithUSDT = async (amountUSDT) => {
    console.log(`Starting purchase with ${amountUSDT} USDT`);
    
    try {
      // Aprovar primeiro
      const approvalResult = await approveUSDT(amountUSDT);
      if (!approvalResult.success) {
        return approvalResult;
      }
      
      console.log('USDT approval completed, waiting 10 seconds before finalizing the purchase');
      // Aguardar 10 segundos para garantir que a aprovação seja confirmada
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      // Completar a compra
      return await completePurchase(amountUSDT);
    } catch (error) {
      console.error('Erro no processo de compra com USDT:', error);
      
      // Verificar o tipo de erro e retornar mensagens mais amigáveis
      let errorMessage = 'An error occurred during the purchase process';
      
      if (error.message) {
        if (error.message.includes('rejected')) {
          errorMessage = 'Transaction rejected in your wallet';
        } else if (error.message.includes('timeout')) {
          errorMessage = 'The operation has expired. Try again';
        }
      }
      
      return { 
        success: false, 
        error: errorMessage
      };
    }
  };

  /**
   * Obtém a quantidade de tokens disponíveis para venda
   */
  const getTokensAvailable = async () => {
    try {
      const { data } = await useReadContract.fetch({
        address: contractAddress,
        abi: xstpSaleAbi,
        functionName: 'getTokensAvailable'
      });
      
      if (!data) return "0";
      
      // Converter de wei para representação decimal
      return formatEther(data);
    } catch (error) {
      console.error("Error getting available tokens:", error);
      return "0";
    }
  };

  return {
    calculateTokenAmount,
    calculateUSDTCost,
    buyTokensWithUSDT,
    getTokensAvailable,
    approveUSDT,
    completePurchase
  };
} 