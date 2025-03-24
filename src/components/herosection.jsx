import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Componente Mobile
  const MobileHeroSection = () => (
    <div className="flex items-center justify-center bg-black p-4 pt-6 pb-0 header-padding">
      <div className="text-center max-w-[1200px] mt-0">
        {/* Título Principal Mobile */}
        <h1 className="text-4xl font-bold mb-0 leading-tight">
          <span className="block text-3xl bg-gradient-to-r from-[#ffffff]  to-white bg-clip-text text-transparent">
            Invest in the Future with
          </span>
        </h1>

        {/* Container do Subtítulo Mobile */}
        <div className="flex justify-center mb-4 my-2 text-2xl">
          <span className="bg-gradient-to-r from-[#7616b2] to-[#aa00ff] bg-clip-text text-transparent font-bold">
            Liquidity and Scalability
          </span>
        </div>

        <p className="text-[#ffffff] text-base max-w-[800px] text-left leading-relaxed mb-4 px-2 mx-0">
        XSTP , the native token of STARTUPX, is an investment opportunity built on a solid foundation. It connects you to a range of technological, financial, and tokenized asset products. Designed for liquidity and sustainable growth, XSTP delivers increasing value as the cryptocurrency market evolves. This isn’t speculation—it’s certainty: a token engineered for consistent returns and enduring value, offering secure leverage for your capital.
        </p>
        <p className="text-[#ffffff] text-base max-w-[800px] text-left leading-relaxed mb-2 px-2 mx-0">
          <a 
            href="https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResultDetail?inquirytype=EntityName&directionType=Initial&searchNameOrder=STARTUPXTECHNOLOGY%20L250000795110&aggregateId=flal-l25000079511-a8ffddde-5677-494c-b4f0-75442f973712&searchTerm=StartupX%20Technology&listNameOrder=STARTUPXTECHNOLOGY%20L250000795110" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#ffffffd] font-bold"
           >StartUpX Technology LLC</a> is registered with the Florida Department of State </p>
      </div>
    </div>
  );

  // Componente Desktop
  const DesktopHeroSection = () => (
    <div className="flex items-center justify-center bg-black p-8 pt-10 pb-0 header-padding">
      <div className="text-center max-w-[1200px]">
        {/* Título Principal Desktop */}
        <h1 className="text-7xl font-bold mb-0 leading-tight">
          <span className="block text-8xl bg-gradient-to-r from-[#ffffff] to-white bg-clip-text text-transparent">
            Invest in the Future with
          </span>
        </h1>

        {/* Container do Subtítulo Desktop */}
        <div className="flex justify-center mb-6 my-4 text-6xl">
          <span className="bg-gradient-to-r from-[#7616b2] to-[#aa00ff] bg-clip-text text-transparent font-bold">
            Liquidity and Scalability
          </span>
        </div>

        <p className="text-[#ffffff] text-base max-w-[920px] mx-auto leading-relaxed mb-4 px-4">
          The XSTP, the native token of StartupX, isn't just a digital asset it's an investment opportunity built on solid fundamentals.
          It connects you to our technological, financial, and tokenized asset products. Designed for liquidity and sustainable growth,
          XSTP adds value to our network's offerings as the crypto market evolves. This isn't speculation, it's certainty: a token engineered for consistent returns and ongoing value, 
          providing secure leverage for your capital when you join the presale.
        </p>
        <p className="text-[#ffffff] text-base max-w-[920px] mx-auto leading-relaxed mb-2 px-4">
          <a 
            href="https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResultDetail?inquirytype=EntityName&directionType=Initial&searchNameOrder=STARTUPXTECHNOLOGY%20L250000795110&aggregateId=flal-l25000079511-a8ffddde-5677-494c-b4f0-75442f973712&searchTerm=StartupX%20Technology&listNameOrder=STARTUPXTECHNOLOGY%20L250000795110" 
            target="_blank" 
            rel="noopener noreferrer"
              className="text-[#d2f3fd] hover:text-purple-300 transition-colors"
          >StartUpX Technology LLC</a> is registered with the Florida Department of State
        </p>
      </div>
    </div>
  );

  return isMobile ? <MobileHeroSection /> : <DesktopHeroSection />;
};

export default HeroSection;
