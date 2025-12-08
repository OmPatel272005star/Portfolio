import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import EducationAchievements from './components/EducationAchievements.jsx';
import Contact from './components/Contact.jsx';
import MagneticCursor from './components/MagneticCursor.jsx';
import CursorRipple from './components/CursorRipple.jsx';
import FloatingParticles from './components/FloatingParticles.jsx';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden md:cursor-none">
      <MagneticCursor />
      <CursorRipple />
      <FloatingParticles />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <EducationAchievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
