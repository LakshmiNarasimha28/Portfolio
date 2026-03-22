import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="section-card overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-violet-50/60 pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="max-w-[1100px] mx-auto text-center"
        >
          <p className="section-label justify-center">What's Next</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-primary mb-6">
            Let's Build Something<br /><span className="bg-gradient-to-r from-accent to-violet-500 bg-clip-text text-transparent">Impactful.</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-12 max-w-[760px] mx-auto">
            {profile.availability} Whether you have a project idea, internship opportunity, or just want to connect — I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href={`mailto:${profile.email}`} className="btn-primary text-base px-8 py-4">
              <Mail size={17} /> Say Hello <ArrowUpRight size={15} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary text-base px-8 py-4">
              <Linkedin size={17} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary text-base px-8 py-4">
              <Github size={17} /> GitHub
            </a>
          </div>

          <p className="text-muted text-sm">{profile.email}</p>
        </motion.div>
      </div>
    </div>
  );
}
