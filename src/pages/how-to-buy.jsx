import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function HowToBuy() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Header />
            
        
            
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        How to Buy XSTP
                    </span>
                </h1>
                
                {/* Nota de aviso */}
                <div className="bg-neutral-900 border border-gray-700 rounded-lg p-4 mb-8">
                    <h2 className="text-xl font-bold mb-2 text-white">Note</h2>
                    <p className="text-gray-300">
                        XSTP Tokens is currently in its presale phase and is not available to trade on Uniswap, PancakeSwap, or any other decentralized exchanges (DEXs). 
                        Please be cautious and avoid purchasing any fake XSTP tokens that may be circulating on DEXs, as they are scams.
                    </p>
                </div>
                
                {/* Step 1 */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Step 1: Prepare Your Wallet (WEB3)
                    </h2>
                    <p className="text-gray-300 mb-3">
                        Before participating in the XSTP presale, ensure you have a wallet supported by Wallet Connect. 
                        We recommend using MetaMask, Trust Wallet or Coinbase Wallet, but any decentralized wallet compatible with Wallet Connect will work.
                    </p>
                </div>
                
                {/* Step 2 */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Step 2: Get BNB
                    </h2>
                    <p className="text-gray-300 mb-3">
                        Make sure you have BNB in your wallet, as it is required for gas fees on the BSC PEB20 network, 
                        regardless of whether you are purchasing with USDT.
                    </p>
                </div>
                
                {/* Step 3 */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Step 3: Connect to the DApp
                    </h2>
                    <ol className="list-decimal list-inside pl-4 text-gray-300 space-y-2">
                        <li>Open your preferred web browser and visit StartupX</li>
                        <li>Click the "Connect Wallet" button.</li>
                        <li>Ensure you are on the BSC BEP20 (BNB Smart Chain) Mainnet.</li>
                    </ol>
                    
                    <div className="mt-4 bg-neutral-900 border border-gray-700 rounded-lg p-4">
                        <p className="text-gray-300 mb-2">
                            To see your XSTP tokens in your wallet, add StartUpX (XSTP) as a custom token by using the following details:
                        </p>
                        <ul className="list-disc list-inside pl-4 text-gray-300 space-y-1">
                            <li>Token Name: StartUpX</li>
                            <li>Symbol: XSTP</li>
                            <li>Network/Chain: BNB Smart Chain</li>
                            <li>Decimals: 18</li>
                            <li className="break-all">Contract Address: <span className="font-mono text-sm">0x10B29d54f563ca9e96f53eD3a5Cd5D544f78231e</span></li>
                        </ul>
                        <p className="text-gray-300 mt-2">
                            Once added, users will be able to see their XSTP tokens in their wallets.
                        </p>
                    </div>
                </div>
                
                {/* Step 4 */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Step 4: Choose Payment Option
                    </h2>
                    <p className="text-gray-300 mb-3">
                        On the XSTP dashboard, select your preferred payment option by clicking the appropriate button (BNB or USDT).
                    </p>
                </div>
                
                {/* Step 5 */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Step 5: Enter Purchase Amount
                    </h2>
                    <ol className="list-decimal list-inside pl-4 text-gray-300 space-y-2">
                        <li>Enter the amount of BNB or USDT you want to invest in the XSTP presale.</li>
                        <li>The dashboard will display how many XSTP tokens you will receive for the selected amount.</li>
                        <li>Confirm your selection and click the "Buy Tokens" button to proceed.</li>
                    </ol>
                </div>
                
                {/* Step 6 */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Step 6: Verify and Confirm Transaction
                    </h2>
                    <ol className="list-decimal list-inside pl-4 text-gray-300 space-y-2">
                        <li>Your wallet (e.g., MetaMask) will display the transaction details.</li>
                        <li>Verify that the transaction details are correct, including the amount and recipient address.</li>
                        <li>Confirm the transaction within your wallet.</li>
                        <li>Wait for the transaction to be confirmed on the BSC network, which may take time depending on network congestion.</li>
                    </ol>
                    
                    <div className="mt-4 bg-neutral-900 border border-gray-700 rounded-lg p-4">
                        <p className="text-white font-semibold mb-2">IMPORTANT TO NOTE:</p>
                        <p className="text-gray-300 mb-2">
                            When purchasing with USDT, users must complete two transactions:
                        </p>
                        <ol className="list-decimal list-inside pl-4 text-gray-300 space-y-1">
                            <li>The first transaction is to approve the USDT contract.</li>
                            <li>The second transaction is for the actual purchase amount.</li>
                        </ol>
                        <p className="text-gray-300 mt-2">
                            Ensure both steps are completed to finalize your transaction.
                        </p>
                    </div>
                </div>
                
                {/* Step 7 */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Step 7: Purchase Successful
                    </h2>
                    <p className="text-gray-300 mb-3">
                        Once the transaction is confirmed, your XSTP tokens will be sent to your wallet in real-time.
                    </p>
                </div>
                
                {/* Alternative Method */}
                <div className="bg-neutral-900 border border-gray-700 rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Alternative Method: Buying with Card
                    </h2>
                    
                    {/* Alternative Step 1 */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-3 text-white">
                            Step 1: Purchase BNB with Card
                        </h3>
                        <p className="text-gray-300 mb-3">
                            Visit one of the following on-ramp websites:
                        </p>
                        <ul className="list-disc list-inside pl-4 text-gray-300 space-y-1 mb-3">
                            <li>
                                <a href="https://example.com/transak" target="_blank" rel="noopener noreferrer" 
                                   className="text-purple-400 hover:text-purple-300 transition-colors">
                                    Transak 
                                </a>
                            </li>
                            <li>
                                <a href="https://example.com/banxa" target="_blank" rel="noopener noreferrer"
                                   className="text-purple-400 hover:text-purple-300 transition-colors">
                                    Banxa.com
                                </a>
                            </li>
                            <li>
                                <a href="https://example.com/moonpay" target="_blank" rel="noopener noreferrer"
                                   className="text-purple-400 hover:text-purple-300 transition-colors">
                                    MoonPay
                                </a>
                            </li>
                        </ul>
                        
                        <div className="flex items-center mt-4 mb-5">
                            <a 
                                href="https://www.youtube.com/watch?v=POe59M28uqE&t=8s" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                            >
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                                <span>Video tutorial step by step</span>
                            </a>
                        </div>
                        
                        <p className="text-gray-300 mb-3">
                            Buy BNB and send it directly to your wallet. Follow the on-screen instructions provided on the platform.
                        </p>
                        <p className="text-gray-300 italic">
                            Tip: We recommend purchasing a minimum of $2 worth of BNB to cover all expenses, including gas fees, for buying XSTP.
                        </p>
                    </div>
                    
                    {/* Alternative Step 2 */}
                    <div>
                        <h3 className="text-lg font-bold mb-3 text-white">
                            Step 2: Buy XSTP with Acquired BNB
                        </h3>
                        <p className="text-gray-300 mb-3">
                            Once you've acquired BNB in your wallet, you can proceed to purchase XSTP using the same wallet.
                            Follow the steps outlined earlier in the "How to Buy XSTP Tokens" section, starting from connecting your wallet to the XSTP website.
                        </p>
                        <p className="text-gray-300 italic">
                            Note: Ensure you have enough BNB in your wallet to cover the amount of XSTP you wish to purchase, as well as any associated gas fees.
                        </p>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default HowToBuy;
