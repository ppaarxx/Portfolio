import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/About1.svg";
import Toolstack from "./Toolstack";
import { FaRobot, FaBrain, FaCode, FaTools } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-page">
      <Container fluid className="about-section">
        <Particle />
        <Container>
          {/* Hero Section */}
          <Row className="about-hero" style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              className={`about-content ${isLoaded ? 'animate-slide-left' : ''}`}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <div className="about-header">
                <div className="header-icon">
                  <AiOutlineUser className="user-icon" />
                </div>
                <h1 className="about-title">
                  Know Who <strong className="purple">I'M</strong>
                </h1>
                <div className="title-decoration">
                  <div className="decoration-line"></div>
                  <FaRobot className="decoration-icon" />
                  <div className="decoration-line"></div>
                </div>
              </div>
              <Aboutcard />
            </Col>
            
            <Col
              md={5}
              className={`about-img ${isLoaded ? 'animate-slide-right' : ''}`}
              style={{ 
                paddingTop: "50px", 
                paddingBottom: "100px", 
                paddingLeft: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}
            >
              <div className="image-container">
                <div className={`image-glow ${imageHovered ? 'active' : ''}`}></div>
                <img 
                  src={laptopImg} 
                  alt="AI Engineer Workspace" 
                  className="img-fluid about-image" 
                />
                <div className="floating-elements">
                  <div className="float-element element-1">
                    <FaBrain />
                  </div>
                  <div className="float-element element-2">
                    <FaCode />
                  </div>
                  <div className="float-element element-3">
                    <FaRobot />
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Skills Section */}
          <div className={`skills-section ${isLoaded ? 'animate-fade-up' : ''}`}>
            <div className="section-header">
              <FaCode className="section-icon" />
              <h1 className="project-heading">
                Professional <strong className="purple">Skillset</strong>
              </h1>
              <p className="section-subtitle">
                Cutting-edge technologies powering AI innovation
              </p>
            </div>

            <div className="tech-container">
              <Techstack />
            </div>
          </div>

          {/* Tools Section */}
          <div className={`tools-section ${isLoaded ? 'animate-fade-up' : ''}`}>
            <div className="section-header">
              <FaTools className="section-icon" />
              <h1 className="project-heading">
                <strong className="purple">Tools</strong> I use
              </h1>
              <p className="section-subtitle">
                Development environment and productivity tools
              </p>
            </div>

            <div className="tools-container">
              <Toolstack />
            </div>
          </div>
        </Container>
      </Container>

      {/* Enhanced CSS Styles */}
      <style jsx>{`
        /* Base Styles */
        .about-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
        }

        .about-section {
          padding: 100px 0 60px 0;
          position: relative;
        }

        /* Initial hidden states */
        .about-content,
        .about-img,
        .skills-section,
        .tools-section {
          opacity: 0;
        }

        /* Hero Section */
        .about-hero {
          margin-bottom: 100px;
        }

        .about-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .header-icon {
          margin-bottom: 30px;
        }

        .user-icon {
          font-size: 3.5em;
          color: #c770f0;
          animation: iconPulse 3s ease-in-out infinite;
        }

        .about-title {
          font-size: 3.2em;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 30px;
          letter-spacing: -1px;
        }

        .purple {
          background: linear-gradient(135deg, #c770f0, #9c27b0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 30px;
        }

        .decoration-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c770f0, transparent);
        }

        .decoration-icon {
          font-size: 1.5em;
          color: #c770f0;
          animation: rotate 4s linear infinite;
        }

        /* Image Section */
        .image-container {
          position: relative;
          display: inline-block;
          max-width: 100%;
        }

        .about-image {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(0px 10px 30px rgba(199, 112, 240, 0.3));
          border-radius: 20px;
          z-index: 2;
          position: relative;
        }

        .image-glow {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: radial-gradient(circle, rgba(199, 112, 240, 0.3) 0%, transparent 70%);
          border-radius: 30px;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }

        .image-glow.active {
          opacity: 1;
          animation: glowPulse 2s ease-in-out infinite;
        }

        .about-img:hover .about-image {
          transform: scale(1.05) rotate(2deg);
          filter: drop-shadow(0px 15px 40px rgba(199, 112, 240, 0.5));
        }

        /* Floating Elements */
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .float-element {
          position: absolute;
          width: 40px;
          height: 40px;
          background: rgba(199, 112, 240, 0.1);
          border: 2px solid rgba(199, 112, 240, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c770f0;
          font-size: 1.2em;
          backdrop-filter: blur(10px);
          animation: float 6s ease-in-out infinite;
        }

        .element-1 {
          top: 20%;
          right: 10%;
          animation-delay: 0s;
        }

        .element-2 {
          bottom: 30%;
          left: 5%;
          animation-delay: -2s;
        }

        .element-3 {
          top: 60%;
          right: 20%;
          animation-delay: -4s;
        }

        /* Section Headers */
        .skills-section,
        .tools-section {
          margin-bottom: 100px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-icon {
          font-size: 2.5em;
          color: #c770f0;
          margin-bottom: 25px;
          animation: iconBounce 2s ease-in-out infinite;
        }

        .project-heading {
          font-size: 2.8em;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .section-subtitle {
          font-size: 1.2em;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Container Styling */
        .tech-container,
        .tools-container {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(199, 112, 240, 0.1);
          border-radius: 25px;
          padding: 40px;
          backdrop-filter: blur(15px);
          transition: all 0.3s ease;
        }

        .tech-container:hover,
        .tools-container:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(199, 112, 240, 0.2);
          transform: translateY(-5px);
        }

        /* Animations */
        .animate-slide-left {
          animation: slideLeft 1s ease-out forwards;
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-right {
          animation: slideRight 1s ease-out 0.3s forwards;
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-up {
          animation: fadeUp 1s ease-out 0.5s forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes iconBounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
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
          .about-title {
            font-size: 2.5em;
          }

          .project-heading {
            font-size: 2.3em;
          }

          .title-decoration {
            flex-direction: column;
            gap: 15px;
          }

          .decoration-line {
            width: 40px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 80px 0 40px 0;
          }

          .about-hero {
            margin-bottom: 60px;
          }

          .about-title {
            font-size: 2em;
          }

          .project-heading {
            font-size: 2em;
          }

          .section-subtitle {
            font-size: 1.1em;
            padding: 0 20px;
          }

          .tech-container,
          .tools-container {
            padding: 25px 20px;
            margin: 0 10px;
          }

          .about-img {
            padding-left: 20px !important;
            margin-top: 30px;
          }

          .float-element {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .user-icon {
            font-size: 2.5em;
          }

          .section-icon {
            font-size: 2em;
          }

          .skills-section,
          .tools-section {
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

export default About;
