import React from 'react';
import { motion } from 'framer-motion';
import { training } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

export default function Training() {
  return (
    <div id="training" className="section-card section-container">
        <div className="mb-10">
          <p className="section-label">Industry Experience</p>
          <h2 className="section-title">Training</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="card p-8 md:p-10 w-full"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 pb-8 border-b border-[rgba(0,0,0,0.06)]">
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center shrink-0">
                <Briefcase size={19} className="text-accent" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{training.provider}</p>
                <h3 className="text-lg font-bold text-primary">{training.title}</h3>
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-muted bg-[#F4F4F5] px-4 py-2 rounded-full self-start whitespace-nowrap">
              {training.period}
            </span>
          </div>

          <ul className="space-y-4">
            {training.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-secondary text-sm leading-relaxed">
                <span className="text-accent shrink-0 mt-0.5 font-bold">→</span>
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
    </div>
  );
}
