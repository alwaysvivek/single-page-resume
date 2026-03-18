import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Code, 
  ExternalLink, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Award,
  Hash,
  User,
  X
} from 'lucide-react';
import { PROJECTS, SKILLS, EXPERIENCE, EDUCATION, CERTS } from '../constants';
import { Project } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export default function CommandPalette({ isOpen, onClose, onSelectProject }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (showProfile) {
        setShowProfile(false);
      } else {
        onClose();
      }
    }
  }, [onClose, showProfile]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredProjects = normalizedQuery ? PROJECTS.filter(p => 
    p.title.toLowerCase().includes(normalizedQuery) ||
    p.description.toLowerCase().includes(normalizedQuery) ||
    p.tech.some(t => t.toLowerCase().includes(normalizedQuery))
  ) : [];

  const filteredSkills = normalizedQuery ? SKILLS.filter(s => 
    s.toLowerCase().includes(normalizedQuery)
  ) : [];

  const filteredExperience = normalizedQuery ? EXPERIENCE.filter(e => 
    e.role.toLowerCase().includes(normalizedQuery) ||
    e.entity.toLowerCase().includes(normalizedQuery) ||
    e.focus.toLowerCase().includes(normalizedQuery)
  ) : [];

  const filteredCredentials = normalizedQuery ? [
    ...EDUCATION.map(e => ({ label: e.institution, sub: e.degree, type: 'Education' })),
    ...CERTS.map(c => ({ label: c.name, sub: c.issuer, type: 'Certification' }))
  ].filter(c => 
    c.label.toLowerCase().includes(normalizedQuery) ||
    c.sub.toLowerCase().includes(normalizedQuery)
  ) : [];

  const actions = [
    { id: 'profile', label: 'View Profile Picture', icon: User, action: () => setShowProfile(true), keepOpen: true },
    { id: 'projects', label: 'Jump to Projects', icon: Code, action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'skills', label: 'Jump to Skills', icon: Cpu, action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'experience', label: 'Jump to Experience', icon: Briefcase, action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'contact', label: 'Jump to Contact', icon: Mail, action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'resume', label: 'Download Resume', icon: FileText, action: () => window.open('https://drive.google.com/drive/folders/1en-ph3NcHX0o29hD1ru_NYUYoHrvv4-y?usp=sharing', '_blank') },
  ].filter(a => normalizedQuery ? a.label.toLowerCase().includes(normalizedQuery) : true);

  const socials = [
    { id: 'github', label: 'GitHub', icon: Github, href: 'https://github.com' },
    { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  ].filter(s => normalizedQuery ? s.label.toLowerCase().includes(normalizedQuery) : true);

  const handleAction = (action: () => void, keepOpen?: boolean) => {
    action();
    if (!keepOpen) {
      onClose();
      setQuery('');
    }
  };

  const hasResults = filteredProjects.length > 0 || 
                     actions.length > 0 || 
                     socials.length > 0 ||
                     filteredSkills.length > 0 || 
                     filteredExperience.length > 0 || 
                     filteredCredentials.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[5vh] md:pt-[15vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-xl"
                onClick={() => setShowProfile(false)}
              >
                <div 
                  className="relative max-w-3xl w-full aspect-square md:aspect-auto md:h-full max-h-[85vh] rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.1)] border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    onClick={() => setShowProfile(false)}
                    className="absolute top-6 right-6 z-10 p-3 bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md transition-colors border border-white/10 text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <img 
                    src="/profile.jpg" 
                    alt="Vivek Dagar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full max-w-2xl glass rounded-xl md:rounded-2xl overflow-hidden shadow-2xl relative z-10 flex flex-col"
          >
            <div className="flex items-center px-4 py-4 border-b border-white/10">
              <Search className="w-5 h-5 text-secondary mr-3" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent border-none outline-none text-primary placeholder:text-secondary text-base md:text-lg"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-secondary font-mono">
                <span className="text-xs">ESC</span>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2 custom-scrollbar space-y-4">
              {/* Actions Section */}
              {actions.length > 0 && (
                <div>
                  <div className="px-3 py-2 text-[10px] font-bold text-secondary uppercase tracking-widest">Navigation & Actions</div>
                  <div className="space-y-1">
                    {actions.map((action) => (
                      <button
                        key={action.id}
                        onClick={() => handleAction(action.action, action.keepOpen)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <action.icon className="w-4 h-4 text-secondary group-hover:text-accent transition-colors" />
                          <span className="text-sm text-primary font-medium">{action.label}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects Section */}
              {filteredProjects.length > 0 && (
                <div>
                  <div className="px-3 py-2 text-[10px] font-bold text-secondary uppercase tracking-widest">Projects ({filteredProjects.length})</div>
                  <div className="grid grid-cols-1 gap-1">
                    {filteredProjects.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => handleAction(() => onSelectProject(project))}
                        className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-white/5 transition-colors text-left group"
                      >
                        <div className="flex flex-col">
                          <span className="text-sm text-primary font-medium group-hover:text-accent transition-colors">{project.title}</span>
                          <span className="text-xs text-secondary line-clamp-1">{project.description}</span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Section */}
              {filteredSkills.length > 0 && (
                <div>
                  <div className="px-3 py-2 text-[10px] font-bold text-secondary uppercase tracking-widest">Skills</div>
                  <div className="flex flex-wrap gap-1 px-2">
                    {filteredSkills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => handleAction(() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }))}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-xs text-secondary hover:text-primary"
                      >
                        <Hash className="w-3 h-3 text-accent/50" />
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Section */}
              {filteredExperience.length > 0 && (
                <div>
                  <div className="px-3 py-2 text-[10px] font-bold text-secondary uppercase tracking-widest">Experience</div>
                  <div className="space-y-1">
                    {filteredExperience.map((exp) => (
                      <button
                        key={exp.entity}
                        onClick={() => handleAction(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }))}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-left group"
                      >
                        <div className="flex flex-col">
                          <span className="text-sm text-primary font-medium group-hover:text-accent transition-colors">{exp.role}</span>
                          <span className="text-xs text-secondary">{exp.entity} · {exp.date}</span>
                        </div>
                        <Briefcase className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Credentials Section */}
              {filteredCredentials.length > 0 && (
                <div>
                  <div className="px-3 py-2 text-[10px] font-bold text-secondary uppercase tracking-widest">Credentials</div>
                  <div className="space-y-1">
                    {filteredCredentials.map((cred) => (
                      <button
                        key={cred.label}
                        onClick={() => handleAction(() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }))}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-left group"
                      >
                        <div className="flex flex-col">
                          <span className="text-sm text-primary font-medium group-hover:text-accent transition-colors">{cred.label}</span>
                          <span className="text-xs text-secondary">{cred.sub} · {cred.type}</span>
                        </div>
                        {cred.type === 'Education' ? <GraduationCap className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-all" /> : <Award className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-all" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Socials Section */}
              {socials.length > 0 && (
                <div>
                  <div className="px-3 py-2 text-[10px] font-bold text-secondary uppercase tracking-widest">Socials</div>
                  <div className="grid grid-cols-2 gap-1">
                    {socials.map((social) => (
                      <button
                        key={social.id}
                        onClick={() => handleAction(() => window.open(social.href, '_blank'))}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-left group"
                      >
                        <social.icon className="w-4 h-4 text-secondary group-hover:text-accent transition-colors" />
                        <span className="text-sm text-primary font-medium">{social.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {query.length > 0 && !hasResults && (
                <div className="py-12 text-center text-secondary text-sm">
                  No results found for "{query}"
                </div>
              )}
            </div>

            {/* Footer hints completely removed as requested */}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
