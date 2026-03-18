import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex items-center justify-between mb-16 md:mb-24"
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-display text-primary">Industrial Timeline</h2>
        <span className="text-[10px] font-mono text-secondary/40 uppercase tracking-[0.4em]">03 / Experience</span>
      </motion.div>

      <div className="relative max-w-5xl mx-auto mt-16">
        {/* Central Timeline Axis */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-accent/30 to-transparent transform -translate-x-1/2" />
        
        {/* Mobile Timeline Axis */}
        <div className="md:hidden absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

        <div className="space-y-16">
          {EXPERIENCE.map((exp, index) => {
            const isRightAligned = index === 1; // Delhi Police
            
            return (
              <motion.div
                key={exp.entity}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row ${
                  isRightAligned ? 'md:justify-end md:-my-12 z-0' : 'md:justify-start z-10'
                } group pl-16 md:pl-0`}
              >
                {/* Timeline Node */}
                <div className={`absolute top-6 rounded-full bg-primary z-10 
                  md:left-1/2 md:-translate-x-1/2
                  left-[31px]
                  group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(255,140,0,0.8)] transition-all duration-500
                  ${isRightAligned ? 'w-2 h-2 opacity-50 bg-secondary' : 'w-2.5 h-2.5 md:w-3 md:h-3'}
                `} 
                />
                
                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${isRightAligned ? 'md:pl-12 scale-95 md:scale-90 origin-right opacity-90 md:opacity-80 group-hover:opacity-100 transition-opacity duration-500' : 'md:pr-12 text-left'}`}>
                  <div className={`rounded-2xl md:rounded-3xl glass group-hover:bg-white/[0.03] transition-colors border-transparent group-hover:border-white/10 relative overflow-hidden ${isRightAligned ? 'p-5 md:p-6' : 'p-6 md:p-8'}`}>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className="flex gap-2 ml-auto">
                        {exp.logo && (
                          <img 
                            src={exp.logo} 
                            alt={`${exp.entity} logo`} 
                            className="h-6 w-auto grayscale opacity-40 group-hover:opacity-100 transition-opacity duration-500 invert"
                          />
                        )}
                        {exp.entity.includes("Codeyoung") && exp.logo !== "/codeyoung.png" && (
                          <img 
                            src="/codeyoung.png" 
                            alt="Codeyoung logo" 
                            className="h-6 w-auto grayscale opacity-40 group-hover:opacity-100 transition-opacity duration-500 invert"
                          />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1 mb-6">
                      <p className="text-accent text-sm font-mono tracking-wide">{exp.entity}</p>
                      <span className="text-secondary/40 font-mono text-xs">{exp.date}</span>
                    </div>
                    
                    <p className="text-secondary/70 text-sm md:text-base font-light leading-relaxed">
                      {exp.focus}
                    </p>

                    {/* Decorative Background Accent */}
                    <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-1000" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
