import React from 'react';
import { motion } from 'framer-motion';
import { profile, training } from '../data/portfolioData';

const FadeIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function About() {
  return (
    <div id="about" className="section-card section-container">
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Left */}
        <FadeIn>
          <p className="section-label">About Me</p>
          <h2 className="section-title mb-6">
            Building ML systems that work in the real world.
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-accent to-violet-400 rounded-full"></div>
        </FadeIn>

        {/* Right */}
        <FadeIn delay={0.1}>
          <div className="space-y-5 text-secondary text-[17px] leading-relaxed">
            {profile.description.slice(0, 2).map((p, i) => <p key={i}>{p}</p>)}
          </div>

          {/* Strengths */}
          <div className="mt-10 p-6 bg-white border border-[rgba(0,0,0,0.07)] rounded-2xl"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-5">Areas of Strength</p>
            <ul className="space-y-3">
              {profile.strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary text-sm font-medium leading-relaxed">
                  <span className="text-accent mt-0.5 shrink-0 font-bold">→</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Training highlight */}
          <div className="mt-5 pt-5 border-t border-gray-200">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Industry Training</p>
            <p className="font-bold text-primary text-sm">{training.title}</p>
            <p className="text-secondary text-xs mt-1">{training.provider} · {training.period}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
