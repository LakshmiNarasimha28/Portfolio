import { CreditCard, Image as ImageIcon, Blocks, ShoppingCart, TrendingUp, MonitorPlay } from "lucide-react";

export const profile = {
  name: "Tammineni Lakshmi Narasimha",
  role: "AI/ML Engineer • Full Stack Developer",
  headline: "Designing machine learning pipelines and data-driven applications.",
  description: [
    "B.Tech Computer Science student at Lovely Professional University, specializing in Artificial Intelligence and Machine Learning, with a CGPA of 8.62.",
    "My projects focus on end-to-end ML systems, from data collection and preprocessing to model evaluation and deployment-ready interfaces.",
    "I enjoy combining strong engineering practices with applied data science to deliver measurable improvements, such as higher detection quality and robust multi-class recognition.",
  ],
  strengths: [
    "End-to-end ML pipeline development",
    "EDA, feature engineering, and model optimization",
    "Python + SQL for analytics workflows",
    "Production-focused prototypes using Streamlit and web tooling",
  ],
  availability: "Open to AI/ML internships, research, and engineering collaborations.",
  email: "lakshminarasimha1098@gmail.com",
  phone: "+91-6281601140",
  github: "https://github.com/LakshmiNarasimha28",
  linkedin: "https://linkedin.com/in/lakshminarasimha28",
  resumePath: "/resume.pdf",
  cgpa: "8.62 / 10",
  university: "Lovely Professional University",
  degree: "B.Tech in Computer Science (Artificial Intelligence & Machine Learning)",
  educationPeriod: "Aug '2023 - Present",
  location: "Jalandhar, Punjab",
  resumeSummary: [
    "AI/ML-focused CSE undergraduate with strong hands-on project execution.",
    "Built production-like ML systems for image classification and fraud detection.",
    "Comfortable across ML, full-stack foundations, and data analytics workflows."
  ],
  educationHistory: [
    {
      level: "Undergraduate",
      institute: "Lovely Professional University",
      detail: "B.Tech CSE (AI & ML)",
      score: "CGPA: 8.62 / 10",
      period: "Aug '2023 - Present",
      place: "Jalandhar, Punjab"
    },
    {
      level: "Intermediate",
      institute: "Resonance Junior College",
      detail: "Intermediate",
      score: "Percentage: 97%",
      period: "Jul '2022 - May '2023",
      place: "Hyderabad, Telangana"
    },
    {
      level: "Matriculation",
      institute: "Montessori Indus School",
      detail: "Matriculation",
      score: "Percentage: 89.6%",
      period: "Jun '2020 - Jul '2021",
      place: "Kurnool, Andhra Pradesh"
    }
  ]
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "C/C++", "Java", "JavaScript"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["Scikit-learn", "Keras", "TensorFlow", "Pandas", "NumPy", "Streamlit"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook"]
  },
  {
    category: "Soft Skills",
    items: ["Teamwork", "Analytical Thinking", "Adaptability", "Learning Agility"]
  }
];

export const certs = [
  {
    name: "Automation Anywhere - Essentials Automation Professional",
    issuer: "Automation Anywhere",
    link: "https://upskill.automationanywhere.com/essentials-automation-certification-2024",
    linkLabel: "Certificate Path",
    date: "Nov '2025"
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Google via Coursera",
    link: "https://www.coursera.org/learn/computer-networking",
    linkLabel: "Course",
    date: "Sep '2024"
  },
  {
    name: "Data Analytics with Python",
    issuer: "IBM via Coursera",
    link: "https://www.coursera.org/learn/data-analysis-with-python",
    linkLabel: "Course",
    date: "Mar '2024"
  },
  {
    name: "The Complete Python Bootcamp",
    issuer: "Udemy",
    link: "https://www.udemy.com/course/complete-python-bootcamp/",
    linkLabel: "Course",
    date: "Feb '2024"
  }
];

