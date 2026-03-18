import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Command } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CommandPalette from './components/CommandPalette';
import ProjectModal from './components/ProjectModal';
import ParticleSystem from './components/ParticleSystem';
import { Project } from './types';

export default function App() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const heroPointerEvents = useTransform(scrollYProgress, [0, 0.15], ['auto', 'none']) as any;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-accent selection:text-white bg-background overflow-x-hidden">
      <div className="grain-overlay" />
      <ParticleSystem />
      <Header onOpenPalette={() => setIsPaletteOpen(true)} />
      
      {/* Parallax Stacking Layers container */}
      <main className="relative w-full flex flex-col items-center">
        
        {/* Sticky Hero Background Component */}
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale, pointerEvents: heroPointerEvents }}
          className="sticky top-0 h-screen w-full flex items-center justify-center px-6 pt-32 z-0"
        >
          <div className="max-w-6xl w-full">
            <Hero />
          </div>
        </motion.div>

        {/* Projects Layer */}
        <div className="sticky bottom-0 min-h-[80vh] md:min-h-screen w-full bg-background/90 backdrop-blur-md border-t border-white/10 shadow-[0_-50px_100px_rgba(0,0,0,0.8)] z-10 px-4 md:px-6 flex justify-center pb-16 md:pb-24">
          <div className="max-w-6xl w-full">
            <Projects 
              filter={projectFilter} 
              onClearFilter={() => setProjectFilter(null)} 
              onSelectProject={setSelectedProject}
            />
          </div>
        </div>

        {/* Skills Layer */}
        <div className="sticky bottom-0 min-h-[80vh] md:min-h-screen w-full bg-[#050505e6] backdrop-blur-md border-t border-white/10 shadow-[0_-50px_100px_rgba(0,0,0,0.8)] z-20 px-4 md:px-6 flex justify-center pb-16 md:pb-24">
          <div className="max-w-6xl w-full">
            <Skills onDomainClick={(domain) => {
              setProjectFilter(domain);
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }} />
          </div>
        </div>

        {/* Experience Layer */}
        <div className="sticky bottom-0 min-h-[80vh] md:min-h-screen w-full bg-background/95 backdrop-blur-md border-t border-white/10 shadow-[0_-50px_100px_rgba(0,0,0,0.8)] z-30 px-4 md:px-6 flex justify-center pb-16 md:pb-24">
          <div className="max-w-6xl w-full">
            <Experience />
          </div>
        </div>

        {/* Contact Layer */}
        <div className="relative min-h-[80vh] md:min-h-screen w-full bg-black backdrop-blur-md border-t border-white/10 shadow-[0_-50px_100px_rgba(0,0,0,0.8)] z-40 flex items-center justify-center px-4 md:px-6 pb-16 md:pb-24">
          <div className="max-w-6xl w-full">
            <Contact />
          </div>
        </div>
      </main>

      <CommandPalette 
        isOpen={isPaletteOpen} 
        onClose={() => setIsPaletteOpen(false)} 
        onSelectProject={setSelectedProject}
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* The One Piece is Real - Prominent Silhouette with Glow */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[-1] select-none opacity-[0.15] rotate-12 scale-100">
        <svg 
          width="500" 
          height="500" 
          viewBox="0 0 24 24" 
          className="drop-shadow-[0_0_50px_rgba(244,208,63,0.3)] animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Straw Hat - Yellow Base */}
          <path d="M2,18c0,0,2-1,4-1s4,1,6,1s4-1,6-1s4,1,4,1v1H2V18z" fill="#F4D03F" />
          {/* Straw Hat - Top Part */}
          <path d="M5,16c0,0,1-6,7-6s7,6,7,6H5z" fill="#F4D03F" />
          {/* Straw Hat - Red Band */}
          <path d="M5.2,15.5c0,0,1-1.5,6.8-1.5s6.8,1.5,6.8,1.5v1H5.2V15.5z" fill="#E74C3C" />
        </svg>
      </div>

      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
