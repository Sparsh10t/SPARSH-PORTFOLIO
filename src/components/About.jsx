import React from 'react';
import { motion } from 'framer-motion';
import aboutProfileImg from '../../images/aboutprofile.jpg';

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto py-24 px-6 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] relative overflow-hidden group transition-all duration-500 hover:scale-[1.03]">
            <img 
              src={aboutProfileImg} 
              alt="Sparsh Gupta Portrait" 
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
            />
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Right Side: Details */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8 bg-gradient-to-r from-gray-100 via-gray-200 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg sm:text-xl leading-relaxed">
            <p>
              I’m currently pursuing my B.Tech in Computer Science Engineering at the
              <span className="text-blue-400 font-semibold">Bundelkhand Institute of Engineering & Technology (BIET) Jhansi</span>. 
              I have a strong interest in Web Development, Data Structures & Algorithms, and AI/ML, and I’m continuously working to improve my skills in these areas.
            </p>
            <p>
              Over the past year, I have built a strong foundation in programming, completed core web development concepts, worked on personal projects, and consistently improved my problem-solving abilities through coding practice.
            </p>
            <p>
              Looking ahead, I aim to gain industry experience through internships, build impactful AI-powered applications, and grow into a skilled software engineer capable of creating innovative technology solutions.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