export const projects = [
  {
    id: "image-classifier",
    title: "Image Classification System",
    period: "Apr '2025",
    description: "High-accuracy multi-class image classification system combining deep feature extraction and classical ML classification for practical reliability.",
    highlights: [
      "Designed a hybrid ML architecture using MobileNetV2 feature extraction and SVM for robust recognition across diverse image domains.",
      "Engineered a Streamlit platform for real-time multi-image prediction with modular evaluation and explainability support.",
      "Automated dataset generation through web scraping and 1280-D CNN encoding, achieving 96% classification accuracy.",
    ],
    tech: ["TensorFlow", "MobileNetV2", "SVM", "Streamlit", "Python"],
    github: "https://github.com/LakshmiNarasimha28/Image_Classifier",
    flow: "Dataset -> MobileNetV2 -> SVM -> Real-Time Prediction",
    icon: ImageIcon,
    thumbnail: "/project-thumbnails/image-classifier.png"
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    period: "Jul '2025",
    description: "End-to-end fraud detection pipeline optimized for imbalanced financial data and low false-negative rates.",
    highlights: [
      "Developed complete ML workflow for credit card transaction classification with Python, Scikit-learn, and SQL-backed analysis.",
      "Used SQL, EDA, and ensemble modeling (XGBoost/Random Forest) to improve data quality and reduce missed fraud cases.",
      "Improved detection quality by 42% in F1 score through preprocessing, feature scaling, imbalance handling, and model selection.",
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "MySQL", "EDA"],
    github: "https://github.com/LakshmiNarasimha28/Credit-Card-Fraud-Detection-Summer-Training",
    flow: "Raw Data -> EDA/Scaling -> XGBoost Ensemble -> Classification",
    icon: CreditCard,
    thumbnail: "/project-thumbnails/fraud-detection.png"
  },
  {
    id: "blockchain-fs",
    title: "Blockchain Integrated File System",
    period: "Mar '2025",
    description: "Decentralized file storage architecture focused on tamper-resistant validation and resilient file traceability.",
    highlights: [
      "Architected distributed file integrity workflows using blockchain smart contracts across network peers.",
      "Built Python services integrated with Ethereum contracts and IPFS for secure validation and decentralized storage.",
      "Improved security and traceability with modular transaction logic and cryptographic checks for DApp workflows.",
    ],
    tech: ["TypeScript", "Python", "Ethereum", "IPFS", "Web3.js"],
    github: "https://github.com/LakshmiNarasimha28/Blockchain-Integrated-File-System",
    flow: "Client -> Smart Contract -> SHA256 -> IPFS Network",
    icon: Blocks,
    thumbnail: "/project-thumbnails/blockchain-files-architecture.svg"
  },
  {
    id: "auction-app",
    title: "Online Auction Platform",
    period: "2024",
    description: "Full-stack auction platform where users can create listings, upload products, and place bids in real time.",
    highlights: [
      "Built user flows for product listing, bidding, and auction lifecycle management using a MERN architecture.",
      "Implemented secure authentication and role-based actions for buyers and sellers.",
      "Structured APIs and database models for scalable catalog and bid history management.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/LakshmiNarasimha28/Auction_Frontend",
    flow: "Bidder -> React UI -> Node/Express API -> MongoDB",
    icon: ShoppingCart,
    thumbnail: "/project-thumbnails/auction-frontend.png"
  },
  {
    id: "walmart-sales",
    title: "Walmart Sales Data Analysis",
    period: "2024",
    description: "Exploratory analytics project focused on retail sales trends, customer behavior, and business decision support.",
    highlights: [
      "Performed data cleaning, SQL analysis, and EDA to uncover high-value product and seasonal purchase patterns.",
      "Built visual summaries to communicate actionable sales insights for business planning.",
      "Used structured analysis workflows to improve reporting quality and decision clarity.",
    ],
    tech: ["Python", "Pandas", "MySQL", "Data Visualization"],
    github: "https://github.com/LakshmiNarasimha28/Walmart_Data_Analysis",
    flow: "CSV/SQL -> Cleaning -> EDA -> Visual Insights",
    icon: TrendingUp,
    thumbnail: "/project-thumbnails/walmart-analysis.png"
  },
  {
    id: "media-stream",
    title: "Media Stream Platform",
    period: "2026",
    description: "Modern media streaming interface with structured discovery flows, search, and persistent watch tracking.",
    highlights: [
      "Built pages for trending media, movies, search results, recommendations, profile, history, and watch-later flows.",
      "Used React, Vite, React Router, and CSS Modules to create a responsive single-page experience.",
      "Added localStorage-driven watch tracking and reusable media browsing patterns for a production-like product feel.",
    ],
    tech: ["React", "Vite", "React Router", "CSS Modules"],
    github: "https://github.com/LakshmiNarasimha28/Media_stream",
    flow: "User -> React Router UI -> JSON API -> localStorage",
    icon: MonitorPlay,
    thumbnail: "/project-thumbnails/auction-frontend.png"
  }
];

export const training = {
  title: "Real World Machine Learning: Scratch to Impact",
  provider: "Fifth Force",
  period: "Jun '2025 - Jul '2025",
  points: [
    "Orchestrated data intelligence initiatives that combined statistical analysis, relational schema design, and predictive modeling.",
    "Architected high-performance Python/SQL pipelines using EDA, window functions, and hyperparameter tuning.",
    "Delivered optimized forecasts for Walmart Sales and SpaceX Falcon 9 scenarios through advanced modeling workflows.",
  ]
};

export const achievements = [
  {
    title: "HackerRank 5-Star Gold Badge in C++",
    date: "Oct '2025",
    detail: "Demonstrated strength in data structures and object-oriented programming through competitive problem solving."
  },
  {
    title: "IBM Digital Credentials",
    date: "Mar '2025",
    detail: "Validated practical proficiency in Python, SQL, and data analysis through applied assessments."
  }
];
