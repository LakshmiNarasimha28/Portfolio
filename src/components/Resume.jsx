import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData';
import { Download, FileText, Github, GraduationCap, Briefcase } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="section-card section-container">
        <div className="mb-10 md:mb-12">
          <p className="section-label">Curriculum Vitae</p>
          <h2 className="section-title">Resume</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid lg:grid-cols-2 gap-8 items-start"
        >
          <div className="card p-6 md:p-8">
            <div className="flex flex-col gap-3 w-full mb-6">
              <a href={profile.resumePath} download className="btn-primary whitespace-nowrap justify-center sm:justify-start">
                <Download size={15} /> Download PDF
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary whitespace-nowrap justify-center sm:justify-start">
                <FileText size={15} /> LinkedIn Profile
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary whitespace-nowrap justify-center sm:justify-start">
                <Github size={15} /> GitHub Profile
              </a>
            </div>

            <div className="border-t border-[rgba(0,0,0,0.08)] pt-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">Resume Highlights</p>
              <ul className="space-y-2.5">
                {profile.resumeSummary.map((item) => (
                  <li key={item} className="text-sm text-secondary flex items-start gap-2.5 leading-relaxed">
                    <span className="text-accent mt-0.5">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#F8FAFC] border border-[rgba(0,0,0,0.06)]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Primary Education Entry</p>
              <p className="text-sm font-semibold text-primary mt-2">{profile.degree}</p>
              <p className="text-sm text-secondary">{profile.university} · {profile.cgpa}</p>
            </div>
          </div>

          <div className="card p-6 md:p-8 bg-white w-full">
            <div className="mb-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Portfolio to Resume Mapping</p>
              <h3 className="text-xl font-bold text-primary">Snapshot</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[rgba(0,0,0,0.08)] p-4 bg-[#FAFCFF] w-full">
                <div className="w-9 h-9 rounded-lg bg-accent-light text-accent flex items-center justify-center mb-3">
                  <GraduationCap size={17} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted">Education</p>
                <p className="text-sm font-semibold text-primary mt-2">{profile.degree}</p>
                <p className="text-xs text-secondary mt-1">{profile.university}</p>
              </div>

              <div className="rounded-xl border border-[rgba(0,0,0,0.08)] p-4 bg-[#FAFCFF] w-full">
                <div className="w-9 h-9 rounded-lg bg-accent-light text-accent flex items-center justify-center mb-3">
                  <Briefcase size={17} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted">Role Focus</p>
                <p className="text-sm font-semibold text-primary mt-2">{profile.role}</p>
                <p className="text-xs text-secondary mt-1">ML systems, analytics, and production-focused projects</p>
              </div>
            </div>

            <a href={profile.resumePath} download className="btn-secondary mt-6 text-sm w-full justify-center">
              <Download size={14} /> Download Resume PDF
            </a>
          </div>
        </motion.div>
    </section>
  );
}
