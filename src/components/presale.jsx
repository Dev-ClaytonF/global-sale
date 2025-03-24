import { useState, useEffect } from 'react';
import bnbIcon from '../assets/bnb.svg';
import usdtIcon from '../assets/usdt.svg';
import xstpIcon from '../assets/x.svg';
import motionBg from '../assets/motion.webp';
import ConnectButton from './connectbutton';
import { getActiveStage, getNextStage, calculateProgress, formatCurrency, supabase } from '../services/supabase';
import { useTokenSaleBNB } from '../services/contracts/bnb-contract';
import { useTokenSaleUSDT } from '../services/contracts/usdt-contract';
import { 
    BNB_CONTRACT_ADDRESS, 
    USDT_CONTRACT_ADDRESS, 
    USDT_TOKEN_ADDRESS, 
    XSTP_TOKEN_ADDRESS 
} from '../services/constants';
import { useAccount, useDisconnect } from 'wagmi';
import { Link } from 'react-router-dom';

function Presale() {
    const [selectedCurrency, setSelectedCurrency] = useState('BNB');
    const [activeStage, setActiveStage] = useState(null);
    const [nextStage, setNextStage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [inputAmount, setInputAmount] = useState('');
    const [estimatedTokens, setEstimatedTokens] = useState('0');
    const [calculatingTokens, setCalculatingTokens] = useState(false);
    const [bnbPriceUSD, setBnbPriceUSD] = useState(null);
    const [transactionStatus, setTransactionStatus] = useState('');
    const [approvalComplete, setApprovalComplete] = useState(false);
    const [amountToUse, setAmountToUse] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const { isConnected, address } = useAccount();
    const { disconnect } = useDisconnect();
    
    // Usar o endereço do contrato da tabela, ou o endereço padrão se não existir
    const bnbContractAddress = activeStage?.contrato_bnb || BNB_CONTRACT_ADDRESS;
    const usdtContractAddress = activeStage?.contrato_usdt || USDT_CONTRACT_ADDRESS;
    
    // Hook para o contrato BNB
    const { calculateTokens: calculateTokensBNB, buyTokensWithBNB, fetchBNBPrice } = useTokenSaleBNB(bnbContractAddress);
    
    // Hook para o contrato USDT
    const { calculateTokenAmount: calculateTokensUSDT, buyTokensWithUSDT, approveUSDT, completePurchase } = useTokenSaleUSDT(
        usdtContractAddress,
        USDT_TOKEN_ADDRESS
    );

    // Resetar o estado de aprovação quando trocar de moeda
    useEffect(() => {
        setApprovalComplete(false);
    }, [selectedCurrency]);

    // Buscar dados do estágio ativo e transações do usuário
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Busca o estágio ativo
                const stageData = await getActiveStage();
                setActiveStage(stageData);
                
                if (stageData) {
                    // Busca o próximo estágio
                    const nextStageData = await getNextStage(stageData.stage_number);
                    setNextStage(nextStageData);
                }
                
                // Marcar dados como carregados
                setDataLoaded(true);
                
                // Buscar transações do usuário se estiver conectado
                if (isConnected && address) {
                    await fetchUserTransactions(address);
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                // Mesmo com erro, marcar como carregado para mostrar a interface
                setDataLoaded(true);
            }
        };

        fetchData();
        
        // Recarregar dados a cada 60 segundos
        const interval = setInterval(fetchData, 60000);
        
        return () => clearInterval(interval);
    }, [isConnected, address]);

    // Função para buscar transações do usuário
    const fetchUserTransactions = async (walletAddress) => {
        try {
            const { data, error } = await supabase
                .from('presale_transactions')
                .select('*')
                .eq('wallet_address', walletAddress)
                .order('created_at', { ascending: false });
                
            if (error) {
                console.error('Erro ao buscar transações:', error);
                return;
            }
            
            setTransactions(data || []);
        } catch (error) {
            console.error('Erro ao processar busca de transações:', error);
        }
    };

    // Função para registrar uma transação no Supabase
    const registerTransaction = async (txHash, currency, amountIn, amountOut, usdValue) => {
        try {
            const { data, error } = await supabase
                .from('presale_transactions')
                .insert([
                    {
                        wallet_address: address,
                        tx_hash: txHash,
                        stage_number: activeStage?.stage_number,
                        currency: currency,
                        amount_in: amountIn,
                        amount_out: amountOut,
                        usd_value: usdValue,
                        status: 'completed'
                    }
                ]);
                
            if (error) {
                console.error('Erro ao registrar transação:', error);
                return;
            }
            
            // Atualizar a lista de transações
            await fetchUserTransactions(address);
            
            console.log('Transação registrada com sucesso:', data);
        } catch (error) {
            console.error('Erro ao processar registro de transação:', error);
        }
    };

    // Buscar preço do BNB quando o botão BNB for selecionado
    const handleCurrencyChange = async (currency) => {
        setSelectedCurrency(currency);
        
        // Limpar o estimatedTokens ao trocar de moeda
        setEstimatedTokens('0');
        
        // Se selecionou BNB e o preço ainda não foi buscado
        if (currency === 'BNB' && !bnbPriceUSD) {
            try {
                const price = await fetchBNBPrice();
                setBnbPriceUSD(price);
                console.log('Preço do BNB atualizado:', price);
            } catch (error) {
                console.error('Erro ao buscar preço do BNB:', error);
            }
        }
        
        // Se há um valor no input, recalcular os tokens
        if (inputAmount && !isNaN(inputAmount) && parseFloat(inputAmount) > 0) {
            calculateEstimatedTokens(inputAmount, currency);
        }
    };

    // Função para calcular tokens com base no valor de entrada
    const calculateEstimatedTokens = async (amount, currency = selectedCurrency) => {
        if (!activeStage || !amount || isNaN(amount) || parseFloat(amount) <= 0) {
            setEstimatedTokens('0');
            return;
        }

        setCalculatingTokens(true);
        
        try {
            if (currency === 'BNB') {
                // Se ainda não temos o preço do BNB, buscá-lo
                if (!bnbPriceUSD) {
                    const price = await fetchBNBPrice();
                    setBnbPriceUSD(price);
                }
                
                // Calcular usando o preço do BNB já obtido
                const tokens = await calculateTokensBNB(amount, bnbPriceUSD);
                setEstimatedTokens(tokens);
            } else {
                // Usar o cálculo do contrato USDT
                const tokens = calculateTokensUSDT(amount);
                setEstimatedTokens(tokens);
            }
        } catch (error) {
            console.error('Erro ao calcular tokens:', error);
            setEstimatedTokens('0');
        } finally {
            setCalculatingTokens(false);
        }
    };

    // Atualizar cálculo quando o valor de entrada mudar
    useEffect(() => {
        if (inputAmount) {
            calculateEstimatedTokens(inputAmount);
        } else {
            setEstimatedTokens('0');
        }
    }, [inputAmount, activeStage]);

    const handleBuy = async () => {
        if (!isConnected || !activeStage || !inputAmount || parseFloat(inputAmount) <= 0) {
            return;
        }

        try {
            const amount = parseFloat(inputAmount);
            setAmountToUse(amount);
            let result;
            
            if (selectedCurrency === 'BNB') {
                // Mostrar status inicial da transação
                setTransactionStatus('Enviando BNB...');
                
                // Processo completo para BNB
                result = await buyTokensWithBNB(amount);
                
                if (result.success) {
                    // Atualizar status
                    setTransactionStatus('Transação concluída com sucesso!');
                    
                    // Calcular o valor em USD
                    const usdValue = amount * (bnbPriceUSD || 0);
                    
                    // Registrar a transação
                    await registerTransaction(
                        result.hash,
                        'BNB',
                        amount.toString(),
                        estimatedTokens,
                        usdValue.toFixed(2)
                    );
                    
                    // Recarregar dados após a transação
                    const stageData = await getActiveStage();
                    setActiveStage(stageData);
                    
                    // Limpar o campo de entrada
                    setInputAmount('');
                    setEstimatedTokens('0');
                    
                    // Limpar status após um tempo
                    setTimeout(() => {
                        setTransactionStatus('');
                    }, 5000);
                } else {
                    console.error('Erro na transação:', result.error);
                    setTransactionStatus(`Erro na transação: ${result.error}`);
                    
                    // Limpar status de erro após um tempo
                    setTimeout(() => {
                        setTransactionStatus('');
                    }, 8000);
                }
            } else {
                // Processo para USDT - Apenas aprovação
                setTransactionStatus('Approving USDT...');
                
                // Apenas fazer a aprovação primeiro
                result = await approveUSDT(amount);
                
                if (result.success) {
                    setTransactionStatus('Approval completed! Click "Complete Purchase" to finalize.');
                    setApprovalComplete(true);
                } else {
                    console.error('Erro na aprovação:', result.error);
                    
                    // Melhorar a identificação de erro de rejeição pelo usuário
                    if (result.error.includes('recusou') || result.error.includes('rejeitada')) {
                        setTransactionStatus(`${result.error}. You can try again when you are ready.`);
                    } else {
                        setTransactionStatus(`Error: ${result.error}`);
                    }
                    
                    // Limpar status de erro após um tempo
                    setTimeout(() => {
                        setTransactionStatus('');
                    }, 8000);
                }
            }
        } catch (error) {
            console.error('Erro ao processar compra:', error);
            setTransactionStatus(`Erro inesperado: ${error.message}`);
            
            // Limpar status de erro após um tempo
            setTimeout(() => {
                setTransactionStatus('');
            }, 8000);
        }
    };

    const handleCompletePurchase = async () => {
        try {
            setTransactionStatus('Finalizing purchase...');
            
            const result = await completePurchase(amountToUse);
            
            if (result.success) {
                // Atualizar status
                setTransactionStatus('Compra concluída com sucesso!');
                
                // Calcular o valor em USD (para USDT é o próprio valor)
                const usdValue = amountToUse;
                
                // Registrar a transação
                await registerTransaction(
                    result.hash,
                    'USDT',
                    amountToUse.toString(),
                    estimatedTokens,
                    usdValue.toFixed(2)
                );
                
                // Recarregar dados após a transação
                const stageData = await getActiveStage();
                setActiveStage(stageData);
                
                // Limpar o campo de entrada e estados
                setInputAmount('');
                setEstimatedTokens('0');
                setApprovalComplete(false);
                
                // Limpar status após um tempo
                setTimeout(() => {
                    setTransactionStatus('');
                }, 5000);
            } else {
                console.error('Erro na finalização da compra:', result.error);
                
                // Melhorar a identificação de erro de rejeição pelo usuário
                if (result.error.includes('recusou') || result.error.includes('rejeitada')) {
                    setTransactionStatus(`${result.error}. The approval is still valid, you can try to complete the purchase again.`);
                } else {
                    setTransactionStatus(`Error: ${result.error}`);
                }
                
                // Limpar status apenas para alguns tipos de erro
                if (result.error.includes('expirou') || result.error.includes('allowance')) {
                    setTimeout(() => {
                        setTransactionStatus('');
                        setApprovalComplete(false);
                    }, 8000);
                } else if (result.error.includes('recusou')) {
                    // Manter o estado de aprovação completo para permitir nova tentativa
                    setTimeout(() => {
                        setTransactionStatus('');
                    }, 8000);
                } else {
                    setTimeout(() => {
                        setTransactionStatus('');
                        setApprovalComplete(false);
                    }, 8000);
                }
            }
        } catch (error) {
            console.error('Erro ao finalizar compra:', error);
            setTransactionStatus(`Erro inesperado: ${error.message}`);
            
            // Limpar status de erro após um tempo
            setTimeout(() => {
                setTransactionStatus('');
                setApprovalComplete(false);
            }, 8000);
        }
    };

    if (!activeStage && dataLoaded) {
        return (
            <div className="relative min-h-screen w-full flex justify-center items-center p-6 "
                style={{
                    backgroundImage: `url(${motionBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="bg-[#000000] p-8 rounded-2xl max-w-md w-full border border-[#a41aa4] shadow-lg z-10">
                    <div className="text-center">
                        <p className="text-black">No active stage at the moment.</p>
                    </div>
                </div>
            </div>
        );
    }

    // Garantir que sempre tenhamos valores padrão mesmo enquanto carrega
    const defaultStage = {
        stage_number: '...',
        preco_token: '0.001',
        valor_arrecadado: '0',
        valor_meta: '1000000'
    };
    
    const stageToUse = activeStage || defaultStage;
    const progressPercentage = calculateProgress(stageToUse.valor_arrecadado, stageToUse.valor_meta);

    return (
        <div 
            className="relative w-full flex justify-center items-start p-6 pt-4 flex-col header-padding md:min-h-screen md:items-center md:p-6 md:pt-8"
            style={{
                backgroundImage: `url(${motionBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Overlay para melhorar a visibilidade do card */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            
            {/* Container principal com borda gradiente */}
            <div className="bg-[#000000c8] p-8 rounded-2xl max-w-md w-full border border-[#a41aa4] shadow-lg z-10 backdrop-blur-md">
                {/* Borda gradiente */}
                <div className="absolute inset-0 rounded-2xl -z-10" style={{ padding: '1px', margin: '-1px' }}></div>
                
                <div className="text-center mb-4">
                    <h2 className="text-2xl font-bold mb-1">
                        <span className="text-blue-500">Stage {stageToUse.stage_number}</span>
                        <span className="text-white font-sarpanch">  </span>
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Buy Now</span>
                    </h2>
                    
                    <p className="text-white font-sarpanch text-sm mb-2">Price: $ {stageToUse.preco_token}</p>
                    
                    {/* Barra de Progresso */}
                    <div className="w-full bg-[#000000] rounded-full h-6 mb-2 relative border border-[#a41aa4] overflow-hidden">
                        <div 
                            className="bg-gradient-to-r from-purple-600 to-pink-600 h-full transition-all duration-700" 
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                        <span className="absolute inset-0 flex items-center justify-center text-white font-sarpanch text-xs font-medium">
                            {progressPercentage.toFixed(0)}%
                        </span>
                    </div>
                    
                    <p className="text-white font-sarpanch text-sm mb-0">
                        Raised: $ {formatCurrency(stageToUse.valor_arrecadado)} / {formatCurrency(stageToUse.valor_meta)}
                    </p>
                    <p className="text-white font-sarpanch text-sm">
                        Next Stage: {nextStage ? nextStage.preco_token : 'N/A'} USD
                    </p>
                </div>

                <div className="text-center mb-4">
                    <p className="text-white font-sarpanch mb-2">1 XSTP = $ {stageToUse.preco_token} USD</p>
                    
                    {/* Botões de Seleção */}
                    <div className="flex gap-4 mb-3">
                        <button 
                            className={`flex-1 ${
                                selectedCurrency === 'BNB' 
                                    ? 'bg-gradient-to-r from-purple-700 to-pink-500 hover:from-purple-800 hover:to-pink-600' 
                                    : 'bg-[#ffffff00] border border-[#d22ed0] hover:bg-[#ffffff10]'
                            } text-white font-sarpanch font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all`}
                            onClick={() => handleCurrencyChange('BNB')}
                        >
                            <img src={bnbIcon} alt="BNB" className="w-5 h-5" /> BNB
                        </button>
                        <button 
                            className={`flex-1 ${
                                selectedCurrency === 'USDT' 
                                    ? 'bg-gradient-to-r from-purple-700 to-pink-500 hover:from-purple-800 hover:to-pink-600' 
                                    : 'bg-[#ffffff00] border border-[#d22ed0] hover:bg-[#ffffff10]'
                            } text-white font-sarpanch font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all`}
                            onClick={() => handleCurrencyChange('USDT')}
                        >
                            <img src={usdtIcon} alt="USDT" className="w-5 h-5" /> USDT
                        </button>
                    </div>

                    <div className="text-center mb-3">
                        <div className="flex items-center justify-center gap-2 mb-1">
                            <p className="text-gray-400 text-sm">Our Contract</p>
                            <button 
                                onClick={() => {
                                    const contractAddress = "0x10B29d54f563ca9e96f53eD3a5Cd5D544f78231e";
                                    
                                    // Criar um elemento de input temporário
                                    const el = document.createElement('textarea');
                                    el.value = contractAddress;
                                    el.setAttribute('readonly', '');
                                    el.style.position = 'absolute';
                                    el.style.left = '-9999px';
                                    document.body.appendChild(el);
                                    
                                    // Selecionar o texto do campo
                                    el.select();
                                    el.setSelectionRange(0, 99999); // Para dispositivos móveis
                                    
                                    // Executar a cópia
                                    document.execCommand('copy');
                                    document.body.removeChild(el);
                                }}
                                className="text-gray-400 hover:text-gray-300"
                                title="Copy contract address"
                                id="copyButton"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-gray-400 text-xs">0x10B29d54f563ca9e96f53eD3a5Cd5D544f78231e</p>
                    </div>

                    {/* Campos de Input */}
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1 relative">
                            <input 
                                type="number" 
                                placeholder="0" 
                                className="w-full bg-[#fffefe00] text-white font-sarpanch p-3 rounded-lg pl-3 pr-8 border border-[#c426ec] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                value={inputAmount}
                                onChange={(e) => setInputAmount(e.target.value)}
                            />
                            <img 
                                src={selectedCurrency === 'BNB' ? bnbIcon : usdtIcon} 
                                alt={selectedCurrency} 
                                className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2" 
                            />
                        </div>
                        <div className="flex-1 relative">
                            <input 
                                type="number" 
                                placeholder="0"
                                readOnly
                                value={estimatedTokens}
                                className="w-full bg-[#00000000] text-white font-sarpanch p-3 rounded-lg pl-3 pr-8 border border-[#c426ec] cursor-not-allowed opacity-75 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                            <img 
                                src={xstpIcon} 
                                alt="XSTP" 
                                className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2" 
                            />
                            {calculatingTokens && (
                                <div className="absolute inset-0 flex items-center justify-center bg-[#000000] rounded-lg border border-[#a41aa4]">
                                    <span className="text-gray-400">Loading...</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Botões de Ação */}
                <div className="text-center">
                    {isConnected ? (
                        <>
                            {approvalComplete ? (
                                <button
                                    onClick={handleCompletePurchase}
                                    disabled={transactionStatus.includes('Finalizando')}
                                    className="w-full px-8 py-3 text-white font-sarpanch rounded-lg bg-gradient-to-r from-green-700 to-green-800 hover:from-green-700 hover:to-green-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                                >
                                    Complete Purchase
                                </button>
                            ) : (
                                <button
                                    onClick={handleBuy}
                                    disabled={!inputAmount || parseFloat(inputAmount) <= 0 || calculatingTokens || transactionStatus !== ''}
                                    className="w-full px-8 py-3 text-white font-sarpanch rounded-lg bg-gradient-to-r from-purple-700 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                                >
                                    {selectedCurrency === 'USDT' ? 'Approve USDT' : 'Buy XSTP'}
                                </button>
                            )}
                            
                            {/* Mostrar status da transação */}
                            {transactionStatus && (
                                <div className="mt-3 text-sm">
                                    <div className={`p-3 rounded ${
                                        transactionStatus.includes('Erro') 
                                            ? 'bg-red-900/50 text-red-300 border border-red-700'
                                            : transactionStatus.includes('completed') || transactionStatus.includes('Approval completed')
                                                ? 'bg-green-900/50 text-green-300 border border-green-700'
                                                : 'bg-blue-900/50 text-blue-300 border border-blue-700'
                                    }`}>
                                        {transactionStatus.includes('Erro') 
                                            ? (
                                                <>
                                                    <div className="font-bold mb-1">Attention</div>
                                                    <div>{transactionStatus}</div>
                                                </>
                                            )
                                            : transactionStatus.includes('Aprovação concluída')
                                                ? (
                                                    <>
                                                        <div className="font-bold mb-1">Approval Completed</div>
                                                        <div>Click "Complete Purchase" to finalize the transaction.</div>
                                                    </>
                                                )
                                                : transactionStatus
                                        }
                                    </div>
                                </div>
                            )}
                            
                            {/* Botão de desconectar */}
                            <div className="mt-3 flex flex-col items-center text-sm">
                                <p className="text-gray-500 mb-1">
                                    Connected: {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ''}
                                </p>
                                <button 
                                    onClick={() => disconnect()}
                                    className="text-red-500 hover:text-red-300 text-xs px-3 py-1 border border-red-900 rounded-full hover:bg-red-900/20 transition-colors"
                                >
                                    Disconnect wallet
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="w-full">
                            <ConnectButton fullWidth={true} />
                        </div>
                    )}
                </div>
            </div>
            
            {/* Botões abaixo do card */}
            <div className="flex space-x-3 mt-4 z-10 w-full justify-center">
                <Link to="/how-to-buy" className="bg-[#00000085] text-white text-xs px-4 py-1 rounded-md flex items-center justify-center transition-all duration-300 border border-[#e72effaa] hover:bg-[#1a1a1a99]">
                    How To Buy
                </Link>
                <Link to="/giveaway" className="bg-[#00000085] text-white text-xs px-4 py-1 rounded-md flex items-center justify-center transition-all duration-300 border border-[#e72effaa] hover:bg-[#1a1a1a99]">
                    $1 Million Giveaway
                </Link>
            </div>
            
        </div>
    );
}

export default Presale;