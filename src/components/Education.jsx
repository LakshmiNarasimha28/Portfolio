import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData';
import { GraduationCap, School, Medal } from 'lucide-react';

const courseList = [
  'Data Structures & Algorithms', 'Machine Learning', 'Artificial Intelligence',
  'Database Systems', 'Cloud Computing', 'Neural Networks', 'Computer Networks'
];

export default function Education() {
  const getIcon = (level) => {
    if (level === 'Undergraduate') return GraduationCap;
    if (level === 'Intermediate') return School;
    return Medal;
  };

  return (
    <section id="education" className="section-card section-container">
      <div className="mb-10">
        <p className="section-label">Academic Background</p>
        <h2 className="section-title">Education</h2>
      </div>

      <div className="space-y-5">
        {profile.educationHistory.map((entry, idx) => {
          const Icon = getIcon(entry.level);

          return (
            <motion.div
              key={entry.institute}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="card p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-start gap-4 w-full">
                  <div className="w-11 h-11 rounded-2xl bg-accent-light flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-indigo-500" />
                  </div>

                  <div className="w-full min-w-0">
                    <div className="flex justify-between items-center gap-3 mb-1 flex-wrap">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">{entry.level}</p>
                      <div className="flex items-center gap-3">
                        <p className="text-xs md:text-sm font-semibold text-gray-500">{entry.period}</p>
                        <p className="text-sm md:text-base font-semibold text-indigo-500">{entry.score}</p>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">{entry.institute}</h3>
                    <p className="text-sm md:text-base font-medium text-gray-700 mt-1">{entry.detail}</p>
                    <p className="text-xs md:text-sm text-gray-500 mt-0.5">{entry.place}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 pt-6 border-t border-gray-200">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted mb-4">Relevant Coursework</p>
        <div className="flex flex-wrap gap-2.5">
          {courseList.map((c) => (
            <span key={c} className="tag">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
