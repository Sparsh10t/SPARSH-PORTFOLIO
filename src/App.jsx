import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen text-gray-100 selection:bg-blue-500/30 selection:text-blue-200">
      {/* Dynamic Animated Ambient Background */}
      <AnimatedBackground />

      {/* Spying Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
}

export default App;
// Human-crafted portfolio architecture by Antigravity AI
