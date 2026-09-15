import avatarImage from '../assets/profile.jpeg'

// ─── PERSONAL ────────────────────────────────────────────────────────────────
export const personal = {
  name: 'Abdur Rehman',
  role: 'AI Engineer & Computer Vision Specialist',
  tagline: 'Building intelligent systems — from raw pixels to production models.',
  email: 'abdurrrehmannn@gmail.com',
  github: 'https://github.com/abdurrrehmann/',
  linkedin: 'https://www.linkedin.com/in/abdur-rehman-09a512253',
  avatar: avatarImage,
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const about = {
  bio: `I'm an AI Engineer specializing in Computer Vision and LLM systems. I design and ship
  production-grade models — from training pipelines and real-time inference endpoints to
  RAG architectures and fine-tuned language models. I care about model quality, system
  efficiency, and clean APIs that other engineers actually want to use.`,
  education: [
    {
      degree: 'MS in AI',
      institution: 'NUST PNEC',
      year: '2026 – 2028',
    },
    {
      degree: 'BSCS Specialization in AI',
      institution: 'NED University Of Engineering and Technology',
      year: '2022 – 2026',
    },
    {
      degree: 'Pre Engineering',
      institution: 'Govt. Dehli College',
      year: '2020 – 2022',
    }
  ],
  certifications: [
    { name: 'AI Essentials Specialization', issuer: 'Google', year: '' },
    { name: 'Building GenAI Apps', issuer: 'IBM', year: '' },
    { name: 'Generative AI with LLMs', issuer: 'DeepLearning.AI', year: '' },
  ],
}

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
export const experience = [
  {
    title: 'MTO AI Engineer',
    company: 'AGI Denim',
    period: 'Sept 2026 – Present',
    bullets: [],
    tags: ['Computer Vision', 'CI/CD', 'Model Deployment'],
  },
  {
    title: 'AI Engineer Intern',
    company: 'Stingray Technologies',
    period: 'Dec 2025 – Feb 2026',
    bullets: [
      'Managed MLOps workflows including model versioning, deployment automation, and lifecycle management.',
      'Built CI/CD pipelines for ML model releases, reducing deployment friction across environments.',
      'Implemented monitoring and rollback strategies for production model endpoints.',
    ],
    tags: ['MLOps', 'CI/CD', 'Model Deployment', 'Docker'],
  },
  {
    title: 'AI Engineer Trainee',
    company: 'Wenawa',
    period: 'Oct 2025 – Nov 2025',
    bullets: [
      'Developed and optimized AI/ML applications for real-world business workflows.',
      'Built RESTful backend services using Node.js and Express to serve ML model outputs.',
      'Integrated model inference pipelines with production APIs.',
    ],
    tags: ['Node.js', 'Express', 'REST API', 'ML Integration'],
  },
  {
    title: 'AI Engineer Intern',
    company: 'PakData',
    period: 'Sept 2025',
    bullets: [
      'Evaluated and benchmarked large language models including LLaMA and GPT variants.',
      'Applied quantization and pruning techniques to reduce model memory footprint by up to 40%.',
      'Developed evaluation harnesses to systematically compare model outputs across tasks.',
    ],
    tags: ['LLaMA', 'GPT', 'Quantization', 'Pruning', 'LLM Eval'],
  },
  {
    title: 'React Native Developer Intern',
    company: 'Pakistan International Airlines (PIA)',
    period: 'Aug 2024',
    bullets: [
      'Built an Android application with granular role-based access control for internal airline operations.',
      'Integrated real-time database operations using Firebase Firestore.',
      'Collaborated with operations team to map domain requirements to app features.',
    ],
    tags: ['React Native', 'Firebase', 'Android', 'RBAC'],
  },
]

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const projects = [
  {
    name: 'IsharaAI – AI-Powered Sign Language Translation Application',
    category: 'App Development',
    description:
      'Final Year Project. Developed a real-time sign language–to–text translation system using MediaPipe Hands for gesture extraction and a BiLSTM-based deep learning model trained on a custom gesture dataset. Built a mobile-first application with real-time feedback, integrating end-to-end deep learning workflows.',
    highlight: '🏆 Secured PKR 100,000 in university funding for innovation and further development.',
    tags: ['React Native', 'Python', 'MediaPipe', 'BiLSTM', 'OpenCV', 'Render'],
    image: null,
    github: 'https://github.com/abdurrrehmann/IsharaAI',
    live: null,
    featured: true,
  },
  {
    name: 'Smart Learning Assistant - Multilingual RAG Chatbot',
    category: 'LLM Engineering',
    description:
      'Built a multilingual (English, Urdu, Roman Urdu) RAG pipeline using LangChain, FAISS/ChromaDB, and HuggingFace embeddings; ingested 50+ course documents with 256-token chunking for optimized semantic retrieval.',
    tags: ['RAG', 'FAISS', 'LangChain', 'FastAPI'],
    image: null,
    github: 'https://github.com/abdurrrehmann/Smart-Learning-Assistant',
    live: null,
  },
  {
    name: 'Automated Attendance System',
    category: 'Computer Vision',
    description:
      'Automated real-time facial recognition using YOLOv8 and OpenCV on live camera feeds at 30 FPS, reducing manual attendance from ~5 minutes to under 10 seconds for 50+ individuals.',
    tags: ['YOLOv8', 'OpenCV', 'Python', 'Streamlit'],
    image: null,
    github: 'https://github.com/abdurrrehmann/Automated-Attendance-System',
    live: null,
  },
  {
    name: 'AI-Powered Smart Traffic Monitoring & Congestion Prediction',
    category: 'AI / ML',
    description:
      'Integrated 3 real-real-time data sources (TomTom API, weather API, ML classifier) for congestion prediction achieving 88% model accuracy; dashboard updates every 30 seconds.',
    tags: ['TomTom API', 'ML', 'Python', 'Streamlit'],
    image: null,
    github: 'https://github.com/abdurrrehmann/Smart-Route-Finder-App',
    live: null,
  },
  {
    name: 'Facial Recognition Attendance System',
    category: 'Computer Vision',
    description:
      'Production attendance system using ArcFace embeddings and a MySQL backend. Sub-200ms recognition latency per frame with a Flask admin dashboard.',
    tags: ['ArcFace', 'OpenCV', 'Flask', 'MySQL'],
    image: null,
    github: 'https://github.com/abdurrrehmann/Automated-Attendance-System',
    live: null,
  },
  {
    name: 'MLOps Deployment Dashboard',
    category: 'MLOps',
    description:
      'Lightweight dashboard for tracking model versions, deployment status, and performance drift. Built with Flask and MongoDB, integrated with GitHub Actions for auto-deploy triggers.',
    tags: ['MLOps', 'Flask', 'MongoDB', 'Docker', 'CI/CD'],
    image: null,
    github: 'https://github.com/abdurrrehmann/MLOps-Deployment-Dashboard',
    live: null,
  },
  {
    name: 'NLP Sentiment Pipeline',
    category: 'NLP',
    description:
      'Multi-class sentiment analysis API built with fine-tuned DistilBERT. Includes Pandas-based preprocessing, Scikit-Learn baselines, and a comparative evaluation report.',
    tags: ['DistilBERT', 'NLP', 'Scikit-Learn', 'FastAPI'],
    image: null,
    github: 'https://github.com/abdurrrehmann/NLP-Sentiment-Pipeline',
    live: null,
  },
]

export const projectCategories = ['All', 'Computer Vision', 'LLM Engineering', 'MLOps', 'NLP']

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const skillGroups = [
  {
    group: 'Languages',
    color: 'cyan',
    skills: ['Python', 'C/C++', 'SQL', 'JavaScript'],
  },
  {
    group: 'ML & AI',
    color: 'purple',
    skills: [
      'Deep Learning', 'Computer Vision', 'RAG', 'LLM Fine-Tuning',
      'NLP', 'LLM Engineering', 'Model Training & Evaluation', 'Real-Time Inference',
    ],
  },
  {
    group: 'Frameworks & Libraries',
    color: 'cyan',
    skills: [
      'Flask', 'FastAPI', 'OpenCV', 'YOLO', 'TensorFlow',
      'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib',
    ],
  },
  {
    group: 'Databases',
    color: 'purple',
    skills: ['MySQL', 'Firebase (Firestore)', 'MongoDB'],
  },
  {
    group: 'Deployment & Tools',
    color: 'cyan',
    skills: ['Model Deployment', 'Docker', 'Git', 'OpenAI API', 'n8n', 'CI/CD'],
  },
]