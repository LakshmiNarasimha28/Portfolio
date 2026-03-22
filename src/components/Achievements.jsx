import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="section-card section-container">
        <div className="mb-10">
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Achievements</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="card card-hover p-6 flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                <Trophy size={18} className="text-amber-500" />
              </div>
              <div>
                <h3 className="font-bold text-primary text-sm mb-1">{a.title}</h3>
                <p className="text-muted text-xs mb-2">{a.date}</p>
                <p className="text-secondary text-xs leading-relaxed">{a.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  );
}
