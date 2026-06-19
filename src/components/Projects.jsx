import React from 'react';
import { motion } from 'framer-motion';

// Import project icon assets
import expenseImg from '../../images/expense.png';
import todoImg from '../../images/check-list.png';
import tictactoeImg from '../../images/TICTACTOE.png';
import rpsImg from '../../images/rock-paper-scissor.png';
import calcImg from '../../images/calculator.png';
import trainImg from '../../images/train.png';
import cartImg from '../../images/cart.png';
import personalImg from '../../images/personal.png';
import inva from '../../images/inva.jpg';

export default function Projects() {
  const projectsData = [
    {
     title: 'InventraAI',
     icon: inva,
     description: 'Full-stack inventory management platform with AI chatbot, analytics, and forecasting capabilities.',
     liveLink: 'https://inventra-ai-ai-inventory-management.vercel.app/',
     codeLink: 'https://github.com/Sparsh10t/InventraAI-AI-inventory-management-system.git' 
    },
    {
      title: 'Expense Tracker',
      icon: expenseImg,
      description: 'A React-based web app to track income, expenses, and financial analytics through an interactive dashboard.',
      liveLink: 'https://finance-manager-sparsh.vercel.app/',
      codeLink: 'https://github.com/Sparsh10t/Finance-manager.git'
    },
    {
      title: 'To-Do List',
      icon: todoImg,
      description: 'A highly functional React-based web app featuring task filters, local persistence, and category lists.',
      liveLink: 'https://todo-sparsh10.vercel.app/',
      codeLink: 'https://github.com/Sparsh10t/todo-sparsh10.git'
    },
    {
      title: 'Tic Tac Toe Game',
      icon: tictactoeImg,
      description: 'A classic Tic Tac Toe game built using HTML, CSS, and JavaScript with interactive animations and win-logic.',
      liveLink: 'https://tic-tac-toe-sparsh.vercel.app/',
      codeLink: 'https://github.com/Sparsh10t/TIC-TAC-TOE-SPARSH'
    },
    {
      title: 'Rock-Paper-Scissor',
      icon: rpsImg,
      description: 'An interactive Rock-Paper-Scissors game with scoreboard tracking and automated computer plays.',
      liveLink: 'https://rock-paper-scissors-sparsh.vercel.app/',
      codeLink: 'https://github.com/Sparsh10t/ROCK-PAPER-SCISSORS-SPARSH'
    },
    {
      title: 'Simple Calculator',
      icon: calcImg,
      description: 'A sleek, simple calculator built using HTML, CSS, and JavaScript with a neat dark UI theme.',
      liveLink: 'https://sparsh-portfolio-calc.vercel.app/',
      codeLink: 'https://github.com/Sparsh10t/CALCULATOR-SPARSH'
    },
    {
      title: 'Train Management',
      icon: trainImg,
      description: 'A console-based Train Management System built in C++ utilizing core OOP principles and file streams.',
      liveLink: 'https://drive.google.com/file/d/108iyTnjCUDmgLGW_wHt9df3axZ5HsPsO/view?',
      codeLink: 'https://github.com/Sparsh10t/Train-Management-Sparsh'
    },
    {
      title: 'Amazon Clone',
      icon: cartImg,
      description: 'A detailed responsive clone of the Amazon e-commerce platform homepage layout using HTML and CSS.',
      liveLink: 'https://e-commerce-umber-beta.vercel.app/',
      codeLink: 'https://github.com/Sparsh10t/E-commerce.git'
    },
    {
      title: 'Portfolio',
      icon: personalImg,
      description: 'The original version of this personal developer portfolio built with HTML, Tailwind CSS, and vanilla JavaScript.',
      liveLink: 'https://sparsh-portfolio-tau.vercel.app/',
      codeLink: 'https://github.com/Sparsh10t/SPARSH-PORTFOLIO'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: 'easeOut' 
      } 
    }
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold leading-tight mb-20 bg-gradient-to-r from-gray-100 via-gray-200 to-blue-400 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="glass-panel rounded-[2rem] p-6 flex flex-col gap-6 relative group border border-white/5 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:-translate-y-1.5"
          >
            {/* Project Icon Container */}
            <div className="w-14 h-14 rounded-2xl border border-blue-500/30 bg-blue-500/10 flex items-center justify-center p-2.5 overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:bg-blue-500/20">
              <img 
                src={project.icon} 
                alt={project.title} 
                className="w-full h-full object-contain" 
              />
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed min-h-[60px]">
                {project.description}
              </p>
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-3 mt-auto pt-4">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="cursor-pointer w-full text-white px-4 py-2.5 rounded-xl font-medium bg-blue-600 shadow-md shadow-blue-500/15 hover:shadow-lg hover:shadow-blue-500/35 hover:bg-blue-500 transform hover:-translate-y-0.5 transition-all duration-300 text-sm border border-blue-500/20">
                  🔗 Live Demo
                </button>
              </a>
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="cursor-pointer w-full text-white px-4 py-2.5 rounded-xl font-medium bg-white/5 border border-white/10 shadow-md hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-300 text-sm">
                  💻 Source Code
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
