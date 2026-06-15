import React from 'react';
import { motion } from 'framer-motion';

import reactLogo from '../../images/react.png';
import jsLogo from '../../images/js.png';
import nodeLogo from '../../images/nodejs.png';
import expressLogo from '../../images/Express.png';
import mongoLogo from '../../images/MongoDB.png';
import htmlcssLogo from '../../images/coding.png';
import cppLogo from '../../images/c-.png';
import tailwindLogo from '../../images/tcss.webp';
import dsaLogo from '../../images/hierarchical-structure.png';
import gitLogo from '../../images/github.png';
import pythonLogo from '../../images/python.png';

export default function Skills() {
  const skillsData = [
    {
      name: 'REACT JS',
      icon: reactLogo,
      level: 'INTERMEDIATE',
      levelColor: 'text-orange-400 border-orange-400/25 bg-orange-400/5',
      percentage: 60,
      tags: ['Components', 'State/Props', 'Hooks'],
    },
    {
      name: 'JAVASCRIPT',
      icon: jsLogo,
      level: 'ADVANCED',
      levelColor: 'text-blue-400 border-blue-400/25 bg-blue-400/5',
      percentage: 75,
      tags: ['DOM', 'Functions', 'Async'],
    },
    {
      name: 'NODE JS',
      icon: nodeLogo,
      level: 'INTERMEDIATE',
      levelColor: 'text-green-400 border-green-400/25 bg-green-400/5',
      percentage: 60,
      tags: ['Event Loop', 'File System', 'Async Programming'],
    },
    {
      name: 'EXPRESS JS',
      icon: expressLogo,
      level: 'INTERMEDIATE',
      levelColor: 'text-green-400 border-green-400/25 bg-green-400/5',
      percentage: 60,
      tags: ['Routing', 'Middleware', 'Rest APIs'],
    },
    {
      name: 'MONGO DB',
      icon: mongoLogo,
      level: 'INTERMEDIATE',
      levelColor: 'text-green-400 border-green-400/25 bg-green-400/5',
      percentage: 60,
      tags: ['CRUD operations', 'Schema Design', 'Aggregation'],
    },
    {
      name: 'HTML/CSS',
      icon: htmlcssLogo,
      level: 'EXPERT',
      levelColor: 'text-green-400 border-green-400/25 bg-green-400/5',
      percentage: 95,
      tags: ['HTML5', 'CSS3'],
    },
    {
      name: 'C, C++ PROGRAMMING',
      icon: cppLogo,
      level: 'EXPERT',
      levelColor: 'text-green-400 border-green-400/25 bg-green-400/5',
      percentage: 95,
      tags: ['OOPS', 'STL', 'Pointer'],
    },
    {
      name: 'TAILWIND CSS',
      icon: tailwindLogo,
      level: 'ADVANCED',
      levelColor: 'text-blue-400 border-blue-400/25 bg-blue-400/5',
      percentage: 80,
      tags: ['Layout', 'Flex/Grid', 'Styling'],
    },
    {
      name: 'DSA',
      icon: dsaLogo,
      level: 'INTERMEDIATE',
      levelColor: 'text-purple-400 border-purple-400/25 bg-purple-400/5',
      percentage: 60,
      tags: ['Linked-list', 'Stacks/Queues', 'Sorting'],
    },
    {
      name: 'GIT/GITHUB',
      icon: gitLogo,
      level: 'INTERMEDIATE',
      levelColor: 'text-purple-400 border-purple-400/25 bg-purple-400/5',
      percentage: 60,
      tags: ['Commit', 'Branches', 'Push/Pull'],
    },
    {
      name: 'PYTHON',
      icon: pythonLogo,
      level: 'FAMILIAR',
      levelColor: 'text-orange-400 border-orange-400/25 bg-orange-400/5',
      percentage: 25,
      tags: ['Function', 'OOPS', 'Libraries'],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24 relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold leading-tight mb-20 bg-gradient-to-r from-gray-100 via-gray-200 to-blue-400 bg-clip-text text-transparent"
      >
        Technical Skills
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="glass-panel glass-panel-hover rounded-[2rem] p-6 flex flex-col gap-6 border border-white/5 relative group transition-all duration-300 hover:border-t-2 hover:border-t-blue-500 hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-white text-lg font-bold flex items-center gap-3">
                <img 
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300 group-hover:scale-110" 
                  src={skill.icon} 
                  alt={skill.name} 
                />
                {skill.name}
              </h3>
              <span className={`px-2.5 py-1 border rounded-full text-[10px] font-semibold tracking-wider ${skill.levelColor}`}>
                {skill.level}
              </span>
            </div>

            {/* Progress Bar Container */}
            <div className="h-3 border border-white/5 rounded-full bg-slate-900/60 overflow-hidden p-[2px]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
              />
            </div>

            {/* tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {skill.tags.map((tag, tIndex) => (
                <span 
                  key={tIndex} 
                  className="px-2.5 py-1 border border-white/5 rounded-full text-xs text-gray-400 bg-white/[0.02]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
