import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT ME', href: '#about', id: 'about' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'EDUCATION', href: '#education', id: 'education' },
    { name: 'CONTACT ME', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 250; // Offset for detection

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-6">
      <div className="max-w-7xl mx-auto px-6 py-4 glass-panel rounded-[2rem] flex justify-between items-center transition-all duration-300">
        <div className="xl:text-3xl sm:text-2xl text-xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent transform hover:scale-[1.03] transition duration-300">
          <a href="#home">SPARSH GUPTA</a>
        </div>
        
        {/* Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none text-2xl p-2 hover:text-blue-400 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 text-sm font-semibold tracking-wider">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href}
                  className={`relative py-2 px-1 transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 p-6 glass-panel rounded-[2rem] md:hidden shadow-2xl border border-white/5"
          >
            <ul className="flex flex-col gap-4 text-center text-sm font-semibold tracking-wider">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 rounded-xl transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
                        : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
