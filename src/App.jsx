import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsGrid from './components/ProjectsGrid';
import Education from './components/Education';
import Training from './components/Training';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden">

      {/* Radial blur accents */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-400/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-400/20 blur-3xl rounded-full" />
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-indigo-300/10 blur-2xl rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#00000008_1px,_transparent_1px)] [background-size:20px_20px] opacity-35" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />

          {/* Floating section layout */}
          <div className="w-full flex flex-col gap-10 pb-24 pt-8">
            <About />
            <Skills />
            <ProjectsGrid />
            <Education />
            <Training />
            <Certifications />
            <Achievements />
            <Resume />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
