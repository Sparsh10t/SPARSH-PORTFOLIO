import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import social media icon assets
import linkedinLogo from '../../images/linkedin.png';
import githubLogo from '../../images/github.png';
import twitterLogo from '../../images/twitter.webp';
import instagramLogo from '../../images/instagram.jpg';

export default function Contact() {
  const [formState, setFormState] = useState({ fullname: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'SUBMITTING', 'SUCCESS', 'ERROR'

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.fullname || !formState.email || !formState.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setStatus('SUBMITTING');

    try {
      const response = await fetch('https://formspree.io/f/xovkkrge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Fullname: formState.fullname,
          'E-Mail Address': formState.email,
          Message: formState.message
        })
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormState({ fullname: '', email: '', message: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('ERROR');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      setStatus('ERROR');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold leading-tight mb-20 bg-gradient-to-r from-gray-100 via-gray-200 to-blue-400 bg-clip-text text-transparent"
      >
        Contact Me
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Contact details & socials */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-8 sm:p-10 rounded-[2rem] flex flex-col gap-8 border border-white/5"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
          </p>

          <div className="space-y-4">
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center gap-4 transition-colors hover:bg-white/[0.04]">
              <span className="text-2xl">📧</span>
              <div>
                <h4 className="text-xs text-gray-500 font-bold uppercase tracking-wider">E-Mail</h4>
                <a className="text-blue-400 hover:text-blue-300 transition-colors" href="mailto:sparshgupta10t@gmail.com">
                  sparshgupta10t@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center gap-4 transition-colors hover:bg-white/[0.04]">
              <span className="text-2xl">📞</span>
              <div>
                <h4 className="text-xs text-gray-500 font-bold uppercase tracking-wider">Contact Number</h4>
                <a className="text-blue-400 hover:text-blue-300 transition-colors" href="tel:+919027463157">
                  +91 9027463157
                </a>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center gap-4 transition-colors hover:bg-white/[0.04]">
              <span className="text-2xl">📍</span>
              <div>
                <h4 className="text-xs text-gray-500 font-bold uppercase tracking-wider">Location</h4>
                <p className="text-gray-300">Agra | U.P. | INDIA</p>
              </div>
            </div>
          </div>

          {/* Social Icons Grid */}
          <div className="flex flex-wrap gap-6 justify-center items-center mt-4">
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/sparsh-gupta-59711a325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group text-xs text-gray-400 font-semibold hover:text-blue-400 transition-colors"
            >
              <div className="h-14 w-14 bg-white/5 border border-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 rounded-full flex items-center justify-center p-3.5 transition-all duration-300 transform group-hover:scale-105">
                <img src={linkedinLogo} className="w-full h-full object-contain" alt="LinkedIn" />
              </div>
              LinkedIn
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/Sparsh10t" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group text-xs text-gray-400 font-semibold hover:text-white transition-colors"
            >
              <div className="h-14 w-14 bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 rounded-full flex items-center justify-center p-3.5 transition-all duration-300 transform group-hover:scale-105">
                <img src={githubLogo} className="w-full h-full object-contain invert" alt="GitHub" />
              </div>
              GitHub
            </a>

            {/* Twitter/X */}
            <a 
              href="https://x.com/Sparsh_gupta10t?t=FvlTDAcu0iGNC6bwiutQgg&s=09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group text-xs text-gray-400 font-semibold hover:text-blue-400 transition-colors"
            >
              <div className="h-14 w-14 bg-white/5 border border-white/5 group-hover:bg-blue-400/10 group-hover:border-blue-400/30 rounded-full flex items-center justify-center p-3.5 transition-all duration-300 transform group-hover:scale-105">
                <img src={twitterLogo} className="w-full h-full object-contain rounded-md" alt="X" />
              </div>
              X
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/code_blitz_n?igsh=OXZoMWg1ZTBoMGdl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group text-xs text-gray-400 font-semibold hover:text-pink-400 transition-colors"
            >
              <div className="h-14 w-14 bg-white/5 border border-white/5 group-hover:bg-pink-500/10 group-hover:border-pink-500/30 rounded-full flex items-center justify-center p-3.5 transition-all duration-300 transform group-hover:scale-105">
                <img src={instagramLogo} className="w-full h-full object-contain rounded-md" alt="Instagram" />
              </div>
              Instagram
            </a>
            
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-panel p-8 sm:p-10 rounded-[2rem] border border-white/5"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 justify-center">
            <div>
              <h3 className="text-white text-lg font-semibold mb-2 after:content-['*'] after:text-red-500 after:ml-1">
                Your Full Name
              </h3>
              <input 
                id="fullname"
                type="text" 
                value={formState.fullname}
                onChange={handleInputChange}
                required
                placeholder="Full Name" 
                className="w-full bg-slate-900/60 text-gray-100 p-3.5 border border-white/5 rounded-2xl outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-2 after:content-['*'] after:text-red-500 after:ml-1">
                Your E-Mail Address
              </h3>
              <input 
                id="email"
                type="email" 
                value={formState.email}
                onChange={handleInputChange}
                required
                placeholder="Email Address" 
                className="w-full bg-slate-900/60 text-gray-100 p-3.5 border border-white/5 rounded-2xl outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-2 after:content-['*'] after:text-red-500 after:ml-1">
                Your Message
              </h3>
              <textarea 
                id="message"
                rows="4" 
                value={formState.message}
                onChange={handleInputChange}
                required
                placeholder="Type your message..." 
                className="w-full bg-slate-900/60 text-gray-100 p-3.5 border border-white/5 rounded-2xl outline-none focus:border-blue-500/50 transition-colors resize-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'SUBMITTING'}
              className="cursor-pointer text-white px-6 py-4 rounded-2xl font-bold bg-blue-600 shadow-md shadow-blue-500/25 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all duration-300 disabled:bg-blue-600/50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === 'SUBMITTING' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'SUCCESS' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 font-semibold text-center text-sm"
              >
                Thank you! Your message has been sent successfully.
              </motion.p>
            )}

            {status === 'ERROR' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 font-semibold text-center text-sm"
              >
                Oops! Something went wrong. Please try again later.
              </motion.p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}
