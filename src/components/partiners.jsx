import logo1 from '../assets/l1.svg';
import logo2 from '../assets/l2.svg';
import logo3 from '../assets/l3.svg';
import logo4 from '../assets/l4.svg';
import logo5 from '../assets/l5.svg';
import logo6 from '../assets/l6.svg';
import logo7 from '../assets/l7.svg';
import logo8 from '../assets/l8.svg';
import { useEffect, useState, useRef } from 'react';

function Partiners() {
    const [animationStyle, setAnimationStyle] = useState({});
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);
    
    useEffect(() => {
        // Função para configurar a animação
        const setupAnimation = () => {
            if (!containerRef.current || !scrollerRef.current) return;
            
            // Configura estilo para rolagem infinita com velocidade adequada
            setAnimationStyle({
                animation: `scroll 30s linear infinite`,
            });
        };
        
        setupAnimation();
        
        // Reconfigura ao redimensionar
        window.addEventListener('resize', setupAnimation);
        
        return () => window.removeEventListener('resize', setupAnimation);
    }, []);
    
    // Definição da animação como objeto de estilo (keyframes)
    const keyframes = `
        @keyframes scroll {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }
    `;
    
    // CSS para os efeitos de fade nas laterais
    const fadeStyles = `
        .partner-container:before,
        .partner-container:after {
            content: '';
            position: absolute;
            top: 0;
            width: 150px;
            height: 100%;
            z-index: 2;
            pointer-events: none;
        }
        
        .partner-container:before {
            left: 0;
            background: linear-gradient(to right, #000000 0%, rgba(0, 0, 0, 0) 100%);
        }
        
        .partner-container:after {
            right: 0;
            background: linear-gradient(to left, #000000 0%, rgba(0, 0, 0, 0) 100%);
        }
        
        @media (max-width: 768px) {
            .partner-container:before,
            .partner-container:after {
                width: 80px;
            }
        }
    `;
    
    const logos = [
        { src: logo1, alt: "Partner 1" },
        { src: logo2, alt: "Partner 2" },
        { src: logo3, alt: "Partner 3" },
        { src: logo4, alt: "Partner 4" },
        { src: logo5, alt: "Partner 5" },
        { src: logo6, alt: "Partner 6" },
        { src: logo7, alt: "Partner 7" },
        { src: logo8, alt: "Partner 8" }
    ];
    
    // Criar um conjunto de logos que será duplicado para garantir rolagem contínua
    // A técnica é mostrar duas cópias do mesmo conjunto, e a animação apenas desloca metade do conjunto
    const allLogos = [...logos, ...logos, ...logos, ...logos];
    
    return (
        <div className="w-full bg-[#000000] border-t border-b border-[#000000] py-4">
            {/* Inserir keyframes para a animação */}
            <style>{keyframes}</style>
            <style>{fadeStyles}</style>
            
            <div className="container mx-auto px-0" ref={containerRef}>
                <div className="overflow-hidden relative partner-container">
                    <div 
                        className="flex space-x-8 md:space-x-10 lg:space-x-12 w-fit" 
                        style={animationStyle}
                        ref={scrollerRef}
                    >
                        {allLogos.map((logo, index) => (
                            <div key={index} className="flex justify-center items-center flex-shrink-0">
                                <img 
                                    src={logo.src} 
                                    alt={logo.alt} 
                                    className="h-12 md:h-8 lg:h-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}   

export default Partiners;
