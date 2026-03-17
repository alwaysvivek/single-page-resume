import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { SKILL_DOMAINS, EDUCATION, CERTS } from '../constants';

interface SkillsProps {
  onDomainClick: (domain: string) => void;
}

export default function Skills({ onDomainClick }: SkillsProps) {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex items-center justify-between mb-24"
      >
        <h2 className="text-3xl font-bold tracking-tight font-display text-primary">Signal</h2>
        <span className="text-[10px] font-mono text-secondary/40 uppercase tracking-[0.4em]">02 / Skills</span>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {SKILL_DOMAINS.map((domain, index) => (
          <motion.div 
            key={domain.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <button 
              onClick={() => setActiveDomain(activeDomain === domain.name ? null : domain.name)}
              className="w-full flex items-center justify-between py-6 text-left border-b border-white/5 group-hover:border-accent/30 transition-colors"
            >
              <div className="flex flex-col">
                <span className={`text-xl font-mono transition-colors ${
                  activeDomain === domain.name ? 'text-accent' : 'text-secondary/30 group-hover:text-secondary/60'
                }`}>
                  // {domain.name}
                </span>
                {domain.stack && (
                  <span className="text-[10px] font-mono text-secondary/20 mt-1 group-hover:text-secondary/40 transition-colors">
                    {domain.stack}
                  </span>
                )}
              </div>
              <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                activeDomain === domain.name ? 'bg-accent scale-150 shadow-[0_0_15px_rgba(255,140,0,0.8)]' : 'bg-white/10'
              }`} />
            </button>

            <AnimatePresence>
              {activeDomain === domain.name && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="overflow-hidden"
                >
                  <div className="py-12 flex flex-col md:flex-row gap-12">
                    <div className="flex-1 flex flex-col gap-10">
                      {domain.subcategories.map((sub, sIndex) => (
                        <div key={sub.name} className="flex flex-col gap-4">
                          <div className="flex items-center justify-between">
                            <h4 className="text-secondary/60 font-mono text-xs uppercase tracking-widest">{sub.name}</h4>
                            {(sub as any).linkTo === 'experience' && (
                              <button 
                                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center gap-1.5 text-[10px] font-mono text-accent hover:text-white transition-colors group/link"
                              >
                                <span>Explore Experience</span>
                                <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                              </button>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-x-6 gap-y-3">
                            {sub.skills.map((skill, skillIndex) => (
                              <motion.span 
                                key={skill}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (sIndex * 0.1) + (skillIndex * 0.05) }}
                                className="text-xl md:text-2xl font-display font-medium text-white"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onClick={() => onDomainClick(domain.name)}
                      className="shrink-0 self-end md:self-center flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-secondary hover:text-accent hover:border-accent/30 transition-all group/btn"
                    >
                      View {domain.name} Projects
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Credentials Section: Education & Certs */}
      <div className="mt-40">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center gap-4 mb-12"
        >
          <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-secondary/40">Background & Credentials</h3>
          <div className="h-[1px] flex-grow bg-white/5" />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {EDUCATION.map((edu) => (
              <div key={edu.institution}>
                <h4 className="text-primary font-medium text-sm mb-1">{edu.institution}</h4>
                <p className="text-white/60 text-xs font-light">{edu.degree} <span className="text-secondary/30 ml-2">· {edu.details}</span></p>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 content-start"
          >
            {CERTS.map((cert) => (
              <span key={cert.name} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] text-secondary/60 font-mono uppercase tracking-wider">
                {cert.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
