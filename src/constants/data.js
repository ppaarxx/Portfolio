import resume from "../Assets/Resume.pdf";

export const sectionOrder = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "recognition",
  "contact",
];

export const siteMeta = {
  title: "Parth Puri - AI Engineer",
  description: "AI Engineer specializing in Agentic AI, LLMs, and GenAI",
  url: "https://ppaarxx.netlify.app",
  image: "https://ppaarxx.netlify.app/favicon.png",
  twitterCard: "summary_large_image",
};

export const personalInfo = {
  name: "Parth Mahendra Puri",
  shortName: "Parth Puri",
  initials: "PMP",
  title: "AI Engineer",
  email: "puriparth34@gmail.com",
  location: "Mumbai, Maharashtra, India",
  github: "https://github.com/ppaarxx",
  linkedin: "https://linkedin.com/in/parth-mahendra-puri/",
  portfolio: "https://ppaarxx.netlify.app",
  resume,
  availability: "Available for opportunities",
  bio: "Detail-oriented AI Engineer with a strong foundation in Machine Learning, Deep Learning, Generative AI, and Agentic AI workflows. Skilled in developing innovative solutions using Multimodal LLMs and state-of-the-art technologies.",
  heroDescription: [
    "Building autonomous AI systems and enterprise-grade GenAI pipelines.",
    "Turning frontier models into real-world solutions.",
  ],
  aboutCopy:
    "I'm an AI Engineer based in Mumbai, India, with a B.E. in Artificial Intelligence and Data Science (8.04 CGPA) from the University of Mumbai. I specialize in building production-grade Agentic AI systems, LLM fine-tuning pipelines, and enterprise GenAI solutions. Currently at Verdantis, I architect AI workflows that push SME efficiency by 95% using the world's frontier models.",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const heroRoles = [
  "AI Engineer",
  "Agentic AI Builder",
  "LLM Fine-tuner",
  "GenAI Architect",
];

export const aboutStats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "AI Projects Built" },
  { value: "95%", label: "Efficiency Gains Delivered" },
];

export const experienceItems = [
  {
    company: "Verdantis (Ultria, Verdantis)",
    role: "Artificial Intelligence (AI) Engineer",
    period: "Mar 2025 - Present",
    location: "Mumbai",
    tag: "Current",
    bullets: [
      "Developed AI systems leveraging Google Gemini 2.5 Pro/Flash, OpenAI GPT-4.1/GPT-5, Anthropic Claude 3.5 Sonnet, Claude 3.7 Sonnet, Claude 4 Sonnet and Opus to deliver scalable enterprise solutions.",
      "Designed Agentic workflows and end-to-end GenAI pipelines for autonomous, context-aware task execution in the MRO industry.",
      "Boosted SME work efficiency by 95% using AI prediction pipelines.",
      "Implemented AI governance with strict HITL validation gates, reduced hallucinations by 40%, and prevented non-factual corporate data generation.",
    ],
  },
  {
    company: "Health India Insurance TPA Pvt Ltd",
    role: "Machine Learning Engineer",
    period: "Nov 2024 - Mar 2025",
    location: "Mumbai",
    bullets: [
      "Trained ML/DL models, automating processes and enhancing operational efficiency by 70%.",
      "Built GenAI data extraction pipelines; achieved 91%+ accuracy in UAT through LLM fine-tuning and hyperparameter optimization.",
      "Worked with BERT, Llama (3.2-3B and 1B), Mistral (3B and 7B), DeepSeek (7B, 8B, 14B), YOLO, LSTMs, and GRUs.",
      "Built RAG pipelines with MongoDB and LangChain. Deployed on-premise pipeline with zero external data transfer for PII security.",
    ],
  },
  {
    company: "Sharv Auto Tech Solutions Pvt Ltd",
    role: "AI Engineer Intern",
    period: "May 2024 - Nov 2024",
    location: "Mumbai",
    bullets: [
      "Enhanced NLP capabilities using LLMs and RAG, including fine-tuning.",
      "Built SQL database integrations and FastAPI backends.",
    ],
  },
  {
    company: "Fafadia Tech",
    role: "AI Engineer Intern",
    period: "May 2023 - Apr 2024",
    location: "Mumbai",
    bullets: [
      "Worked on pretrained models, similarity modeling, and transfer learning.",
      "Developed ML and DL models using Python.",
    ],
  },
];

