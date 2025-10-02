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
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center min-vh-100">
            <Col md={7} className="home-header">
              {/* Animated Main Greeting */}
              <div 
                className={`hero-greeting ${isLoaded ? 'animate-fade-slide-up' : ''}`}
                style={{ animationDelay: '0.2s' }}
              >
                <h1 style={{ paddingBottom: 15 }} className="heading">
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
                className={`${isLoaded ? 'animate-fade-slide-up' : ''}`}
                style={{ 
                  padding: "50px 50px 30px 50px", 
                  textAlign: "left",
                  animationDelay: '0.4s'
                }}
              >
                <Type />
              </div>

              {/* Animated Hero Description */}
              <div 
                className={`hero-description ${isLoaded ? 'animate-fade-slide-up' : ''}`}
                style={{ 
                  paddingLeft: 50,
                  paddingRight: 20,
                  textAlign: "left",
                  marginBottom: "40px",
                  animationDelay: '0.6s'
                }}
              >
                <p style={{ 
                  fontSize: "1.3em", 
                  color: "rgba(255, 255, 255, 0.9)",
                  lineHeight: "1.7",
                  maxWidth: "650px",
                  marginBottom: "20px",
                  fontWeight: "400"
                }}>
                  Building production-grade <span style={{ color: "#c770f0", fontWeight: "600" }}>AI systems</span> that transform complex problems into intelligent solutions.
                </p>
                
                <p style={{ 
                  fontSize: "1.1em", 
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: "1.6",
                  maxWidth: "600px",
                  marginBottom: "25px"
                }}>
                  Specialized in <span style={{ color: "#c770f0", fontWeight: "500" }}>Generative AI</span>, 
                  <span style={{ color: "#c770f0", fontWeight: "500" }}> Agentic AI</span>, and 
                  <span style={{ color: "#c770f0", fontWeight: "500" }}> Large Language Models</span>
                </p>

                {/* Animated AI Focus Badge */}
                <div 
                  className={`ai-badge ${isLoaded ? 'animate-glow-bounce' : ''}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "linear-gradient(135deg, rgba(199, 112, 240, 0.1) 0%, rgba(199, 112, 240, 0.05) 100%)",
                    border: "1px solid rgba(199, 112, 240, 0.3)",
                    borderRadius: "25px",
                    padding: "12px 24px",
                    marginTop: "10px",
                    animationDelay: '1.2s'
                  }}
                >
                  <span style={{
                    fontSize: "0.9em",
                    color: "#c770f0",
                    fontWeight: "600",
                    letterSpacing: "0.5px"
                  }}>
                    🤖 AI EVERYWHERE
                  </span>
                </div>
              </div>

              {/* Animated Stats Section */}
              <div 
                className={`hero-stats ${isLoaded ? 'animate-stagger-up' : ''}`}
                style={{
                  paddingLeft: 50,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "25px",
                  marginTop: "20px"
                }}
              >
                <div 
                  className={`stat-item ${isLoaded ? 'animate-scale-in' : ''}`}
                  style={{
                    textAlign: "center",
                    minWidth: "120px",
                    animationDelay: '0.8s'
                  }}
                >
                  <div style={{
                    fontSize: "1.5em",
                    color: "#c770f0",
                    fontWeight: "bold",
                    marginBottom: "5px"
                  }}>Python</div>
                  <div style={{
                    fontSize: "0.9em",
                    color: "rgba(255, 255, 255, 0.7)"
                  }}>Primary Language</div>
                </div>
                
                <div 
                  className={`stat-item ${isLoaded ? 'animate-scale-in' : ''}`}
                  style={{
                    textAlign: "center",
                    minWidth: "120px",
                    animationDelay: '1.0s'
                  }}
                >
                  <div style={{
                    fontSize: "1.5em",
                    color: "#c770f0",
                    fontWeight: "bold",
                    marginBottom: "5px"
                  }}>FastAPI</div>
                  <div style={{
                    fontSize: "0.9em",
                    color: "rgba(255, 255, 255, 0.7)"
                  }}>Microservices</div>
                </div>

                <div 
                  className={`stat-item ${isLoaded ? 'animate-scale-in' : ''}`}
                  style={{
                    textAlign: "center",
                    minWidth: "120px",
                    animationDelay: '1.2s'
                  }}
                >
                  <div style={{
                    fontSize: "1.5em",
                    color: "#c770f0",
                    fontWeight: "bold",
                    marginBottom: "5px"
                  }}>LLMs</div>
                  <div style={{
                    fontSize: "0.9em",
                    color: "rgba(255, 255, 255, 0.7)"
                  }}>Integration Expert</div>
                </div>
              </div>
            </Col>

            {/* Animated Visual Column */}
            <Col 
              md={5} 
              className={`homeLogo ${isLoaded ? 'animate-slide-from-right' : ''}`}
              style={{ 
                paddingBottom: 20, 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                animationDelay: '0.3s'
              }}
            >
              {/* Animated Floating Elements */}
              <div 
                className={`floating-element-1 ${isLoaded ? 'animate-float-delayed' : ''}`}
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "10%",
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, #c770f0, #9c27b0)",
                  borderRadius: "50%",
                  opacity: "0.1",
                  animationDelay: '1.5s'
                }}
              />
              
              <div 
                className={`floating-element-2 ${isLoaded ? 'animate-float-delayed' : ''}`}
                style={{
                  position: "absolute",
                  bottom: "15%",
                  left: "5%",
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, #00d4ff, #0099cc)",
                  borderRadius: "50%",
                  opacity: "0.1",
                  animationDelay: '1.8s'
                }}
              />

              {/* Main Animated Image */}
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
                    style={{ 
                      maxHeight: "500px",
                      filter: "drop-shadow(0px 15px 35px rgba(199, 112, 240, 0.4))",
                      borderRadius: "20px",
                      transition: "all 0.3s ease"
                    }}
                  />
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        /* Initial states - hidden before animation */
        .hero-greeting,
        .hero-description,
        .hero-stats,
        .homeLogo,
        .main-image-container {
          opacity: 0;
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

        /* Wave animation */
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

        /* Enhanced existing animations */
        .hero-image:hover {
          filter: drop-shadow(0px 20px 40px rgba(199, 112, 240, 0.6)) !important;
          transform: scale(1.05);
          transition: all 0.4s ease;
        }
        
        .stat-item:hover {
          transform: translateY(-5px) scale(1.05);
          transition: all 0.3s ease;
        }

        .stat-item {
          transition: all 0.3s ease;
        }

        /* Responsive animations */
        @media (max-width: 768px) {
          .hero-stats {
            justify-content: center !important;
            padding-left: 0 !important;
            margin-top: 30px !important;
          }
          
          .hero-description {
            padding-left: 20px !important;
            padding-right: 20px !important;
            text-align: center !important;
          }

          /* Reduce animation intensity on mobile */
          @keyframes fadeSlideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideFromRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Home;
