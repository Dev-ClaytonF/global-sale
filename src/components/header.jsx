import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/rwa-startupx-bitcoin.svg'
import whitepaperPdf from '../assets/StartUpX - Official Whitepaper.pdf'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsScrolled(scrollPosition > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Previne o scroll quando o menu mobile está aberto
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    // Função para rolar suavemente até um elemento com ID específico
    const scrollToElement = (elementId) => {
        // Fecha o menu mobile se estiver aberto
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
        
        // Verifica se estamos na página inicial
        if (location.pathname !== '/') {
            // Se não estiver na página inicial, redireciona para lá e depois rola
            navigate('/');
            // Espera um pouco para garantir que a página foi carregada
            setTimeout(() => {
                const element = document.getElementById(elementId);
                if (element) {
                    // Calculando o offset considerando o header e o banner
                    const headerOffset = 150; // Altura do header + banner + um pouco de espaço
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100); // Pequeno atraso para garantir que a página foi carregada
        } else {
            // Se já estiver na página inicial, apenas rola até o elemento
            const element = document.getElementById(elementId);
            if (element) {
                // Calculando o offset considerando o header e o banner
                const headerOffset = 150; // Altura do header + banner + um pouco de espaço
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <>
            {/* Banner Deslizante */}
            <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 overflow-hidden z-[60]">
                <div className="relative flex overflow-x-hidden">
                    <div className="animate-marquee-infinite py-2 whitespace-nowrap flex">
                        <span className="mx-4">
                            <span className="text-white font-bold">🚀 PRE-SALE LIVE NOW</span>
                            <span className="text-white mx-4">StartupX Technology LLC ™ Connect with global startups, leverage your capital, invest today.. Multiply your capital!</span>
                        </span>
                        <span className="mx-4">
                            <span className="text-white font-bold">🚀 PRE-SALE LIVE NOW</span>
                            <span className="text-white mx-4">StartupX Technology LLC ™ Connect with global startups, leverage your capital, invest today.. Multiply your capital!</span>
                        </span>
                        <span className="mx-4">
                            <span className="text-white font-bold">🚀 PRE-SALE LIVE NOW</span>
                            <span className="text-white mx-4">StartupX Technology LLC ™ Connect with global startups, leverage your capital, invest today.. Multiply your capital!</span>
                        </span>
                    </div>
                    <div className="absolute top-0 animate-marquee2-infinite py-2 whitespace-nowrap flex">
                        <span className="mx-4">
                            <span className="text-white font-bold">🚀 PRE-SALE LIVE NOW</span>
                                <span className="text-white mx-4">StartupX Technology LLC: Connect with global startups, leverage your capital, invest today.. Multiply your capital!</span>
                        </span> 
                        <span className="mx-4">
                            <span className="text-white font-bold">🚀 PRE-SALE LIVE NOW</span>
                            <span className="text-white mx-4">StartupX Technology LLC: Connect with global startups, leverage your capital, invest today.. Multiply your capital!</span>
                        </span>
                        <span className="mx-4">
                            <span className="text-white font-bold">🚀 PRE-SALE LIVE NOW</span>
                            <span className="text-white mx-4">StartupX Technology LLC: Connect with global startups, leverage your capital, invest today.. Multiply your capital!</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Espaçador para compensar o banner fixo */}
            <div className="h-10"></div>

            <header className={`fixed w-full z-[55] top-10 transition-all duration-300 ${
                isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-black'
            }`}>
                <div className="max-w-[95%] mx-auto px-2 sm:px-3 lg:px-4">
                    <div className="flex justify-between items-center h-14 relative z-[57]">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex items-center">
                                <img 
                                    src={logo} 
                                    alt="RWA StartupX Bitcoin" 
                                    className="h-5 md:h-3.5 w-auto object-contain hover:opacity-90 transition-opacity"
                                />
                            </Link>
                        </div>

                        {/* Navegação Desktop e Botão */}
                        <div className="hidden md:flex items-center space-x-6">
                            <nav className="flex space-x-4">
                                <Link 
                                    to="/" 
                                    className="text-white hover:text-purple-500 px-2 py-1.5 text-sm font-medium transition-colors"
                                >
                                    Dashboard
                                </Link>
                                <Link 
                                    to="/about-us" 
                                    className="text-white hover:text-purple-500 px-2 py-1.5 text-sm font-medium transition-colors"
                                >
                                    About Us
                                </Link>
                                <Link 
                                    to="/how-to-buy" 
                                    className="text-white hover:text-purple-500 px-2 py-1.5 text-sm font-medium transition-colors"
                                >
                                    How to Buy
                                </Link>
                                <button 
                                    onClick={() => scrollToElement('fund-allocation')} 
                                    className="text-white hover:text-purple-500 px-2 py-1.5 text-sm font-medium transition-colors cursor-pointer"
                                >
                                    Fund Allocation
                                </button>
                                <a 
                                    href={whitepaperPdf}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-purple-500 px-2 py-1.5 text-sm font-medium transition-colors"
                                >
                                    Whitepaper
                                </a>
                                <Link 
                                    to="/giveaway" 
                                    className="text-white hover:text-purple-500 px-2 py-1.5 text-sm font-medium transition-colors"
                                >
                                    $1M Giveaway
                                </Link>
                                <Link 
                                    to="/contact-us" 
                                    className="text-white hover:text-purple-500 px-2 py-1.5 text-sm font-medium transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </nav>

                            {/* Botão Join Community */}
                            <a 
                                href="https://t.me/StartUpXSTP" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center px-3 py-1.5 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors duration-200"
                            >
                                <svg 
                                    className="w-4 h-4 mr-2 fill-current" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.145.118.181.344.203.483.023.139.041.562.041.562z"/>
                                </svg>
                                Join Community
                            </a>
                        </div>

                        {/* Botão Menu Mobile */}
                        <div className="md:hidden relative z-[58]">
                            <button 
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-white p-2 rounded-lg transition-opacity hover:opacity-80"
                                aria-label="Toggle menu"
                            >
                                <svg 
                                    className={`h-8 w-8 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Menu Mobile Dropdown */}
                    <div 
                        className={`md:hidden fixed inset-0 top-24 bg-black z-[56] ${
                            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <div className="px-4 py-6 h-[calc(100vh-6rem)] overflow-y-auto bg-black">
                            <nav className="flex flex-col space-y-4 relative">
                                <Link 
                                    to="/" 
                                    className="text-white hover:opacity-80 py-3 text-lg font-medium border-b border-gray-800"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Dashboard
                                </Link>
                                <Link 
                                    to="/about-us" 
                                    className="text-white hover:opacity-80 py-3 text-lg font-medium border-b border-gray-800"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    About Us
                                </Link>
                                <Link 
                                    to="/how-to-buy" 
                                    className="text-white hover:opacity-80 py-3 text-lg font-medium border-b border-gray-800"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    How to Buy
                                </Link>
                                <button 
                                    onClick={() => scrollToElement('fund-allocation')} 
                                    className="text-white hover:opacity-80 py-3 text-lg font-medium border-b border-gray-800 text-left w-full"
                                >
                                    Fund Allocation
                                </button>
                                <a 
                                    href={whitepaperPdf}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white hover:opacity-80 py-3 text-lg font-medium border-b border-gray-800 text-left w-full"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Whitepaper
                                </a>
                                <Link 
                                    to="/giveaway" 
                                    className="text-white hover:opacity-80 py-3 text-lg font-medium border-b border-gray-800"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    $1M Giveaway
                                </Link>
                                <Link 
                                    to="/contact-us" 
                                    className="text-white hover:opacity-80 py-3 text-lg font-medium border-b border-gray-800"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                            </nav>

                            {/* Botão Join Community Mobile */}
                            <div className="mt-8 bg-black relative">
                                <a 
                                    href="https://t.me/yourcommunity" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-white  to-white  text-black rounded-lg text-lg font-medium hover:from-purple-800 hover:to-purple-950 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <svg 
                                        className="w-5 h-5 mr-3 fill-current" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.145.118.181.344.203.483.023.139.041.562.041.562z"/>
                                    </svg>
                                    Join Community
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

// Adicione estes estilos ao seu arquivo global de CSS ou no Tailwind config
const styles = `
@keyframes marquee {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}

.animate-marquee {
    display: inline-block;
    animation: marquee 30s linear infinite;
}
`;
