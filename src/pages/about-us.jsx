import aboutBanner from '../assets/about.png';

function AboutUs() {
    return (
        <div className="w-full flex flex-col items-center bg-black text-white min-h-screen">
            {/* Banner */}
            <div className="w-full relative">
                <img 
                    src={aboutBanner} 
                    alt="StartupX Banner" 
                    className="w-full object-cover h-[300px] md:h-[350px]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 flex items-end justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
                      
                    </h1>
                </div>
            </div>
            
            {/* Conteúdo */}
            <div className="container mx-auto px-4 py-8 md:py-6 max-w-4xl">
                <div className="bg-[#000000] border border-[#a41aa4] rounded-xl p-6 md:p-8 shadow-lg mb-6">
                    <p className="mb-0 text-lg leading-relaxed">
                        <span className="font-bold text-white">STARTUPX</span> is officially registered as <span className="font-bold text-white">STARTUPX TECHNOLOGY LLC</span>, established in the United States and strategically based in Florida, enhancing its credibility and access to international markets—an ideal starting point for investors and partners seeking high-impact opportunities!
                    </p>
                </div>
                
                <div className="bg-[#000000] border border-[#a41aa4] rounded-xl p-6 md:p-8 shadow-lg mb-6 mt-6">
                    <h2 className="text-2xl font-bold mb-4 text-white">
                        Our Ecosystem
                    </h2>
                    
                    <p className="mb-6 leading-relaxed">
                        STARTUPX features its native token, <span className="font-bold text-white">XSTP</span>, which amplifies asset liquidity and diversifies investment possibilities. It combines intelligent support through <span className="font-bold text-white">AI Neo</span>, which boosts your projects, and <span className="font-bold text-white">AI Munehisa</span>, which aids in trading strategies. 
                    </p>
                    
                    <p className="mb-0 leading-relaxed">
                        The tokenization of real-world assets (RWA) will bring valuable opportunities for investors and handpicked startups. The <span className="font-bold text-white">XPay Wallet</span> and <span className="font-bold text-white">BitX Bank Web3</span> will deliver fast, secure transactions, while a custom blockchain, currently under development, will ensure scalability and security for real assets and financial solutions.
                    </p>
                </div>
                
                <div className="bg-[#000000] border border-[#a41aa4] rounded-xl p-6 md:p-8 shadow-lg mt-6">
                    <h2 className="text-2xl font-bold mb-4 text-white">
                        XSTP Token
                    </h2>
                    
                    <p className="leading-relaxed">
                        The native token <span className="font-bold text-white">XSTP</span> lets you tap into the STARTUPX ecosystem, offering countless benefits and a strong potential for capital leverage.
                    </p>
                </div>
            </div>
        </div>
    );
}   

export default AboutUs;
