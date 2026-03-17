import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2, Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="w-full max-w-4xl glass rounded-3xl overflow-hidden relative z-10 max-h-[90vh] flex flex-col"
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h3 className="text-2xl font-bold font-display tracking-tight text-primary">
              {project.title}
            </h3>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-secondary hover:text-primary"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h4 className="text-xs font-mono text-secondary uppercase tracking-[0.2em] mb-4">The Mission</h4>
                  <p className="text-lg text-primary/90 leading-[1.8] tracking-wide font-light">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {project.challenges && (
                  <div>
                    <h4 className="text-xs font-mono text-secondary uppercase tracking-[0.2em] mb-4">The Challenges</h4>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3 text-secondary">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="space-y-8">
                {project.results && (
                  <div>
                    <h4 className="text-xs font-mono text-secondary uppercase tracking-[0.2em] mb-4">The Results</h4>
                    <div className="space-y-4">
                      {project.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="text-sm font-medium text-primary">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-mono text-secondary uppercase tracking-[0.2em] mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {project.backendLink && (
                    <div className="space-y-2">
                      <p className="text-[10px] font-mono text-accent uppercase tracking-widest text-center">
                        Step 1: Wake up the backend
                      </p>
                      <a
                        href={project.backendLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-accent/10 border border-accent/20 text-sm font-bold text-accent hover:bg-accent/20 transition-all shadow-xl group"
                      >
                        <ExternalLink className="w-5 h-5 transition-transform group-hover:scale-110" />
                        Open Backend Service
                      </a>
                    </div>
                  )}

                  <div className="space-y-2">
                    {project.backendLink && (
                      <p className="text-[10px] font-mono text-secondary uppercase tracking-widest text-center">
                        Step 2: View the application
                      </p>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-bold transition-all shadow-xl group ${
                        project.isGithubOnly 
                          ? 'bg-white/5 border border-white/10 text-secondary hover:text-primary hover:bg-white/10' 
                          : 'bg-primary text-background hover:bg-accent hover:text-white shadow-primary/10'
                      }`}
                    >
                      {project.isGithubOnly ? 'View Source on GitHub' : (project.linkLabel ? `View on ${project.linkLabel}` : 'Launch Live Project')}
                      {project.isGithubOnly ? (
                        <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      )}
                    </a>
                  </div>

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold text-secondary hover:text-primary hover:bg-white/10 transition-all shadow-xl group"
                    >
                      <Github className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
                      Browse Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
