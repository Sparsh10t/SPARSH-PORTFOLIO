import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full mt-16">
      <div className="text-gray-400 py-6 px-6 glass-panel flex justify-center items-center border-t border-white/5 text-center text-sm font-medium tracking-wide">
        © {currentYear} SPARSH GUPTA &nbsp;||&nbsp; Built with code and passion
      </div>
    </footer>
  );
}