export const projectItems = [
  {
    id: "fallback-research-assistant-agent",
    name: "Research Assistant Agent",
    description:
      "Architected a fully autonomous research pipeline using LangGraph with a Supervisor-Worker multi-agent architecture. Implemented a self-evaluating feedback loop that dynamically assesses research quality and autonomously triggers refined search iterations with zero manual intervention. Engineered a production-grade FastAPI async REST API with PostgreSQL for stateful agent orchestration.",
    language: "Python",
    stars: 0,
    forks: 0,
    updatedAt: "2026-03-01T20:04:24Z",
    repoUrl: "https://github.com/ppaarxx/Research_Assistant_Agent",
  },
  {
    id: "fallback-retroflex",
    name: "Retroflex: Reverse Image Recon",
    description:
      "Reverse Image Search engine using Content-Based Image Retrieval. Leverages deep learning feature extraction via Auto-encoders and CNNs to reduce search latency by 40%, significantly enhancing system performance.",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
    updatedAt: "2024-08-30T17:44:42Z",
    repoUrl:
      "https://github.com/ppaarxx/Retroflex-Uncovering-Visual-Equivalences-through-Reverse-Image-Recon",
  },
];

export const skillGroups = [
  {
    title: "AI and ML Core",
    items: [
      { name: "Python", icon: "python" },
      { name: "Machine Learning", icon: "brain" },
      { name: "Deep Learning", icon: "layers" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "Scikit-learn", icon: "scikitlearn" },
    ],
  },
  {
    title: "Generative and Agentic AI",
    items: [
      { name: "Generative AI", icon: "sparkles" },
      { name: "Agentic AI", icon: "bot" },
      { name: "LLM Fine-tuning", icon: "wand" },
      { name: "LLM RAG", icon: "database" },
      { name: "LangChain", icon: "link" },
      { name: "LangGraph", icon: "graph" },
    ],
  },
  {
    title: "Infrastructure and Backend",
    items: [
      { name: "FastAPI", icon: "fastapi" },
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "GCP", icon: "gcp" },
      { name: "Linux", icon: "linux" },
      { name: "Git and GitHub", icon: "github" },
    ],
  },
  {
    title: "Data and Vector",
    items: [
      { name: "Vector Store", icon: "vector" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQL", icon: "sql" },
    ],
  },
];

export const awards = [
  {
    title: "Best Team Award (Team AI)",
    organization: "Ultria / Verdantis",
    year: "2025",
  },
  {
    title: "Winner - Code-O-Fiesta Hackathon",
    organization: "Competition",
    year: "2022",
  },
  {
    title: "Winner - Code-O-Fiesta Hackathon",
    organization: "Competition",
    year: "2023",
  },
  {
    title: "Winner - VCET National Level Project Showcase",
    organization: "VCET",
    year: "2023",
  },
  {
    title: "Runners-up - VNPS",
    organization: "Competition",
    year: "2024",
  },
];

export const educationItems = [
  {
    title: "B.E. Artificial Intelligence and Data Science",
    subtitle: "University of Mumbai - VCET, Mumbai",
    meta: "Jun 2020 - May 2024 | CGPA: 8.04",
  },
  {
    title: "HSC",
    subtitle: "Bhartiya Vidya Bhavans College, Andheri",
    meta: "May 2018 - May 2020",
  },
  {
    title: "IEEE Publication",
    subtitle:
      '"Retroflex: Uncovering Visual Equivalences through Reverse Image Recon"',
    meta: "2024 11th INDIACom, New Delhi - IEEE Xplore",
    link: "https://ieeexplore.ieee.org",
    badge: "IEEE",
  },
];

export const certificationItems = [
  "Generative AI on GCP: Deep Dive Into Generative AI Studio",
  "Machine Learning with TensorFlow",
];

export const contactLinks = [
  {
    label: "Email",
    value: "puriparth34@gmail.com",
    href: "mailto:puriparth34@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    value: "/in/parth-mahendra-puri/",
    href: "https://linkedin.com/in/parth-mahendra-puri/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/ppaarxx",
    href: "https://github.com/ppaarxx",
    icon: "github",
  },
];

export const footerCopy = {
  line: "Designed and Built by Parth Mahendra Puri - 2025",
  location: "Made in Mumbai * India",
};

