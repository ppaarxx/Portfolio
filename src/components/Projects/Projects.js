import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { FaRobot, FaCode, FaBrain, FaLightbulb } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";

// Import your project images
import Prediction from "../../Assets/Projects/prediction and detection.jpeg";
import DS from "../../Assets/Projects/desktop-wallpaper-data-science-data.jpg";
import GSUCV from "../../Assets/Projects/CVision.jpg";
import LinkedIn from "../../Assets/Projects/linked in.png";
import GPT from "../../Assets/Projects/GPT.png";
import Retro from "../../Assets/Projects/retroflex.png";
import Versify from "../../Assets/Projects/versify.png";
import pf from "../../Assets/Projects/portfolio.png";
import scm from "../../Assets/Projects/scm.jpg";

// You'll need to add this image for the AI Paper Correction project
// import PaperCorrection from "../../Assets/Projects/paper-correction.jpg"; // Add this image

function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const projectsData = [
    {
      id: "ai-paper-correction",
      imgPath: DS, // Replace with PaperCorrection when you add the image
      isBlog: false,
      title: "AI-Powered Paper Correction using Generative AI",
      description: "Automated evaluation of student answer sheets using advanced Generative AI. Supports multiple LLMs including Gemini API and Ollama (LLaMA 3.2:3B). Features text extraction from PDFs, AI-driven assessment, detailed feedback generation, and structured PDF report creation for educational institutions.",
      ghLink: "https://github.com/ppaarxx/AI-Powered-Paper-Correction-using-Generative-AI",
      technologies: ["Python", "Gemini API", "Ollama", "LLaMA 3.2", "pdfplumber", "FPDF"],
      category: "AI/ML",
      featured: true
    },
    {
      id: "retroflex",
      imgPath: Retro,
      isBlog: false,
      title: "Retroflex - Visual Equivalences through Reverse Image Recognition",
      description: "Comprehensive Content-Based Image Retrieval (CBIR) system designed for large datasets with 25,000+ photos. Advanced reverse image search capabilities with sophisticated visual similarity algorithms and efficient indexing for real-time image matching and discovery.",
      ghLink: "https://github.com/ppaarxx/Retroflex-Uncovering-Visual-Equivalences-through-Reverse-Image-Recon",
      technologies: ["Python", "Computer Vision", "Deep Learning", "OpenCV"],
      category: "AI/ML",
      featured: true
    },
    {
      id: "versify",
      imgPath: Versify,
      isBlog: false,
      title: "Versify - AI-Driven Creative Toolkit",
      description: "Innovative AI-powered platform offering comprehensive content creation tools. Features personalized poem generation, captivating story creation, logo design, advertisement creation, and marketing strategy development using cutting-edge artificial intelligence technologies.",
      ghLink: "https://github.com/ppaarxx/Versify",
      technologies: ["AI/ML", "NLP", "Creative AI", "Python"],
      category: "AI/ML",
      featured: true
    },
    {
      id: "gpt-portal",
      imgPath: GPT,
      isBlog: false,
      title: "React-Based GPT-3 OpenAI Connect Portal",
      description: "Modern front-end application showcasing GPT-3 capabilities with responsive and dynamic user interface. Built with React featuring well-organized components, efficient development patterns, and seamless OpenAI API integration for AI-powered conversations.",
      ghLink: "https://github.com/ppaarxx/GPT3-OpenAI-Connect-Portal",
      technologies: ["React", "OpenAI API", "JavaScript", "CSS"],
      category: "Web Development"
    },
    {
      id: "motion-control",
      imgPath: GSUCV,
      isBlog: false,
      title: "Motion Controlled Game System using Computer Vision",
      description: "Revolutionary gesture-based game controller using computer vision technology. Automates hand gestures for gaming control, initially designed for car games but adaptable for multi-purpose controller applications with comprehensive gesture recognition algorithms.",
      ghLink: "https://github.com/ppaarxx/Motion-controlled-game-system-using-computer-vision",
      technologies: ["Python", "OpenCV", "Computer Vision", "ML"],
      category: "AI/ML"
    },
    {
      id: "face-landmarks",
      imgPath: Prediction,
      isBlog: false,
      title: "Face Landmarks Detection and Prediction",
      description: "Advanced facial recognition system using multi-model pipeline for face detection, landmark prediction, and facial expression analysis. Implements state-of-the-art computer vision techniques for real-time face processing and feature extraction.",
      ghLink: "https://github.com/ppaarxx/Face-Landmarks-Detection-and-Face-Landmarks-Prediction",
      technologies: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"],
      category: "AI/ML"
    },
    {
      id: "portfolio",
      imgPath: pf,
      isBlog: false,
      title: "AI Engineer Portfolio Website",
      description: "Modern, responsive React-based portfolio website showcasing AI engineering expertise, projects, and professional experience. Features advanced animations, interactive components, and optimized performance for showcasing technical capabilities.",
      ghLink: "https://github.com/ppaarxx/Portfolio", // Update with correct link
      technologies: ["React", "Bootstrap", "CSS", "JavaScript"],
      category: "Web Development"
    },
    {
      id: "linkedin-clone",
      imgPath: LinkedIn,
      isBlog: false,
      title: "LinkedIn Clone - Professional Network",
      description: "Full-featured LinkedIn clone built with modern web technologies. Implements social networking features, user authentication, post creation, professional connections, and real-time messaging using React, Redux, and Firebase.",
      ghLink: "https://github.com/ppaarxx/Linked-In-Clone",
      technologies: ["React", "Redux", "Firebase", "Styled-Components"],
      category: "Web Development"
    },
    {
      id: "data-science",
      imgPath: DS,
      isBlog: false,
      title: "Data Science Internship Projects",
      description: "Comprehensive collection of data science projects covering data processing, statistical analysis, machine learning modeling, and insights generation. Demonstrates expertise in data-driven decision making and advanced analytics techniques.",
      ghLink: "https://github.com/ppaarxx/DS",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      category: "Data Science"
    },
    {
      id: "agro-tec",
      imgPath: scm,
      isBlog: false,
      title: "Agro-Tec: Digitizing Fruit Supply Chain Management",
      description: "Revolutionary supply chain management system for the fruit industry in Maharashtra, India. Android-based platform enabling farmers to register products, manage inventory, track sales and deliveries with comprehensive supply chain digitization.",
      ghLink: "https://github.com/ppaarxx/Java-Mini-Project-sem-3",
      technologies: ["Java", "Android", "SQLite", "Supply Chain"],
      category: "Mobile Development"
    }
  ];

  const featuredProjects = projectsData.filter(project => project.featured);
  const regularProjects = projectsData.filter(project => !project.featured);

  return (
    <div className="projects-page">
      <Container fluid className="project-section">
        <Particle />
        <Container>
          {/* Enhanced Header Section */}
          <div className={`projects-header ${isLoaded ? 'animate-fade-up' : ''}`}>
            <div className="header-icon">
              <FaRobot className="main-icon" />
              <div className="icon-orbit">
                <FaCode className="orbit-icon orbit-1" />
                <FaBrain className="orbit-icon orbit-2" />
                <FaLightbulb className="orbit-icon orbit-3" />
              </div>
            </div>
            
            <h1 className="project-heading">
              My Recent <strong className="purple">AI Projects</strong>
            </h1>
            
            <p className="project-subtitle">
              Showcasing production-grade AI systems, innovative machine learning solutions, 
              and cutting-edge applications that solve real-world problems
            </p>

            {/* Project Stats */}
            {/* <div className="project-stats">
              <div className="stat-item">
                <span className="stat-number">{projectsData.length}+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">AI/ML Focus</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div> */}
          </div>

          {/* Featured Projects Section */}
          <div className={`featured-section ${isLoaded ? 'animate-slide-up' : ''}`}>
            <div className="section-header">
              <AiOutlineProject className="section-icon" />
              <h2 className="section-title">Featured AI Projects</h2>
              <div className="section-line"></div>
            </div>

            <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
              {featuredProjects.map((project, index) => (
                <Col 
                  md={4} 
                  className={`project-card featured-card ${isLoaded ? 'animate-card' : ''}`}
                  key={project.id}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="card-wrapper">
                    <ProjectCard
                      imgPath={project.imgPath}
                      isBlog={project.isBlog}
                      title={project.title}
                      description={project.description}
                      ghLink={project.ghLink}
                      technologies={project.technologies}
                      category={project.category}
                    />
                    {hoveredCard === project.id && (
                      <div className="card-glow"></div>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          {/* All Projects Section */}
          <div className={`all-projects-section ${isLoaded ? 'animate-slide-up' : ''}`}>
            <div className="section-header">
              <FaCode className="section-icon" />
              <h2 className="section-title">All Projects</h2>
              <div className="section-line"></div>
            </div>

            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              {regularProjects.map((project, index) => (
                <Col 
                  md={4} 
                  className={`project-card ${isLoaded ? 'animate-card' : ''}`}
                  key={project.id}
                  style={{ animationDelay: `${(index + featuredProjects.length) * 0.1 + 0.5}s` }}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="card-wrapper">
                    <ProjectCard
                      imgPath={project.imgPath}
                      isBlog={project.isBlog}
                      title={project.title}
                      description={project.description}
                      ghLink={project.ghLink}
                      technologies={project.technologies}
                      category={project.category}
                    />
                    {hoveredCard === project.id && (
                      <div className="card-glow"></div>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          {/* Call to Action */}
          <div className={`cta-section ${isLoaded ? 'animate-fade-up' : ''}`}>
            <div className="cta-content">
              <h3 className="cta-title">Interested in Collaboration?</h3>
              <p className="cta-description">
                Let's build the future with <span className="highlight">AI everywhere</span>
              </p>
              <a 
                href="https://github.com/ppaarxx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button"
              >
                View More Projects
                <div className="button-shine"></div>
              </a>
            </div>
          </div>
        </Container>
      </Container>

      {/* Enhanced CSS Styles */}
      <style jsx>{`
        /* Base Styles */
        .projects-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
        }

        .project-section {
          padding: 100px 0 60px 0;
          position: relative;
        }

        /* Initial hidden states */
        .projects-header,
        .featured-section,
        .all-projects-section,
        .cta-section,
        .project-card {
          opacity: 0;
        }

        /* Header Section */
        .projects-header {
          text-align: center;
          margin-bottom: 80px;
          position: relative;
        }

        .header-icon {
          position: relative;
          margin-bottom: 40px;
          display: inline-block;
        }

        .main-icon {
          font-size: 4em;
          color: #c770f0;
          animation: mainIconFloat 4s ease-in-out infinite;
        }

        .icon-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
        }

        .orbit-icon {
          position: absolute;
          font-size: 1.2em;
          color: rgba(199, 112, 240, 0.6);
          animation: orbitRotate 8s linear infinite;
        }

        .orbit-1 {
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .orbit-2 {
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          animation-delay: -2.7s;
        }

        .orbit-3 {
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          animation-delay: -5.3s;
        }

        .project-heading {
          font-size: 3.5em;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 25px;
          letter-spacing: -2px;
        }

        .purple {
          background: linear-gradient(135deg, #c770f0, #9c27b0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .project-subtitle {
          font-size: 1.3em;
          color: rgba(255, 255, 255, 0.8);
          max-width: 800px;
          margin: 0 auto 50px auto;
          line-height: 1.6;
        }

        /* Project Stats */
        .project-stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .stat-item {
          text-align: center;
          position: relative;
        }

        .stat-number {
          display: block;
          font-size: 2.5em;
          font-weight: 800;
          color: #c770f0;
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 1em;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }

        /* Section Headers */
        .section-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 60px;
          position: relative;
        }

        .section-icon {
          font-size: 2em;
          color: #c770f0;
        }

        .section-title {
          font-size: 2.5em;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .section-line {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #c770f0, #9c27b0);
          border-radius: 2px;
        }

        /* Featured Section */
        .featured-section {
          margin-bottom: 100px;
          position: relative;
        }

        .featured-section::before {
          content: '';
          position: absolute;
          top: -20px;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c770f0, transparent);
        }

        /* Project Cards */
        .project-card {
          margin-bottom: 40px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-wrapper {
          position: relative;
          height: 100%;
        }

        .featured-card .card-wrapper {
          background: rgba(199, 112, 240, 0.05);
          border-radius: 20px;
          padding: 5px;
          border: 1px solid rgba(199, 112, 240, 0.2);
        }

        .card-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: radial-gradient(circle, rgba(199, 112, 240, 0.3) 0%, transparent 70%);
          border-radius: 25px;
          z-index: -1;
          animation: glowPulse 2s ease-in-out infinite;
        }

        /* Call to Action */
        .cta-section {
          margin-top: 100px;
          text-align: center;
          padding: 60px 40px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 25px;
          border: 1px solid rgba(199, 112, 240, 0.1);
          backdrop-filter: blur(15px);
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.2em;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .cta-description {
          font-size: 1.2em;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 40px;
        }

        .highlight {
          color: #c770f0;
          font-weight: 600;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 40px;
          background: linear-gradient(135deg, #c770f0, #9c27b0);
          color: #ffffff;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1em;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(199, 112, 240, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 35px rgba(199, 112, 240, 0.5);
          color: #ffffff;
          text-decoration: none;
        }

        .button-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .cta-button:hover .button-shine {
          left: 100%;
        }

        /* Animations */
        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out 0.3s forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-card {
          animation: cardSlideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes mainIconFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes orbitRotate {
          0% {
            transform: rotate(0deg) translateX(60px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(60px) rotate(-360deg);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .project-heading {
            font-size: 2.8em;
          }
          
          .project-stats {
            gap: 40px;
          }
          
          .section-header {
            flex-direction: column;
            gap: 10px;
          }
          
          .section-title {
            font-size: 2em;
          }
        }

        @media (max-width: 768px) {
          .project-section {
            padding: 80px 0 40px 0;
          }
          
          .projects-header {
            margin-bottom: 60px;
          }
          
          .project-heading {
            font-size: 2.2em;
          }
          
          .project-subtitle {
            font-size: 1.1em;
            padding: 0 20px;
          }
          
          .project-stats {
            gap: 30px;
            margin-top: 30px;
          }
          
          .stat-number {
            font-size: 2em;
          }
          
          .cta-section {
            margin: 60px 20px 0 20px;
            padding: 40px 20px;
          }
          
          .cta-title {
            font-size: 1.8em;
          }
        }

        @media (max-width: 576px) {
          .main-icon {
            font-size: 3em;
          }
          
          .icon-orbit {
            width: 100px;
            height: 100px;
          }
          
          .project-stats {
            flex-direction: column;
            gap: 20px;
          }
          
          .section-header {
            margin-bottom: 40px;
          }
          
          .featured-section,
          .all-projects-section {
            margin-bottom: 60px;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Projects;
