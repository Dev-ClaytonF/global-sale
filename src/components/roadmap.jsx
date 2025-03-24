import React, { useEffect, useRef, useState } from 'react';

function Roadmap() {
    // Estado para controlar a visibilidade do botão de voltar ao topo
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Dados do roadmap
    const roadmapData = [
        {
            phase: "Phase 1",
            period: "Q4 2024",
            title: "Launch",
            description: "Launch of the XSTP smart contract on the BSC network, airdrops distribution.",
            color: "from-blue-500 to-purple-600"
        },
        {
            phase: "Phase 2",
            period: "Q1 2025",
            title: "Presale Stage 1 started",
            description: "We launched the presale for Stage 1, alongside updates to the Web3 platform with versions V1 and V2.",
            color: "from-purple-600 to-pink-500"
        },
        {
            phase: "Phase 3",
            period: "Q2 2025",
            title: "Staking & AI Neo: Applying for Audit Certification",
            description: "Unveiling the Staking Program and AI Neo to empower a new era of innovation, while applying for audit certification.",
            color: "from-pink-500 to-red-500"
        },
        {
            phase: "Phase 4",
            period: "Q3 2025",
            title: "Ecosystem Expansion: Launch Xpay Web3 Wallet",
            description: "Introducing the Xpay Web3 Wallet, featuring cutting-edge updates and driving ecosystem growth, alongside listings on decentralized exchanges (DEXs) and centralized exchanges (CEXs), while unveiling a wave of innovative new projects..",
            color: "from-red-500 to-orange-500"
        },
        {
            phase: "Phase 5",
            period: "Q4 2025",
            title: "Platform Evolution: Launch Startupx App and AI Munehisa",
            description: "Launching the StartupX App on Google Play and the Apple App Store, Launch AI Munehisa drives continued ecosystem expansion.",
            color: "from-orange-500 to-yellow-500"
        },
        {
            phase: "Phase 6",
            period: "2026/2027",
            title: "BitX Digital Bank & New Blockchain",
            description: "Powering the development of the groundbreaking blockchain, StartupXChain and BitX Digital Web3 Global Bank, to redefine decentralized finance in the modern era",
            color: "from-yellow-500 to-green-500"
        }
    ];

    // Função para animar os itens do roadmap conforme a rolagem
    useEffect(() => {
        const roadmapItems = document.querySelectorAll('.roadmap-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    entry.target.classList.remove('opacity-0');
                }
            });
        }, { threshold: 0.1 });
        
        roadmapItems.forEach(item => {
            observer.observe(item);
            // Garante que o item começa invisível
            item.classList.add('opacity-0');
        });
        
        return () => {
            roadmapItems.forEach(item => {
                observer.unobserve(item);
            });
        };
    }, []);

    // Função para detectar o scroll e mostrar/esconder o botão
    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScrollTop && window.pageYOffset > 400) {
                setShowScrollTop(true);
            } else if (showScrollTop && window.pageYOffset <= 400) {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScrollTop]);

    // Função para rolar para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="py-12 px-4 bg-black min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-10">
                <span className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">
                    Roadmap
                </span>
            </h1>

            <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto text-sm md:text-base">
                Our strategic plan outlines the path to becoming a leading blockchain ecosystem, with clear phases from launch to global expansion.
            </p>
            
            {/* Layout para desktop */}
            <div className="max-w-4xl mx-auto relative hidden md:block">
                {/* Linha central vertical */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-600 to-green-500 rounded-full"></div>
                
                {/* Itens do roadmap */}
                <div className="space-y-24">
                    {roadmapData.map((item, index) => (
                        <div 
                            key={index}
                            className={`roadmap-item relative flex items-center transition-all duration-1000 ease-out ${
                                index % 2 === 0 ? 'justify-start' : 'justify-end'
                            }`}
                        >
                            {/* Indicador da linha do tempo com o ícone */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-black border-2 border-purple-600 rounded-full z-10 overflow-hidden">
                                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} animate-pulse-glow relative`}>
                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} blur-md animate-pulse-blur opacity-70`}></div>
                                </div>
                            </div>
                            
                            {/* Cartão de informações */}
                            <div 
                                className={`w-5/12 p-5 rounded-xl shadow-lg shadow-purple-900/20 overflow-hidden relative
                                ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                                style={{ transform: `translateX(${index % 2 === 0 ? '-20px' : '20px'})` }}
                            >
                                {/* Fundo gradiente e borda */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2a0845]/90 to-[#6441A5]/90 rounded-xl -z-10"></div>
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
                                
                                {/* Cabeçalho do cartão */}
                                <div className="flex justify-between mb-3 items-center">
                                    <h3 className="font-bold text-white text-lg md:text-xl">{item.phase}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${item.color} text-white font-semibold`}>
                                        {item.period}
                                    </span>
                                </div>
                                
                                {/* Título */}
                                <h4 className="text-gray-200 font-semibold mb-2 text-base md:text-lg">{item.title}</h4>
                                
                                {/* Descrição */}
                                <p className="text-gray-300 text-sm md:text-base">{item.description}</p>
                                
                                {/* Indicador de direção */}
                                <div 
                                    className={`absolute top-6 ${index % 2 === 0 ? 'right-0 rotate-45' : 'left-0 -rotate-45'} 
                                               w-4 h-4 transform translate-x-${index % 2 === 0 ? '2' : '-2'} 
                                               bg-[#2a0845]`}
                                ></div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Card de Global Impact para desktop */}
                    <div className="roadmap-item relative flex items-center justify-center transition-all duration-1000 ease-out">
                        {/* Card de Global Impact */}
                        <div className="w-9/12 p-6 rounded-xl shadow-lg shadow-purple-900/30 overflow-hidden relative bg-black border border-purple-500/30 transform transition-all duration-700 hover:scale-105">
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-purple-600`}></div>
                            
                            <h3 className="text-center font-bold text-white text-xl md:text-2xl mb-4">Global Impact</h3>
                            <p className="text-gray-300 text-sm md:text-base mb-4">
                                Startupx connects investors and entrepreneurs worldwide, driving:
                            </p>
                            
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">1</div>
                                    <div>
                                        <h4 className="text-white font-semibold text-base">Financial Inclusion</h4>
                                        <p className="text-gray-300 text-sm">Making opportunities accessible to everyone.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">2</div>
                                    <div>
                                        <h4 className="text-white font-semibold text-base">International Partnerships</h4>
                                        <p className="text-gray-300 text-sm">Building a robust global ecosystem.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">3</div>
                                    <div>
                                        <h4 className="text-white font-semibold text-base">Promoting Global Business Collaboration</h4>
                                        <p className="text-gray-300 text-sm">Facilitating economic cooperation across regions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Layout vertical para mobile */}
            <div className="md:hidden max-w-sm mx-auto relative">
                {/* Itens do roadmap para mobile */}
                <div className="space-y-14 pt-5">
                    {roadmapData.map((item, index) => (
                        <div 
                            key={index}
                            className="roadmap-item relative transition-all duration-1000 ease-out"
                        >
                            {/* Cartão de informações centralizado */}
                            <div 
                                className="w-full mx-auto p-4 rounded-xl shadow-lg shadow-purple-900/20 overflow-hidden relative"
                            >
                                {/* Fundo gradiente e borda */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2a0845]/90 to-[#6441A5]/90 rounded-xl -z-10"></div>
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
                                
                                {/* Cabeçalho do cartão */}
                                <div className="flex justify-between mb-2 items-center">
                                    <h3 className="font-bold text-white text-base">{item.phase}</h3>
                                    <span className={`px-2 py-1 rounded-full text-xs bg-gradient-to-r ${item.color} text-white font-semibold`}>
                                        {item.period}
                                    </span>
                                </div>
                                
                                {/* Título */}
                                <h4 className="text-gray-200 font-semibold mb-2 text-sm">{item.title}</h4>
                                
                                {/* Descrição */}
                                <p className="text-gray-300 text-xs">{item.description}</p>
                            </div>
                            
                            {/* Seta separadora após cada box (exceto o último) */}
                            {index < roadmapData.length - 1 && (
                                <div className="flex justify-center mt-5">
                                    <div className={`arrow-down-container bg-gradient-to-r ${item.color} animate-bounce-slow p-0.5 rounded-full`}>
                                        <div className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="20" 
                                                height="20" 
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeWidth="3" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round"
                                                className={`text-white opacity-80 chevron-down`}
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    
                    {/* Seta final apontando para o card de impacto global */}
                    <div className="flex justify-center">
                        <div className="arrow-down-container bg-gradient-to-r from-yellow-400 to-purple-600 animate-bounce-slow p-0.5 rounded-full">
                            <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="3" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    className="text-yellow-400 opacity-90 chevron-down"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    {/* Card de Global Impact para mobile */}
                    <div className="roadmap-item relative transition-all duration-1000 ease-out">
                        <div className="w-full mx-auto p-4 rounded-xl shadow-lg shadow-purple-900/30 overflow-hidden relative bg-black border border-purple-500/30">
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-purple-600`}></div>
                            
                            <h3 className="text-center font-bold text-white text-lg mb-3">Global Impact</h3>
                            <p className="text-gray-300 text-xs mb-3">
                                Startupx connects investors and entrepreneurs worldwide, driving:
                            </p>
                            
                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">1</div>
                                    <div>
                                        <h4 className="text-white font-semibold text-xs">Financial Inclusion</h4>
                                        <p className="text-gray-300 text-xs">Making opportunities accessible to everyone.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-2">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">2</div>
                                    <div>
                                        <h4 className="text-white font-semibold text-xs">International Partnerships</h4>
                                        <p className="text-gray-300 text-xs">Building a robust global ecosystem.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-2">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">3</div>
                                    <div>
                                        <h4 className="text-white font-semibold text-xs">Promoting Global Business Collaboration</h4>
                                        <p className="text-gray-300 text-xs">Facilitating economic cooperation across regions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botão fixo para voltar ao topo */}
            <div 
                className={`fixed left-5 bottom-10 z-50 transition-opacity duration-300 ${
                    showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <button 
                    onClick={scrollToTop} 
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    aria-label="Voltar ao topo"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-white"
                    >
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    );
}

// Adiciona animação de fade-in ao Tailwind
const extendedStyles = `
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
}

@keyframes pulseGlow {
    0% {
        transform: scale(0.85);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
    
    50% {
        transform: scale(1);
        box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
    }
    
    100% {
        transform: scale(0.85);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
}

.animate-pulse-glow {
    animation: pulseGlow 2s infinite;
}

@keyframes pulseBlur {
    0% {
        opacity: 0.4;
        transform: scale(0.8);
    }
    
    50% {
        opacity: 0.8;
        transform: scale(1.5);
    }
    
    100% {
        opacity: 0.4;
        transform: scale(0.8);
    }
}

.animate-pulse-blur {
    animation: pulseBlur 3s infinite;
}

@keyframes bounceSlow {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(8px);
    }
}

.animate-bounce-slow {
    animation: bounceSlow 2s ease-in-out infinite;
}

@keyframes spinSlow {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.animate-spin-slow {
    animation: spinSlow 20s linear infinite;
}
`;

// Injeta estilos CSS no cabeçalho
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = extendedStyles;
    document.head.appendChild(style);
}

export default Roadmap;