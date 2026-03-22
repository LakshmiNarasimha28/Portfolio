import React from 'react';
import { profile } from '../data/portfolioData';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[rgba(0,0,0,0.07)] bg-surface py-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
        
        <div className="text-center sm:text-left">
          <a href="#top" className="flex items-center gap-2.5 mb-2 justify-center sm:justify-start">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white text-[10px] font-bold">LN</div>
            <span className="font-bold text-primary tracking-tight">Lakshmi Narasimha</span>
          </a>
          <p className="text-muted text-xs">AI / ML Engineer · {profile.location}</p>
        </div>

        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(0,0,0,0.1)] text-muted hover:text-primary hover:border-[rgba(0,0,0,0.2)] transition-all">
            <Github size={15} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(0,0,0,0.1)] text-muted hover:text-[#0A66C2] hover:border-[rgba(0,0,0,0.2)] transition-all">
            <Linkedin size={15} />
          </a>
          <a href={`mailto:${profile.email}`}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(0,0,0,0.1)] text-muted hover:text-primary hover:border-[rgba(0,0,0,0.2)] transition-all">
            <Mail size={15} />
          </a>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-8 pt-6 border-t border-[rgba(0,0,0,0.06)] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-muted w-full">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono">B.Tech CSE (AI & ML) · {profile.university}</p>
      </div>
    </footer>
  );
}
