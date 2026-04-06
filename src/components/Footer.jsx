import React from "react";
import Section from "./Section";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#0e0c15] to-[#000000] overflow-hidden pt-20 pb-10 border-t border-n-6">
      {/* Subtle Star/Particle Effects (CSS-based) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[10%] w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"></div>
        <div className="absolute top-[30%] right-[20%] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_15px_white] opacity-50"></div>
        <div className="absolute bottom-[20%] left-[30%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white] opacity-60"></div>
        <div className="absolute top-[50%] right-[10%] w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_20px_#ac6aff] opacity-30"></div>
        <div className="absolute top-[70%] left-[80%] w-1 h-1 bg-white rounded-full shadow-[0_0_12px_white] opacity-40"></div>
        <div className="absolute bottom-[40%] right-[40%] w-[2px] h-[2px] bg-indigo-400 rounded-full shadow-[0_0_8px_#4c1d95] opacity-50"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto sm:px-10">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-n-6/50">
          
          {/* 1. Brand Section */}
          <div className="flex flex-col gap-5 lg:pr-8">
            <h3 className="text-2xl font-bold text-white tracking-wide">D360 Voice</h3>
            <p className="text-sm text-n-4 leading-relaxed">
              Securely adopt AI with built-in data protection, governance, and compliance.
            </p>
          </div>

          {/* 2. Products Section */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold tracking-wide uppercase text-sm">Products</h4>
            <ul className="flex flex-col gap-3.5">
              {[
                { name: 'Features', url: '#features' },
                { name: 'AI Platform', url: '#how-to-use' },
                { name: 'Analytics', url: '#roadmap' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.url} className="text-sm text-n-4 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="relative overflow-hidden">
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white transform -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Company Section */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold tracking-wide uppercase text-sm">Company</h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href="https://piazza-website-beta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-2 hover:opacity-80 transition-opacity duration-300 relative group inline-block">
                  Piazza Consulting Group
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-color-1 to-color-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Connect Section */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold tracking-wide uppercase text-sm">Connect</h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-n-4 hover:text-color-3 transition-colors duration-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-n-4 hover:text-color-4 transition-colors duration-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
          <p className="text-sm text-n-4 font-medium tracking-wide flex-shrink-0">
            &copy; 2026 PCG. All rights reserved.
          </p>
          <p className="text-sm text-n-4 font-medium tracking-wide text-right">
            Designed for the AI Era.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;