import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/portfolioData';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScrollTop = (event) => {
    event.preventDefault();
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-4"
    >
      <nav className={`w-full max-w-[1400px] flex items-center justify-between px-5 py-2.5 rounded-2xl transition-all duration-300 ${scrolled ? 'bg-white/88 backdrop-blur-xl shadow-nav' : 'bg-white/70 backdrop-blur-xl shadow-nav'}`}>
        
        {/* Branding */}
        <a
          href="#top"
          onClick={handleScrollTop}
          className="flex items-center gap-3 group transition-all duration-200 hover:scale-[1.02] hover:opacity-90"
          aria-label="Go to top"
        >
          <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-white text-sm font-bold tracking-wide">
            LN
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold text-gray-900">Lakshmi Narasimha</span>
            <span className="text-xs text-gray-500">AI/ML Engineer</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-2">
          {links.map(l => (
            <a key={l.href} href={l.href} className="px-3.5 py-1.5 text-sm font-medium text-secondary hover:text-primary rounded-lg hover:bg-[rgba(0,0,0,0.04)] transition-all">
              {l.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            title="GitHub"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(0,0,0,0.12)] text-secondary hover:text-primary hover:border-[rgba(0,0,0,0.22)] hover:bg-white transition-all"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(0,0,0,0.12)] text-[#0A66C2] hover:border-[rgba(10,102,194,0.35)] hover:bg-[#E8F2FF] transition-all"
          >
            <Linkedin size={16} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden p-1.5 rounded-lg hover:bg-[rgba(0,0,0,0.05)] transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-20 left-6 right-6 bg-white rounded-2xl shadow-card-hover border border-[rgba(0,0,0,0.07)] p-4 flex flex-col gap-1"
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-4 py-2.5 text-sm font-medium text-secondary hover:text-primary rounded-xl hover:bg-[rgba(0,0,0,0.04)] transition-all">
                {l.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                aria-label="GitHub Profile"
                title="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[rgba(0,0,0,0.12)] text-secondary hover:text-primary hover:border-[rgba(0,0,0,0.22)] hover:bg-white transition-all"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                aria-label="LinkedIn Profile"
                title="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[rgba(0,0,0,0.12)] text-[#0A66C2] hover:border-[rgba(10,102,194,0.35)] hover:bg-[#E8F2FF] transition-all"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
