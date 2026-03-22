import React from 'react';
import { motion as Motion } from 'framer-motion';
import { profile } from '../data/portfolioData';
import { ArrowRight, Eye, Github } from 'lucide-react';

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] } })
};

export default function Hero() {
  return (
    <section id="top" className="relative w-full pt-32 pb-20 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-cyan-300/30 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-emerald-200/30 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-300/20 blur-3xl rounded-full pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24">
        <div className="w-full lg:max-w-[72%]">
          <Motion.div custom={0} variants={item} initial="hidden" animate="visible" className="mb-6">
            <span className="section-label">AI / ML ENGINEER</span>
          </Motion.div>

          <Motion.h1
            custom={1}
            variants={item}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.03] mb-6 text-primary"
          >
            <span className="block">{profile.name}</span>
            <span className="block text-2xl md:text-3xl mt-3 text-secondary font-semibold">{profile.role}</span>
          </Motion.h1>

          <Motion.p
            custom={2}
            variants={item}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-2xl text-secondary font-medium leading-relaxed mb-10"
          >
            Building scalable ML systems and real-world AI applications.
          </Motion.p>

          <Motion.div custom={3} variants={item} initial="hidden" animate="visible" className="flex flex-wrap items-center gap-3.5">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={15} />
            </a>
            <a href={profile.resumePath} target="_blank" rel="noreferrer" className="btn-secondary">
              <Eye size={15} /> Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Github size={15} /> GitHub
            </a>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
