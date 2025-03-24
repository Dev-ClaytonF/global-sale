import React from 'react';
import Header from '../components/header';


const TermsAndConditions = () => {
    return (
      <div className="bg-black text-white min-h-screen">
        <Header />
        
        {/* Espaço para o header fixo */}
        <div className="h-1"></div>
        
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">
            <span className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">
              TERMS OF USE - StartupX
            </span>
          </h1>
          
          <div className="text-right italic text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
            Last Updated: Feb/2025
          </div>
  
          <div className="space-y-4 md:space-y-8">
            {/* 1. ACCEPTANCE OF TERMS */}
            <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                1. ACCEPTANCE OF TERMS
              </h2>
              <p className="text-sm md:text-base text-gray-300">
                By accessing and using the StartupX platform ("Platform"), you expressly agree to these Terms of Use ("Terms"). If you do not agree with any provision of these Terms, please do not use our Platform.
              </p>
            </section>
  
            {/* 2. DEFINITIONS */}
            <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                2. DEFINITIONS
              </h2>
              <div className="space-y-2 text-sm md:text-base text-gray-300">
                <p>2.1. "Platform" refers to the website and services offered by StartupX.</p>
                <p>2.2. "RWA" (Real World Assets) refers to real-world assets that are tokenized.</p>
                <p>2.3. "Tokens" refers to digital representations of assets on the blockchain.</p>
                <p>2.4. "User" refers to any individual or legal entity that accesses or uses the Platform.</p>
              </div>
            </section>
  
            {/* 3. SERVICES */}
            <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                3. SERVICES
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                3.1. StartupX offers a platform for:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 mb-3 md:mb-4">
                <li>Tokenization of real-world assets (RWA)</li>
                <li>Trading of cryptocurrencies</li>
                <li>Custody of digital assets</li>
                <li>Blockchain-related services</li>
              </ul>
              <p className="text-sm md:text-base text-gray-300">
                3.2. The services are subject to availability and may be modified or discontinued at any time.
              </p>
            </section>
  
            {/* 4. ELIGIBILITY */}
            <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                4. ELIGIBILITY
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                4.1. To use the Platform, you must:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                <li>Be at least 18 years old</li>
                <li>Have full legal capacity</li>
                <li>Provide true and complete information during registration</li>
                <li>Comply with KYC (Know Your Customer) and AML (Anti-Money Laundering) procedures</li>
              </ul>
            </section>
  
            {/* 5. RISKS AND RESPONSIBILITIES */}
            <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                5. RISKS AND RESPONSIBILITIES
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                5.1. The user acknowledges that:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 mb-3 md:mb-4">
                <li>The crypto asset market is volatile and involves risks</li>
                <li>Investments in RWA and cryptocurrencies may result in losses</li>
                <li>StartupX does not guarantee returns on investments</li>
                <li>The user is responsible for their investment decisions</li>
              </ul>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                5.2. StartupX is not responsible for:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                <li>Losses resulting from investment decisions</li>
                <li>Technical failures beyond our control</li>
                <li>Actions of third parties</li>
                <li>Force majeure events</li>
              </ul>
            </section>
  
            {/* 6. SECURITY AND PRIVACY */}
            <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                6. SECURITY AND PRIVACY
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                6.1. The user must:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 mb-3 md:mb-4">
                <li>Keep their access credentials secure</li>
                <li>Use two-factor authentication</li>
                <li>Report any suspicious activity immediately</li>
                <li>Follow recommended security best practices</li>
              </ul>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                6.2. StartupX commits to:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                <li>Protecting personal data in accordance with LGPD</li>
                <li>Implementing appropriate security measures</li>
                <li>Notifying users of relevant data breaches</li>
                <li>Maintaining an up-to-date privacy policy</li>
              </ul>
            </section>
  
            {/* 7. COMPLIANCE AND REGULATION */}
            <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                7. COMPLIANCE AND REGULATION
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                7.1. StartupX operates in compliance with:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 mb-3 md:mb-4">
                <li>Applicable cryptocurrency legislation</li>
                <li>Financial market regulations</li>
                <li>Anti-money laundering standards</li>
                <li>Consumer protection requirements</li>
              </ul>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                7.2. The user must comply with:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                <li>Applicable laws and regulations</li>
                <li>Tax and fiscal obligations</li>
                <li>KYC/AML requirements</li>
                <li>Jurisdictional restrictions</li>
              </ul>
            </section>
  
            {/* 8. FEES AND PAYMENTS */}
            <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                8. FEES AND PAYMENTS
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                8.1. StartupX charges fees for:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 mb-3 md:mb-4">
                <li>Asset tokenization</li>
                <li>Platform transactions</li>
                <li>Custody services</li>
                <li>Other specific services</li>
              </ul>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                8.2. The fees:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                <li>Are disclosed in advance</li>
                <li>May be changed with prior notice</li>
                <li>Are charged automatically</li>
                <li>Are non-refundable unless otherwise specified</li>
              </ul>
            </section>
  
            {/* 9. INTELLECTUAL PROPERTY */}
            <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                9. INTELLECTUAL PROPERTY
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                9.1. The following are owned by StartupX:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 mb-3 md:mb-4">
                <li>Brand, logo, and visual identity</li>
                <li>Website and platform content</li>
                <li>Codes and software</li>
                <li>Materials and documentation</li>
              </ul>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                9.2. It is prohibited to:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                <li>Copy or reproduce content without authorization</li>
                <li>Modify or create derivative works</li>
                <li>Use the brand without permission</li>
                <li>Reverse engineer the software</li>
              </ul>
            </section>
  
            {/* 10. TERMINATION AND SUSPENSION */}
            <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                10. TERMINATION AND SUSPENSION
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                10.1. StartupX may:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 mb-3 md:mb-4">
                <li>Suspend or terminate suspicious accounts</li>
                <li>Block access in case of violations</li>
                <li>Retain funds for investigation</li>
                <li>Report illegal activities</li>
              </ul>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                10.2. The user may:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                <li>Terminate their account at any time</li>
                <li>Withdraw their assets after verification</li>
                <li>Request their personal data</li>
                <li>Contest decisions as per established procedures</li>
              </ul>
            </section>
  
            {/* 11. CHANGES TO THE TERMS */}
            <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                11. CHANGES TO THE TERMS
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                11.1. StartupX may modify these Terms at any time, subject to:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 mb-3 md:mb-4">
                <li>Prior notification to users</li>
                <li>Publication of the new version on the Platform</li>
                <li>A reasonable period for acknowledgment</li>
              </ul>
              <p className="text-sm md:text-base text-gray-300">
                11.2. Continued use after changes implies acceptance of the new terms.
              </p>
            </section>
  
            {/* 12. GENERAL PROVISIONS */}
            <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                12. GENERAL PROVISIONS
              </h2>
              <div className="space-y-2 text-sm md:text-base text-gray-300">
                <p>12.1. These Terms are governed by the laws of the Federative Republic of Brazil.</p>
                <p>12.2. Any disputes will be resolved in the courts of the São Paulo district, except for claims that, by law, allow for a different jurisdiction.</p>
                <p>12.3. The invalidity of any provision does not affect the remaining clauses of these Terms.</p>
                <p>12.4. The failure to exercise any rights does not imply a waiver of them.</p>
              </div>
            </section>
  
            {/* 13. CONTACT */}
            <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                13. CONTACT
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                For questions related to these Terms, contact us at:
              </p>
              <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                <li>Email: <a href="mailto:contact@startupxchain.com" className="text-purple-400 hover:text-purple-300 transition-colors">contact@startupxchain.com</a></li>
                <li>Florida - USA</li>
              </ul>
            </section>
          </div>
        </div>
        
      </div>
    );
  };
  
  export default TermsAndConditions; 