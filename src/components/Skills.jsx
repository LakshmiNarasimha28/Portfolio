import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, BarChart2, Globe, Database, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiTensorflow,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiJupyter,
  SiStreamlit,
  SiIpfs,
  SiEthereum,
} from 'react-icons/si';
import { FaJava, FaChartLine, FaServer, FaCode } from 'react-icons/fa';

const enhancedSkills = [
  {
    category: 'Languages',
    icon: Code2,
    items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Machine Learning',
    icon: Brain,
    items: ['Scikit-learn', 'TensorFlow', 'Keras', 'XGBoost', 'Random Forest', 'SVM', 'MobileNetV2', 'SMOTE']
  },
  {
    category: 'Data & Analytics',
    icon: BarChart2,
    items: ['Pandas', 'NumPy', 'EDA', 'Feature Engineering', 'Data Visualization', 'SQL Analysis', 'Streamlit']
  },
  {
    category: 'Web & Systems',
    icon: Globe,
    items: ['React', 'Node.js', 'Express.js', 'REST APIs', 'MERN Stack', 'IPFS', 'Ethereum / Web3']
  },
  {
    category: 'Databases & Tools',
    icon: Database,
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'GitHub', 'VS Code', 'Jupyter Notebook']
  },
];

const topSkills = ['Python', 'TensorFlow', 'Scikit-learn', 'React', 'SQL', 'XGBoost'];
const topSkillIcons = {
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  TensorFlow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'Scikit-learn': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  XGBoost: 'https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png',
};

const skillLogos = {
  Python: SiPython,
  C: SiC,
  'C++': SiCplusplus,
  Java: FaJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  'Scikit-learn': FaChartLine,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  XGBoost: FaChartLine,
  'Random Forest': FaChartLine,
  SVM: FaChartLine,
  MobileNetV2: FaChartLine,
  SMOTE: FaChartLine,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  EDA: FaChartLine,
  'Feature Engineering': FaChartLine,
  'Data Visualization': FaChartLine,
  'SQL Analysis': SiMysql,
  Streamlit: SiStreamlit,
  React: SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'REST APIs': FaServer,
  'MERN Stack': SiReact,
  IPFS: SiIpfs,
  'Ethereum / Web3': SiEthereum,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': FaCode,
  'Jupyter Notebook': SiJupyter,
};

export default function Skills() {
  const sliderRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const skillLogoColors = {
    Python: '#3776AB',
    C: '#5C6BC0',
    'C++': '#00599C',
    Java: '#EA2D2E',
    JavaScript: '#F7DF1E',
    TypeScript: '#3178C6',
    'Scikit-learn': '#F7931E',
    TensorFlow: '#FF6F00',
    Keras: '#D00000',
    XGBoost: '#0EA5E9',
    'Random Forest': '#16A34A',
    SVM: '#7C3AED',
    MobileNetV2: '#F97316',
    SMOTE: '#14B8A6',
    Pandas: '#150458',
    NumPy: '#4D77CF',
    EDA: '#06B6D4',
    'Feature Engineering': '#8B5CF6',
    'Data Visualization': '#EC4899',
    'SQL Analysis': '#00758F',
    Streamlit: '#FF4B4B',
    React: '#61DAFB',
    'Node.js': '#5FA04E',
    'Express.js': '#111827',
    'REST APIs': '#0EA5E9',
    'MERN Stack': '#22C55E',
    IPFS: '#65C2CB',
    'Ethereum / Web3': '#627EEA',
    MySQL: '#00758F',
    PostgreSQL: '#336791',
    MongoDB: '#47A248',
    Git: '#F05032',
    GitHub: '#181717',
    'VS Code': '#007ACC',
    'Jupyter Notebook': '#F37626',
  };

  const updateScrollState = React.useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const threshold = 4;
    setCanScrollLeft(scrollLeft > threshold);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - threshold);
  }, []);

  React.useEffect(() => {
    updateScrollState();
    const node = sliderRef.current;
    if (!node) return;

    node.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      node.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollSkills = (direction) => {
    if (!sliderRef.current) return;
    const amount = direction === 'left' ? -380 : 380;
    sliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    requestAnimationFrame(updateScrollState);
  };

  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45 }}
      className="section-card section-container"
    >
      <div className="mb-12">
        <p className="section-label">Core Competencies</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="text-secondary mt-3 max-w-xl leading-relaxed">From data pipelines to neural networks — the full stack of tools I use to build and ship ML systems.</p>
      </div>

      <div className="mb-14 p-6 md:p-8 rounded-2xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-5">Top Skills</p>
        <div className="flex flex-wrap gap-3 md:gap-4">
          {topSkills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-blue-200 text-sm font-semibold tracking-tight text-accent transition-all duration-300 hover:bg-blue-100 hover:-translate-y-1"
            >
              <img src={topSkillIcons[skill]} alt={skill} className="w-4 h-4 object-contain" loading="lazy" />
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scrollSkills('left')}
          disabled={!canScrollLeft}
          className={`absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-blue-200 bg-white/95 backdrop-blur flex items-center justify-center transition shadow-md ${canScrollLeft ? 'hover:bg-blue-50 opacity-100' : 'opacity-35 cursor-not-allowed'}`}
          aria-label="Scroll skills left"
        >
          <ChevronLeft size={18} className="text-accent" />
        </button>

        <button
          type="button"
          onClick={() => scrollSkills('right')}
          disabled={!canScrollRight}
          className={`absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-blue-200 bg-white/95 backdrop-blur flex items-center justify-center transition shadow-md ${canScrollRight ? 'hover:bg-blue-50 opacity-100' : 'opacity-35 cursor-not-allowed'}`}
          aria-label="Scroll skills right"
        >
          <ChevronRight size={18} className="text-accent" />
        </button>

        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-2 px-2 md:px-3"
        >
        {enhancedSkills.map((group, gi) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: gi * 0.07 }}
              whileHover={{ scale: 1.03 }}
              className="card card-hover p-6 group snap-start flex-shrink-0 flex-[0_0_100%] md:flex-[0_0_calc((100%-1.5rem)/2)] lg:flex-[0_0_calc((100%-3rem)/3)]"
            >
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[rgba(0,0,0,0.06)]">
                <div className="w-9 h-9 rounded-xl bg-accent-light flex items-center justify-center group-hover:bg-accent transition-colors duration-200">
                  <Icon size={17} className="text-accent group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map(item => {
                  const Logo = skillLogos[item];
                  return (
                    <span
                      key={item}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEF2FF] hover:bg-[#E0E7FF] transition whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.08em] text-[#374151] border border-[#D6DFFF] ${topSkills.includes(item) ? 'ring-1 ring-blue-200' : ''}`}
                    >
                      {Logo ? <Logo className="w-3.5 h-3.5" style={{ color: skillLogoColors[item] || '#2563EB' }} /> : null}
                      {item}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
        </div>
      </div>
    </motion.div>
  );
}
