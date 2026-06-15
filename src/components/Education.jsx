import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  const educationData = [
    {
      year: '2024 - 2028',
      title: 'Bachelor of Computer Science',
      institution: 'Bundelkhand Institute Of Engineering And Technology, Jhansi',
      description: 'Specialized in Software Engineering and Web Development.',
      tags: ['SGPA: 8.05', 'Data Structures', 'Algorithms', 'Web Dev'],
      icon: '🎓',
      isLeft: true
    },
    {
      year: '2023 - 2024',
      title: 'Intermediate',
      institution: 'Delhi Public International School, Agra',
      description: 'Stream: PCM || Board: Central Board Of Secondary Education (CBSE)',
      tags: ['88%', 'Physics', 'Chemistry', 'Maths'],
      icon: '🏫',
      isLeft: false
    },
    {
      year: '2021 - 2022',
      title: 'High School',
      institution: 'Dayanand Bal Mandir School, Agra',
      description: 'Board: Central Board Of Secondary Education (CBSE)',
      tags: ['93.6%'],
      icon: '🏫',
      isLeft: true
    }
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-extrabold leading-tight mb-20 bg-gradient-to-r from-gray-100 via-gray-200 to-blue-400 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Timeline Line (Desktop Center) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500/80 via-indigo-500/50 to-slate-900 hidden md:block" />

          {/* Mobile Timeline Line (Left Side) */}
          <div className="absolute left-9 w-0.5 h-full bg-gradient-to-b from-blue-500/80 via-indigo-500/50 to-slate-900 md:hidden" />

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {educationData.map((item, index) => {
              const directionX = item.isLeft ? -50 : 50;

              return (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center justify-between ${
                    item.isLeft ? '' : 'md:flex-row-reverse'
                  } group`}
                >
                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: directionX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className={`w-full md:w-[45%] ml-20 md:ml-0 glass-panel p-8 rounded-2xl border border-white/5 relative hover:border-blue-500/20 hover:scale-[1.02] hover:bg-white/[0.04] transition-all duration-300`}
                  >
                    {/* Year */}
                    <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-3">
                      <span>📅</span>
                      <span>{item.year}</span>
                    </div>

                    {/* Title & Institution */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-4 text-sm tracking-wide">
                      {item.institution}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tIndex) => (
                        <span 
                          key={tIndex} 
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Connector Line to Timeline (Desktop Only) */}
                    <div 
                      className={`hidden md:block absolute top-10 w-8 h-[1px] bg-blue-500/20 ${
                        item.isLeft ? '-right-8' : '-left-8'
                      }`} 
                    />
                  </motion.div>

                  {/* Timeline Circle Icon (Center on Desktop, Left on Mobile) */}
                  <div className="absolute left-9 md:left-1/2 transform md:-translate-x-1/2 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-2xl border-4 border-slate-950 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:shadow-blue-500/40 transition-all duration-300 z-10">
                    {item.icon}
                  </div>

                  {/* Spacer to align opposite side on desktop */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
