import React from 'react';
import { motion } from 'framer-motion';
import { useTypingEffect } from '../hooks/useTypingEffect';

export default function Hero() {
  const typingText = useTypingEffect([
    'Frontend Developer',
    'Problem Solver',
    'Software Developer'
  ]);

  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl z-10"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/25 rounded-full"
        >
          WELCOME TO MY PORTFOLIO
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-gray-100 via-gray-300 to-blue-400 bg-clip-text text-transparent"
        >
          Hi, I'm Sparsh Gupta
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-gray-400 mb-8 min-h-[40px] flex items-center justify-center gap-1"
        >
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
            {typingText}
          </span>
          <span className="inline-block w-[3px] h-[28px] md:h-[38px] bg-blue-500 animate-pulse" />
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I am a passionate Computer Science student with a strong interest in Data Structures & Algorithms, Web Development, and AI/ML, focused on building solutions to real-world problems.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <a href="#projects" className="w-full sm:w-auto">
            <button className="cursor-pointer w-full sm:w-auto text-white px-8 py-4 rounded-[40px] font-bold bg-blue-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:bg-blue-500 transform hover:-translate-y-0.5 transition-all duration-300 border border-blue-500/30">
              View My Work
            </button>
          </a>
          <a 
            href="https://drive.google.com/file/d/15MVPWtTRNqGOw4SDamJa8ApFH9ARtgS6/view?usp=drivesdk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto"
          >
            <button className="cursor-pointer w-full sm:w-auto text-white px-8 py-4 rounded-[40px] font-bold bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20 transform hover:-translate-y-0.5 transition-all duration-300">
              View Resume
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
