import React from 'react';
import { motion } from 'framer-motion';
import { certs } from '../data/portfolioData';
import { Award, ArrowUpRight } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certificates" className="section-card section-container">
        <div className="mb-14">
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ scale: 1.03 }}
              className="card card-hover p-6 flex gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center shrink-0">
                <Award size={19} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-primary text-sm leading-snug mb-1">{cert.name}</h3>
                <p className="text-muted text-xs mb-3">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted bg-[#F4F4F5] px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1 text-[10px] font-bold text-accent hover:underline">
                      {cert.linkLabel || 'View'} <ArrowUpRight size={11} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  );
}
