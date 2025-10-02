import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Home1.svg";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home-wrapper">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          {/* FIXED: Removed min-vh-100 and updated classes */}
          <div className="home-container">
            <Row className="align-items-center home-row">
              <Col md={7} className="home-header">
                {/* Animated Main Greeting */}
                <div 
                  className={`hero-greeting ${isLoaded ? 'animate-fade-slide-up' : ''}`}
                  style={{ animationDelay: '0.2s' }}
                >
                  <h1 className="heading">
                    Hi There!{" "}
                    <span 
                      className={`wave ${isLoaded ? 'animate-wave' : ''}`}
                      role="img" 
                      aria-labelledby="wave"
                      style={{ animationDelay: '1s' }}
                    >
                      👋🏻
                    </span>
                  </h1>

                  <h1 className="heading-name">
                    I'M
                    <strong className="main-name"> PARTH MAHENDRA PURI</strong>
                  </h1>
                </div>

                {/* Animated Typewriter */}
                <div 
                  className={`type-container ${isLoaded ? 'animate-fade-slide-up' : ''}`}
                  style={{ animationDelay: '0.4s' }}
                >
                  <Type />
                </div>

                {/* Animated Hero Description */}
                <div 
                  className={`hero-description ${isLoaded ? 'animate-fade-slide-up' : ''}`}
                  style={{ animationDelay: '0.6s' }}
                >
                  <p className="hero-main-text">
                    Building production-grade <span className="highlight">AI systems</span> that transform complex problems into intelligent solutions.
                  </p>
                  
                  <p className="hero-sub-text">
                    Specialized in <span className="highlight">Generative AI</span>, 
                    <span className="highlight"> Agentic AI</span>, and 
                    <span className="highlight"> Large Language Models</span>
                  </p>

                  {/* Animated AI Focus Badge */}
                  <div 
                    className={`ai-badge ${isLoaded ? 'animate-glow-bounce' : ''}`}
                    style={{ animationDelay: '1.2s' }}
                  >
                    <span className="badge-text">
                      🤖 AI EVERYWHERE
                    </span>
                  </div>
                </div>

                {/* Animated Stats Section */}
                <div 
                  className={`hero-stats ${isLoaded ? 'animate-stagger-up' : ''}`}
                >
                  <div 
                    className={`stat-item ${isLoaded ? 'animate-scale-in' : ''}`}
                    style={{ animationDelay: '0.8s' }}
                  >
                    <div className="stat-value">Python</div>
                    <div className="stat-label">Primary Language</div>
                  </div>
                  
                  <div 
                    className={`stat-item ${isLoaded ? 'animate-scale-in' : ''}`}
                    style={{ animationDelay: '1.0s' }}
                  >
                    <div className="stat-value">FastAPI</div>
                    <div className="stat-label">Microservices</div>
                  </div>

                  <div 
                    className={`stat-item ${isLoaded ? 'animate-scale-in' : ''}`}
                    style={{ animationDelay: '1.2s' }}
                  >
                    <div className="stat-value">LLMs</div>
                    <div className="stat-label">Integration Expert</div>
                  </div>
                </div>
              </Col>

              {/* Fixed Image Column with Proper Alignment */}
              <Col 
                md={5} 
                className={`home-logo-col ${isLoaded ? 'animate-slide-from-right' : ''}`}
                style={{ animationDelay: '0.3s' }}
              >
                {/* Animated Floating Elements */}
                <div 
                  className={`floating-element-1 ${isLoaded ? 'animate-float-delayed' : ''}`}
                  style={{ animationDelay: '1.5s' }}
                />
                
                <div 
                  className={`floating-element-2 ${isLoaded ? 'animate-float-delayed' : ''}`}
                  style={{ animationDelay: '1.8s' }}
                />

                {/* Main Animated Image Container */}
                <div className={`main-image-container ${isLoaded ? 'animate-zoom-in' : ''}`}>
                  <Tilt 
                    tiltMaxAngleX={12}
                    tiltMaxAngleY={12}
                    perspective={1000}
                    scale={1.08}
                    transitionSpeed={2500}
                    gyroscope={true}
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                    glareColor="#c770f0"
                    glarePosition="all"
                  >
                    <img
                      src={homeLogo}
                      alt="AI Engineering & Machine Learning"
                      className="img-fluid hero-image"
                    />
                  </Tilt>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      <Home2 />

      {/* Fixed CSS with Proper Alignment */}
      <style jsx>
      {`
      /* Base Section */
      .home-wrapper {
        position: relative;
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
      }

      .home-section {
        position: relative;
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
        padding: 0 !important;
      }

      .home-content {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 120px 15px 60px 15px;
      }

      /* FIXED: New container for proper alignment */
      .home-container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 0;
      }

      /* FIXED: Row alignment */
      .home-row {
        width: 100%;
        margin: 0;
        display: flex !important;
        align-items: center !important;
        flex-wrap: nowrap !important;
      }

      /* FIXED: Column alignment */
      .home-header {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .home-logo-col {
        padding: 20px;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        position: relative;
      }

      /* Initial states - hidden before animation */
      .hero-greeting,
      .hero-description,
      .hero-stats,
      .home-logo-col,
      .main-image-container,
      .type-container {
        opacity: 0;
      }

      /* Typography with Zoom-Responsive Sizing */
      .heading {
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 15px;
        line-height: 1.2;
      }

      .heading-name {
        font-size: clamp(1.8rem, 4.5vw, 3rem);
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 30px;
        line-height: 1.2;
      }

      .main-name {
        background: linear-gradient(135deg, #c770f0, #9c27b0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      /* FIXED: Type Container with proper alignment */
      .type-container {
        padding: 15px 0;
        margin: 20px 0;
        text-align: left;
        width: 100%;
        display: flex;
        align-items: center;
        min-height: 60px;
      }

      /* ENHANCED: Typewriter wrapper styling */
      .typewriter-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        min-height: 60px;
      }

      /* ENHANCED: Direct typewriter-effect styling */
      .typewriter-wrapper .Typewriter {
        font-size: clamp(1.3rem, 3vw, 2rem) !important;
        color: #c770f0 !important;
        font-weight: 600 !important;
        line-height: 1.4 !important;
      }

      .typewriter-wrapper .Typewriter__wrapper {
        font-size: inherit !important;
        color: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }

      .typewriter-wrapper .Typewriter__cursor {
        font-size: inherit !important;
        color: #c770f0 !important;
        font-weight: inherit !important;
        animation: typewriter-blink 1s infinite;
      }

      @keyframes typewriter-blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }

      /* FIXED: Typewriter text styling */
      .type-container > div {
        font-size: clamp(1.3rem, 3vw, 2rem) !important;
        color: #c770f0 !important;
        font-weight: 600 !important;
        line-height: 1.4 !important;
        width: 100%;
      }

      /* Hero Description with Responsive Text */
      .hero-description {
        padding: 0 clamp(20px, 5vw, 50px);
        text-align: left;
        margin-bottom: clamp(30px, 5vw, 40px);
        max-width: 100%;
      }

      .hero-main-text {
        font-size: clamp(1.1rem, 2.5vw, 1.3rem);
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.7;
        max-width: clamp(500px, 80vw, 650px);
        margin-bottom: 20px;
        font-weight: 400;
      }

      .hero-sub-text {
        font-size: clamp(1rem, 2vw, 1.1rem);
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
        max-width: clamp(450px, 75vw, 600px);
        margin-bottom: 25px;
      }

      .highlight {
        color: #c770f0;
        font-weight: 600;
      }

      /* AI Badge with Zoom-Responsive Size */
      .ai-badge {
        display: inline-flex;
        align-items: center;
        background: linear-gradient(135deg, rgba(199, 112, 240, 0.1) 0%, rgba(199, 112, 240, 0.05) 100%);
        border: 1px solid rgba(199, 112, 240, 0.3);
        border-radius: 25px;
        padding: clamp(10px, 2vw, 12px) clamp(18px, 3vw, 24px);
        margin-top: 10px;
      }

      .badge-text {
        font-size: clamp(0.8rem, 1.5vw, 0.9rem);
        color: #c770f0;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      /* Stats Section with Better Layout */
      .hero-stats {
        padding-left: clamp(20px, 5vw, 50px);
        display: flex;
        flex-wrap: wrap;
        gap: clamp(15px, 3vw, 25px);
        margin-top: 20px;
        justify-content: flex-start;
      }

      .stat-item {
        text-align: center;
        min-width: clamp(100px, 15vw, 120px);
        flex: 0 1 auto;
        transition: all 0.3s ease;
      }

      .stat-item:hover {
        transform: translateY(-5px) scale(1.05);
      }

      .stat-value {
        font-size: clamp(1.2rem, 2.5vw, 1.5rem);
        color: #c770f0;
        font-weight: bold;
        margin-bottom: 5px;
      }

      .stat-label {
        font-size: clamp(0.8rem, 1.5vw, 0.9rem);
        color: rgba(255, 255, 255, 0.7);
      }

      /* FIXED: Image Container with Proper Constraints */
      .main-image-container {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 2;
      }

      .hero-image {
        max-height: 400px;
        max-width: 100%;
        width: 100%;
        height: auto;
        object-fit: contain;
        filter: drop-shadow(0px 15px 35px rgba(199, 112, 240, 0.4));
        border-radius: 20px;
        transition: all 0.3s ease;
      }

      .hero-image:hover {
        filter: drop-shadow(0px 20px 40px rgba(199, 112, 240, 0.6));
        transform: scale(1.05);
      }

      /* Floating Elements with Constraints */
      .floating-element-1 {
        position: absolute;
        top: 10%;
        right: 10%;
        width: clamp(40px, 8vw, 60px);
        height: clamp(40px, 8vw, 60px);
        background: linear-gradient(135deg, #c770f0, #9c27b0);
        border-radius: 50%;
        opacity: 0.1;
        z-index: 1;
      }

      .floating-element-2 {
        position: absolute;
        bottom: 15%;
        left: 5%;
        width: clamp(30px, 6vw, 40px);
        height: clamp(30px, 6vw, 40px);
        background: linear-gradient(135deg, #00d4ff, #0099cc);
        border-radius: 50%;
        opacity: 0.1;
        z-index: 1;
      }

      /* Wave Animation */
      .wave {
        display: inline-block;
        font-size: 1em;
      }

      .animate-wave {
        animation: wave 2.5s ease-in-out infinite;
      }

      @keyframes wave {
        0%, 100% { transform: rotate(0deg); }
        10%, 30% { transform: rotate(14deg); }
        20% { transform: rotate(-8deg); }
        40% { transform: rotate(14deg); }
        50% { transform: rotate(10deg); }
        60% { transform: rotate(0deg); }
      }

      /* Fade and slide up animation */
      .animate-fade-slide-up {
        animation: fadeSlideUp 0.8s ease-out forwards;
      }

      @keyframes fadeSlideUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Slide from right animation */
      .animate-slide-from-right {
        animation: slideFromRight 1s ease-out forwards;
      }

      @keyframes slideFromRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      /* Zoom in animation for image */
      .animate-zoom-in {
        animation: zoomIn 1.2s ease-out forwards;
      }

      @keyframes zoomIn {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      /* Scale in animation for stats */
      .animate-scale-in {
        animation: scaleIn 0.6s ease-out forwards;
      }

      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.5);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      /* Glow and bounce for AI badge */
      .animate-glow-bounce {
        animation: glowBounce 1s ease-out forwards;
      }

      @keyframes glowBounce {
        0% {
          opacity: 0;
          transform: scale(0.8);
          box-shadow: none;
        }
        50% {
          opacity: 0.8;
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(199, 112, 240, 0.3);
        }
        100% {
          opacity: 1;
          transform: scale(1);
          box-shadow: 0 0 15px rgba(199, 112, 240, 0.2);
        }
      }

      /* Floating elements with delayed start */
      .animate-float-delayed {
        animation: floatDelayed 6s ease-in-out infinite;
      }

      @keyframes floatDelayed {
        0%, 100% { 
          opacity: 0.1;
          transform: translateY(0px) rotate(0deg); 
        }
        50% { 
          opacity: 0.2;
          transform: translateY(-20px) rotate(180deg); 
        }
      }

      /* Staggered animation for stats container */
      .animate-stagger-up {
        animation: staggerUp 0.8s ease-out forwards;
      }

      @keyframes staggerUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* FIXED: Desktop Layout */
      @media (min-width: 768px) {
        .home-row {
          flex-direction: row !important;
        }
        
        .home-header {
          flex: 0 0 58.333333% !important;
          max-width: 58.333333% !important;
        }
        
        .home-logo-col {
          flex: 0 0 41.666667% !important;
          max-width: 41.666667% !important;
        }

        .type-container {
          text-align: left;
          padding: 15px 0;
        }

        .typewriter-wrapper {
          justify-content: flex-start;
        }
      }

      /* Tablet Responsive */
      @media (max-width: 767.98px) {
        .home-container {
          padding: 20px 0;
          min-height: auto;
        }

        .home-row {
          flex-direction: column !important;
          text-align: center;
        }

        .home-header {
          flex: 1 1 100% !important;
          max-width: 100% !important;
        }

        .home-logo-col {
          flex: 1 1 100% !important;
          max-width: 100% !important;
          order: -1;
          margin-bottom: 30px;
        }

        .hero-description,
        .type-container,
        .hero-stats {
          padding-left: 20px;
          padding-right: 20px;
          text-align: center;
        }

        .hero-stats {
          justify-content: center;
          margin-top: 30px;
        }

        /* FIXED: Mobile typewriter alignment */
        .type-container {
          text-align: center;
          justify-content: center;
          padding: 15px 20px;
        }

        .typewriter-wrapper {
          justify-content: center;
          text-align: center;
        }
      }

      /* Mobile Responsive */
      @media (max-width: 576px) {
        .home-content {
          padding: 100px 10px 40px 10px;
        }

        .hero-description {
          text-align: center;
          padding: 0 15px;
        }

        .hero-stats {
          flex-direction: column;
          align-items: center;
          gap: 15px;
          padding-left: 15px;
          padding-right: 15px;
        }

        .stat-item {
          width: 100%;
          max-width: 200px;
        }

        .floating-element-1,
        .floating-element-2 {
          display: none;
        }

        /* FIXED: Mobile typewriter styling */
        .type-container {
          padding: 10px 15px;
          text-align: center;
          justify-content: center;
        }

        .type-container > div {
          font-size: clamp(1.1rem, 4vw, 1.5rem) !important;
        }

        .typewriter-wrapper .Typewriter {
          font-size: clamp(1rem, 5vw, 1.3rem) !important;
        }
      }

      /* High DPI Screens */
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .hero-image {
          image-rendering: -webkit-optimize-contrast;
        }
      }

      /* Reduced motion for accessibility */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }

      /* Force hardware acceleration for smooth animations */
      .hero-image,
      .stat-item,
      .ai-badge {
        backface-visibility: hidden;
        transform: translateZ(0);
      }
      `}</style>

    </section>
  );
}

export default Home;
