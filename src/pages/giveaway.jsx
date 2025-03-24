import React from 'react';
import Header from '../components/header';
import giveawayBanner from '../assets/GIVEAWAY.png';
import Social from '../components/social';

function Giveaway() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Header />
            
            {/* Banner principal */}
            <div className="w-full flex justify-center">
                <div className="max-w-6xl w-full px-4">
                    <img 
                        src={giveawayBanner} 
                        alt="StartupX $1M Giveaway" 
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
            
            {/* Conteúdo adicional pode ser adicionado aqui */}
            <div className="flex-grow flex flex-col items-center justify-start p-4 mt-0 md:mt-0">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                       
                    </span>
                </h2>
                    
                {/* Informações adicionais podem ser incluídas aqui */}
                <Social />
            </div>
          
        </div>
    )
}   

export default Giveaway;
