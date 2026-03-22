import React from 'react';
import { projects } from '../data/portfolioData';
import { Github, ExternalLink } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '' }) => (
  <div className={className} style={{ transitionDelay: `${delay * 1000}ms` }}>
    {children}
  </div>
);

export default function ProjectsGrid() {
  const curatedIds = ['image-classifier', 'fraud-detection', 'blockchain-fs', 'auction-app'];
  const curatedProjects = curatedIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  const conciseSummary = {
    'image-classifier':
      'A robust image classification system that combines deep feature extraction with SVM to deliver high-accuracy predictions in real-time workflows.',
    'fraud-detection':
      'A high-performance fraud detection pipeline optimized for imbalanced transaction data, improving detection quality while reducing missed fraud cases.',
    'blockchain-fs':
      'A tamper-resistant decentralized file system integrating Ethereum and IPFS for trusted storage, validation, and traceability.',
    'auction-app':
      'A scalable full-stack auction platform for listing, bidding, and secure user flows with responsive product-first UX.',
  };

  return (
    <section id="projects" className="section-card section-container">
      <FadeIn className="mb-16">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-secondary mt-4 leading-relaxed max-w-[720px]">
          Selected work that highlights product thinking, engineering quality, and real-world impact across AI and full-stack systems.
        </p>
      </FadeIn>

      <div className="space-y-10">
        {curatedProjects.map((project, i) => {
          const imageLeft = i % 2 === 0;

          return (
            <FadeIn key={project.id} delay={i * 0.05}>
              <div className="rounded-2xl border border-gray-200/70 bg-white/80 backdrop-blur-md p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className={imageLeft ? 'order-1' : 'order-1 md:order-2'}>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-[rgba(0,0,0,0.08)]">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className={imageLeft ? 'order-2' : 'order-2 md:order-1'}>
                    <div className="space-y-4">
                      <p className="text-sm text-muted font-semibold tracking-wide">{`0${i + 1}`} - Featured</p>

                      <h3 className="text-3xl md:text-4xl font-black tracking-tight text-primary">{project.title}</h3>

                      <p className="text-secondary leading-relaxed max-w-md">
                        {conciseSummary[project.id] || project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tech.slice(0, 5).map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-secondary border border-gray-200/70">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-2 border border-gray-300 rounded-full inline-flex items-center gap-2 text-sm font-semibold text-primary bg-white"
                        >
                          <Github size={15} /> Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
