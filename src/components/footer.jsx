import React from 'react';
import { Link } from 'react-router-dom';
import whitepaperPdf from '../assets/StartUpX - Official Whitepaper.pdf';

const Footer = () => {
  return (
    <footer className="bg-black w-full border-t-0">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Links em uma linha no desktop e duas linhas no mobile */}
        <nav className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="hidden sm:flex justify-center w-full">
            <a href={whitepaperPdf} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-800 transition-colors duration-200 text-sm px-2">
              Whitepaper
            </a>
            <Link to="/giveaway" className="text-white hover:text-purple-800 transition-colors duration-200 text-sm px-2">
              Giveaway
            </Link>
            <Link to="/how-to-buy" className="text-white hover:text-purple-800 transition-colors duration-200 text-sm px-2">
              How to Buy    
            </Link>
            <Link to="/contact-us" className="text-white hover:text-purple-800 transition-colors duration-200 text-sm px-2">
              Contact Us
            </Link>
            <Link to="/privacy-policy" className="text-white hover:text-purple-800 transition-colors duration-200 text-sm px-2">
              Privacy Policy
            </Link>
              <Link to="/terms-&-conditions" className="text-white hover:text-purple-800 transition-colors duration-200 text-sm px-2">
              Terms & Conditions
            </Link>
            <Link to="/cookies" className="text-white hover:text-purple-800 transition-colors duration-200 text-sm px-2">
            Cookies
            </Link>
            <button 
              onClick={() => {
                // Resetar o consentimento para forçar reabertura do banner
                localStorage.removeItem('cookie-consent');
                localStorage.removeItem('ga_client_id');
                // Recarregar a página para mostrar o banner
                window.location.reload();
              }}
              className="text-white hover:text-purple-800 transition-colors duration-200 text-sm px-2"
            >
              Cookie Preferences
            </button>
          </div>
          <div className="w-full flex justify-center sm:hidden">
            <a href={whitepaperPdf} target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-700 transition-colors duration-200 text-sm px-2">
              Whitepaper
            </a>
            <Link to="/giveaway" className="text-white hover:text-violet-700 transition-colors duration-200 text-sm px-2">
              Giveaway
            </Link>
              <Link to="/how-to-buy" className="text-white hover:text-violet-700 transition-colors duration-200 text-sm px-2">
              How to Buy
            </Link>
            <Link to="/contact-us" className="text-white hover:text-violet-700 transition-colors duration-200 text-sm px-2">
              Contact Us
            </Link>
          </div>
          <div className="w-full flex justify-center sm:hidden">
            <Link to="/privacy-policy" className="text-white hover:text-violet-700 transition-colors duration-200 text-sm px-2">
              Privacy Policy
            </Link>
            <Link to="/terms-&-conditions" className="text-white hover:text-violet-700 transition-colors duration-200 text-sm px-2">
              Terms & Conditions
            </Link>
            <Link to="/cookies" className="text-white hover:text-violet-700 transition-colors duration-200 text-sm px-2">
              Cookies
            </Link>
            <button 
              onClick={() => {
                // Resetar o consentimento para forçar reabertura do banner
                localStorage.removeItem('cookie-consent');
                localStorage.removeItem('ga_client_id');
                // Recarregar a página para mostrar o banner
                window.location.reload();
              }}
              className="text-white hover:text-violet-700 transition-colors duration-200 text-sm px-2"
            >
              Preferences
            </button>
          </div>
        </nav>
        
        {/* Disclaimer */}
        <div className="text-center mb-6">
          <p className="text-gray-400 text-xs max-w-3xl mx-auto">
            Disclaimer: Cryptocurrencies may not be regulated in your jurisdiction. The value of cryptocurrencies can fluctuate. 
            Profits may be subject to capital gains or other applicable taxes in your jurisdiction.
          </p>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-xs">©2025 StartupX Tecnology LLC | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
