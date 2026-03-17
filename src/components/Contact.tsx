import React from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl shadow-black"
      >
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 font-display leading-[0.9]">
            Let's build something <br /> <span className="text-accent">intentional</span> together.
          </h2>
          <p className="text-secondary text-xl mb-16 max-w-xl mx-auto font-light leading-relaxed">
            Currently open to new opportunities and interesting collaborations. Let's forge the future
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="mailto:vivekdagar212@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full bg-primary text-background font-bold text-lg flex items-center gap-3 hover:bg-accent hover:text-white transition-all duration-500 group chakra-border"
            >
              Say Hello
              <Mail className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="https://drive.google.com/drive/folders/1en-ph3NcHX0o29hD1ru_NYUYoHrvv4-y?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full border border-white/10 hover:bg-white/5 transition-all flex items-center gap-3 text-secondary hover:text-primary font-medium cursor-pointer"
            >
              View Resume
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />
      </motion.div>
      
      <div className="relative mt-40 overflow-hidden">
        {/* The Sea - Wave Pattern */}
        <div className="absolute bottom-0 left-0 w-[200%] h-32 opacity-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-accent animate-[wave_25s_linear_infinite]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
        
        <footer className="relative z-10 pb-16 text-center text-[10px] font-mono text-secondary/40 uppercase tracking-[0.5em]">
          © 2026 Vivek Dagar · Built with Intent
        </footer>
      </div>
    </section>
  );
}
