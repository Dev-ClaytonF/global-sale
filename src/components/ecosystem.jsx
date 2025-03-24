import { useState } from 'react';
import whitepaperPdf from '../assets/StartUpX - Official Whitepaper.pdf';
// Importando todas as imagens necessárias
import tokenizacaoMobile from '../assets/tokenização_mobile.png';
import tokenizacao from '../assets/tokenização.png';
import blockchainMobile from '../assets/blockchain_mobile.png';
import blockchain from '../assets/blockchain.png';
import xpayMobile from '../assets/xpay_mobile.png';
import xpay from '../assets/xpay.png';
import bitxMobile from '../assets/bitx_mobile.png';
import bitx from '../assets/bitx.png';
import aiMobile from '../assets/ai_mobile.png';
import ai from '../assets/ai.png';

function Ecosystem() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 md:p-8 bg-black">
            <h1 className="text-4xl font-bold text-center mb-4 header-padding">
                <span className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">
                    Core Pillars of the StartupX Ecosystem
                </span>
            </h1>
            
            {/* Botão de Whitepaper */}
            <a 
                href={whitepaperPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 mb-5 mt-5 rounded-full bg-gradient-to-r from-purple-700 to-pink-500 hover:from-purple-800 hover:to-pink-600 text-white font-medium transition-all duration-300 transform hover:scale-105"
            >
                Read our Whitepaper
            </a>

            {/* Grid 1: Imagem à esquerda, texto à direita */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-6xl my-8 md:my-16">
                {/* Ordem no mobile: Imagem, depois texto */}
                <div className="flex items-center justify-center p-4 md:p-6 md:order-1 order-1">
                    {/* Versão mobile da imagem Tokenização */}
                    <div 
                        className="md:hidden bg-black p-2 rounded-xl border border-purple-500 w-full h-64 flex items-center justify-center overflow-hidden relative group cursor-pointer"
                        onClick={() => openModal(tokenizacaoMobile)}
                    >
                        <img src={tokenizacaoMobile} alt="Tokenização de Empresas Mobile" className="w-auto h-[240px] max-w-full object-contain transition-transform duration-300 group-hover:scale-110" />
                        {/* Ícone de lupa */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                    
                    {/* Versão desktop da imagem Tokenização */}
                    <div 
                        className="hidden md:flex bg-black p-2 rounded-xl border border-purple-500 w-full h-64 items-center justify-center overflow-hidden relative group cursor-pointer"
                        onClick={() => openModal(tokenizacao)}
                    >
                        <img src={tokenizacao} alt="Tokenização de Empresas" className="w-auto h-[240px] max-w-full object-contain transition-transform duration-300 group-hover:scale-110" />
                        {/* Ícone de lupa */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center md:order-2 order-2 p-3 md:p-4">
                    <h2 className="text-2xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-[#7616b2] to-[#aa00ff] bg-clip-text text-transparent">
                        Tokenization of Companies: Democratizing Access to Capital
                        </span>
                    </h2>
                    <p className="text-white/80">
                    Startupx is transforming the investment landscape by democratizing access to capital through asset tokenization. This process allows startups and companies to convert their assets into tokens, enabling efficient fundraising and offering investors the opportunity to acquire fractional ownership of projects with high return potential. With tokenization, companies can access global capital markets, driving growth across various sectors in an agile and accessible way.
                    </p>
                </div>
            </div>

            {/* Grid 2: Texto à esquerda, imagem à direita */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-6xl my-8 md:my-16">
                {/* No mobile, a imagem vem primeiro, seguida pelo texto */}
                <div className="flex items-center justify-center order-1 md:order-none p-4 md:p-6 md:hidden">
                    <div 
                        className="bg-black p-2 rounded-xl border border-purple-500 w-full h-64 flex items-center justify-center overflow-hidden relative group cursor-pointer"
                        onClick={() => openModal(blockchainMobile)}
                    >
                        <img src={blockchainMobile} alt="Blockchain Technology Mobile" className="w-auto h-[240px] max-w-full object-contain transition-transform duration-300 group-hover:scale-110" />
                        {/* Ícone de lupa */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center order-2 md:order-none p-3 md:p-4">
                    <h2 className="text-2xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-[#7616b2] to-[#aa00ff] bg-clip-text text-transparent">
                        An Exclusive Blockchain for RWA and Fintechs
                        </span>
                    </h2>
                    <p className="text-white/80">
                    Startupx is developing a next-generation blockchain designed specifically for Real-World Assets (RWA) and fintech applications. This blockchain will provide developers with the infrastructure to create solutions tailored to corporate needs. The main applications include supply chain management, administrative systems, logistics optimization, and decentralized financial services (DeFi) for businesses. By focusing on scalability, security, and interoperability, this blockchain will meet the demands of large-scale corporate operations, promoting transparency and efficiency.
                    </p>
                </div>
                {/* Versão desktop da imagem à direita */}
                <div className="hidden md:flex items-center justify-center p-4 md:p-6">
                    <div 
                        className="bg-black p-2 rounded-xl border border-purple-500 w-full h-64 flex items-center justify-center overflow-hidden relative group cursor-pointer"
                        onClick={() => openModal(blockchain)}
                    >
                        <img src={blockchain} alt="Blockchain Technology" className="w-auto h-[240px] max-w-full object-contain transition-transform duration-300 group-hover:scale-110" />
                        {/* Ícone de lupa */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid 3: Imagem à esquerda, texto à direita */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-6xl my-8 md:my-16">
                <div className="flex items-center justify-center p-4 md:p-6 md:order-1 order-1">
                    {/* Versão mobile da imagem XPay */}
                    <div 
                        className="md:hidden bg-black p-2 rounded-xl border border-purple-500 w-full h-64 flex items-center justify-center overflow-hidden relative group cursor-pointer"
                        onClick={() => openModal(xpayMobile)}
                    >
                        <img src={xpayMobile} alt="XPay Wallet Mobile" className="w-auto h-[240px] max-w-full object-contain transition-transform duration-300 group-hover:scale-110" />
                        {/* Ícone de lupa */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                    
                    {/* Versão desktop da imagem XPay */}
                    <div 
                        className="hidden md:flex bg-black p-2 rounded-xl border border-purple-500 w-full h-64 items-center justify-center overflow-hidden relative group cursor-pointer"
                        onClick={() => openModal(xpay)}
                    >
                        <img src={xpay} alt="XPay Wallet" className="w-auto h-[240px] max-w-full object-contain transition-transform duration-300 group-hover:scale-110" />
                        {/* Ícone de lupa */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center md:order-2 order-2 p-3 md:p-4">
                    <h2 className="text-2xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-[#7616b2] to-[#aa00ff] bg-clip-text text-transparent">
                        XPay Wallet: Your Complete Cryptocurrency Solution
                        </span>
                    </h2>
                    <p className="text-white/80">
                    The XPay Wallet, currently in development, will be a secure and intuitive solution for managing cryptocurrencies with ease. Designed to offer secure token storage, swapping functionality between different crypto assets, and direct purchases, it simplifies the user experience in the blockchain universe. With a focus on fast and practical transactions, the XPay Wallet allows users to store a variety of tokens, instantly swap assets, and make purchases on integrated platforms, making it an essential tool for enthusiasts and users in the Web3 ecosystem.
                    </p>
                </div>
            </div>

            {/* Grid 4: Texto à esquerda, imagem à direita */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-6xl my-8 md:my-16">
                {/* No mobile, a imagem vem primeiro, seguida pelo texto */}
                <div className="flex items-center justify-center order-1 md:order-none p-4 md:p-6 md:hidden">
                    <div 
                        className="bg-black p-2 rounded-xl border border-purple-500 w-full h-64 flex items-center justify-center overflow-hidden relative group cursor-pointer"
                        onClick={() => openModal(bitxMobile)}
                    >
                        <img src={bitxMobile} alt="BitX Bank Mobile" className="w-auto h-[240px] max-w-full object-contain transition-transform duration-300 group-hover:scale-110" />
                        {/* Ícone de lupa */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center order-2 md:order-none p-3 md:p-4">
                    <h2 className="text-2xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-[#7616b2] to-[#aa00ff] bg-clip-text text-transparent">
                        BitX Bank: DeFi Integration
                        </span>
                    </h2>
                    <p className="text-white/80">
                    BitX Bank integrates traditional finance and blockchain technology. Integrated with the XPay Wallet, it provides a seamless experience in the Web3 universe. Among the services offered, the following stand out: a Global Mastercard for worldwide payments with cryptocurrencies; loans backed by crypto assets and staking for yields, made available through partnerships; as well as facilitating the purchase and sale of cryptocurrencies with multichain support directly within the system. BitX Bank always prioritizes security, transparency, and accessibility for its users.
                    </p>
                </div>
                {/* Versão desktop da imagem à direita */}
                <div className="hidden md:flex items-center justify-center p-4 md:p-6">
                    <div 
                        className="bg-black p-2 rounded-xl border border-purple-500 w-full h-64 flex items-center justify-center overflow-hidden relative group cursor-pointer"
                        onClick={() => openModal(bitx)}
                    >
                        <img src={bitx} alt="BitX Bank" className="w-auto h-[240px] max-w-full object-contain transition-transform duration-300 group-hover:scale-110" />
                        {/* Ícone de lupa */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid 5: Imagem acima, texto abaixo (destaque especial) */}
            <div className="flex flex-col w-full max-w-6xl my-8 md:my-16 gap-2 md:gap-6">
                {/* Versão mobile da imagem */}
                <div 
                    className="md:hidden w-full bg-black p-2 rounded-xl border border-purple-500 flex items-center justify-center overflow-hidden relative group cursor-pointer h-80"
                    onClick={() => openModal(aiMobile)}
                >
                    <img 
                        src={aiMobile} 
                        alt="AI NEO and IA MUNEHISA" 
                        className="w-auto h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" 
                    />
                    {/* Ícone de lupa */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Versão desktop da imagem */}
                <div 
                    className="hidden md:flex w-full bg-black p-2 rounded-xl border border-purple-500 items-center justify-center overflow-hidden relative group cursor-pointer h-96"
                    onClick={() => openModal(ai)}
                >
                    <img 
                        src={ai} 
                        alt="AI NEO and IA MUNEHISA" 
                        className="w-auto h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" 
                    />
                    {/* Ícone de lupa */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
                
                {/* Texto centralizado abaixo da imagem */}
                <div className="flex flex-col justify-center md:items-center p-3 md:p-4 text-left md:text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 md:text-center text-left">
                        <span className="bg-gradient-to-r from-[#7616b2] to-[#aa00ff] bg-clip-text text-transparent">
                            AI NEO and IA MUNEHISA
                        </span>
                    </h2>
                    <p className="text-white/80 max-w-3xl text-left md:text-center">
                        Startupx is developing the artificial intelligence platforms AI NEO and MUNEHISA. AI NEO is a multifunctional tool that transforms knowledge into value, offering comprehensive research, customized content generation, and multidisciplinary support across fields such as finance, technology, health, and entertainment. Meanwhile, MUNEHISA focuses on automated trading strategies to maximize investor returns. Both platforms are currently under development and promise to revolutionize how businesses and investors operate in the market.
                    </p>
                </div>
            </div>

            {/* Modal para visualizar a imagem em tamanho grande */}
            {showModal && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
                    <div className="relative max-w-4xl max-h-[90vh] w-full">
                        <button 
                            className="absolute top-4 right-4 bg-purple-700 rounded-full p-2 text-white hover:bg-purple-800 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeModal();
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img 
                            src={selectedImage} 
                            alt="Imagem ampliada" 
                            className="max-w-full max-h-[85vh] object-contain mx-auto"
                            onClick={(e) => e.stopPropagation()} 
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Ecosystem;