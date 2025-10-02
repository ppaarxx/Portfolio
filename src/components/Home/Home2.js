import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/HomeTwoLogo/Home 2 Logo.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Main About Section */}
        <Row className="align-items-center" style={{ minHeight: "80vh", position: "relative", paddingTop: "60px" }}>
          {/* Floating Background Elements */}
          <div className="floating-shapes">
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <div className="shape-3"></div>
          </div>

          <Col md={8} className="home-about-description">
            {/* Enhanced Section Header */}
            <div className="section-header" style={{
              marginBottom: "45px",
              position: "relative"
            }}>
              <h1 style={{ 
                fontSize: "2.8em",
                fontWeight: "700",
                background: "linear-gradient(135deg, #ffffff 0%, #c770f0 50%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "20px",
                letterSpacing: "-1px",
                textShadow: "0 0 30px rgba(199, 112, 240, 0.3)"
              }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              
              {/* Enhanced Decorative Line */}
              <div style={{
                width: "100px",
                height: "4px",
                background: "linear-gradient(90deg, #c770f0, #9c27b0, #c770f0)",
                borderRadius: "2px",
                marginBottom: "30px",
                position: "relative",
                boxShadow: "0 0 15px rgba(199, 112, 240, 0.5)"
              }}>
                <div style={{
                  position: "absolute",
                  top: "-2px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "8px",
                  height: "8px",
                  background: "#c770f0",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px rgba(199, 112, 240, 0.8)"
                }}></div>
              </div>
            </div>

            {/* Enhanced Content Cards */}
            <div className="content-wrapper" style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(199, 112, 240, 0.15)",
              borderRadius: "24px",
              padding: "45px 40px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            }}>
              {/* Enhanced Gradient Overlay */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, #c770f0, transparent)",
                borderRadius: "24px 24px 0 0"
              }}></div>

              {/* Content with better spacing */}
              <p className="home-about-body" style={{
                fontSize: "1.12em",
                lineHeight: "1.8",
                color: "rgba(255, 255, 255, 0.92)",
                marginBottom: "0"
              }}>
                Hello! I'm Parth — an AI engineer and software developer specializing in production-grade, AI-powered applications that solve real-world problems.
                <br />
                <br />
                I build at the intersection of cutting-edge AI research and practical software engineering, transforming complex machine learning concepts into reliable, scalable systems that deliver measurable impact.
                <br />
                <br />
                <b className="purple">Core Technologies:</b>
                <br />
                My primary toolkit centers around <b className="purple">Python</b>, leveraging frameworks like <b className="purple">TensorFlow</b>, <b className="purple">PyTorch</b>, <b className="purple">Keras</b>, and the <b className="purple">Hugging Face</b> ecosystem for model development and deployment.
                <br />
                <br />
                <b className="purple">LLM & Generative AI:</b>
                <br />
                I work extensively with both open-source LLMs and frontier models including <b className="purple">Google Gemini 2.5 Pro/Flash</b>, <b className="purple">OpenAI GPT-4.1/o4-mini</b>, and the <b className="purple">Anthropic Claude</b> family (3.5 Sonnet, 3.7 Sonnet, 4 Sonnet, 4 Opus).
                <br />
                <br />
                <b className="purple">Specializations:</b>
                <br />
                • <i><b className="purple">Generative AI & Agentic AI</b></i> — Building intelligent systems that reason, plan, and execute complex workflows
                <br />
                • <i><b className="purple">Retrieval-Augmented Generation (RAG)</b></i> — Creating knowledge-grounded AI applications with enhanced accuracy
                <br />
                • <i><b className="purple">Model Fine-tuning & Optimization</b></i> — Adapting models for domain-specific tasks and performance
                <br />
                • <i><b className="purple">AI Microservices Architecture</b></i> — Designing scalable, maintainable systems with <b className="purple">FastAPI</b>
                <br />
                <br />
                My philosophy is simple: <b className="purple">AI everywhere</b>. Every system I build leverages AI to enhance capabilities, improve user experience, and unlock new possibilities.
              </p>
            </div>

            {/* Enhanced Secondary Content */}
            <div className="secondary-content" style={{
              marginTop: "35px",
              background: "rgba(199, 112, 240, 0.08)",
              border: "1px solid rgba(199, 112, 240, 0.2)",
              borderRadius: "20px",
              padding: "30px 35px",
              position: "relative",
              boxShadow: "0 4px 20px rgba(199, 112, 240, 0.1)"
            }}>
              <p className="home-about-body" style={{
                fontSize: "1.08em",
                lineHeight: "1.75",
                color: "rgba(255, 255, 255, 0.88)",
                marginBottom: "0"
              }}>
                <b className="purple">What I'm Building:</b>
                <br />
                This portfolio showcases production systems, experimental projects, and AI research implementations. From agentic workflows to multimodal applications, each project demonstrates practical AI engineering at scale.
              </p>
            </div>
          </Col>

          {/* Enhanced Avatar Section */}
          <Col md={4} className="myAvtar" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}>
            {/* Enhanced Avatar Background Glow */}
            <div style={{
              position: "absolute",
              width: "320px",
              height: "320px",
              background: "radial-gradient(circle, rgba(199, 112, 240, 0.2) 0%, rgba(199, 112, 240, 0.1) 40%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(50px)",
              animation: "pulse 4s ease-in-out infinite"
            }}></div>

            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1000}
              scale={1.08}
              transitionSpeed={2200}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#c770f0"
            >
              <div style={{
                padding: "25px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(199, 112, 240, 0.25)",
                borderRadius: "50%",
                backdropFilter: "blur(15px)",
                boxShadow: "0 8px 32px rgba(199, 112, 240, 0.2)"
              }}>
                <img 
                  src={myImg} 
                  className="img-fluid avatar-enhanced" 
                  alt="avatar"
                  style={{
                    filter: "drop-shadow(0px 12px 35px rgba(199, 112, 240, 0.4))",
                    transition: "all 0.4s ease"
                  }}
                />
              </div>
            </Tilt>
          </Col>
        </Row>

        {/* Enhanced Social Section */}
        <Row style={{ marginTop: "100px", marginBottom: "60px" }}>
          <Col md={12} className="home-about-social">
            <div className="social-section" style={{
              textAlign: "center",
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(199, 112, 240, 0.15)",
              borderRadius: "30px",
              padding: "60px 50px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)"
            }}>
              {/* Enhanced Background Pattern */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                  radial-gradient(circle at 25% 25%, rgba(199, 112, 240, 0.12) 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, rgba(156, 39, 176, 0.12) 0%, transparent 50%),
                  radial-gradient(circle at 50% 50%, rgba(199, 112, 240, 0.05) 0%, transparent 70%)
                `,
                pointerEvents: "none"
              }}></div>

              <h1 style={{
                fontSize: "2.4em",
                fontWeight: "700",
                marginBottom: "25px",
                background: "linear-gradient(135deg, #ffffff 0%, #c770f0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 20px rgba(199, 112, 240, 0.3)"
              }}>
                CONNECT WITH ME
              </h1>
              
              <p style={{
                fontSize: "1.18em",
                marginBottom: "45px",
                color: "rgba(255, 255, 255, 0.85)"
              }}>
                Let's collaborate on <span className="purple">AI-driven innovation</span>
              </p>

              <ul className="home-about-social-links" style={{
                display: "flex",
                justifyContent: "center",
                gap: "35px",
                listStyle: "none",
                padding: 0,
                margin: 0
              }}>
                <li className="social-icons">
                  <a
                    href="https://github.com/ppaarxx"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons enhanced-social-icon"
                    aria-label="GitHub"
                    style={{
                      fontSize: "2.2em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "75px",
                      height: "75px",
                      background: "rgba(199, 112, 240, 0.12)",
                      border: "2px solid rgba(199, 112, 240, 0.3)",
                      borderRadius: "22px",
                      color: "#ffffff",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      backdropFilter: "blur(15px)"
                    }}
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/__parxx__"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons enhanced-social-icon"
                    aria-label="Twitter"
                    style={{
                      fontSize: "2.2em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "75px",
                      height: "75px",
                      background: "rgba(199, 112, 240, 0.12)",
                      border: "2px solid rgba(199, 112, 240, 0.3)",
                      borderRadius: "22px",
                      color: "#ffffff",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      backdropFilter: "blur(15px)"
                    }}
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/parth-puri-004157225/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons enhanced-social-icon"
                    aria-label="LinkedIn"
                    style={{
                      fontSize: "2.2em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "75px",
                      height: "75px",
                      background: "rgba(199, 112, 240, 0.12)",
                      border: "2px solid rgba(199, 112, 240, 0.3)",
                      borderRadius: "22px",
                      color: "#ffffff",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      backdropFilter: "blur(15px)"
                    }}
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Enhanced CSS Styles */}
      <style jsx>{`
        /* Floating Background Shapes */
        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }
        
        .shape-1 {
          position: absolute;
          top: 8%;
          right: 12%;
          width: 140px;
          height: 140px;
          background: linear-gradient(135deg, rgba(199, 112, 240, 0.12), rgba(156, 39, 176, 0.12));
          border-radius: 50%;
          animation: float-1 10s ease-in-out infinite;
        }
        
        .shape-2 {
          position: absolute;
          bottom: 15%;
          left: 8%;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.12), rgba(199, 112, 240, 0.12));
          border-radius: 30%;
          animation: float-2 8s ease-in-out infinite reverse;
        }
        
        .shape-3 {
          position: absolute;
          top: 55%;
          right: 3%;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(199, 112, 240, 0.18), transparent);
          border-radius: 20%;
          animation: float-3 12s ease-in-out infinite;
        }

        /* Enhanced Animations */
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-35px) rotate(180deg); opacity: 1; }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-25px) rotate(-180deg); opacity: 1; }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.5; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.9; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }

        /* Enhanced Social Icons */
        .enhanced-social-icon:hover {
          transform: translateY(-8px) scale(1.15);
          background: rgba(199, 112, 240, 0.25) !important;
          border-color: rgba(199, 112, 240, 0.7) !important;
          box-shadow: 0 15px 40px rgba(199, 112, 240, 0.4);
          color: #c770f0 !important;
        }

        /* Avatar Enhancement */
        .avatar-enhanced:hover {
          filter: drop-shadow(0px 20px 50px rgba(199, 112, 240, 0.7)) !important;
          transform: scale(1.08);
        }

        /* Content Cards Enhanced Hover Effect */
        .content-wrapper:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(199, 112, 240, 0.25);
          transform: translateY(-4px);
          transition: all 0.4s ease;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .secondary-content:hover {
          background: rgba(199, 112, 240, 0.12);
          border-color: rgba(199, 112, 240, 0.35);
          transform: translateY(-4px);
          transition: all 0.4s ease;
          box-shadow: 0 8px 30px rgba(199, 112, 240, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .shape-1, .shape-2, .shape-3 { display: none; }
          
          .content-wrapper, .secondary-content {
            margin: 20px 10px;
            padding: 30px 25px;
          }
          
          .social-section {
            margin: 20px 10px;
            padding: 50px 25px;
          }
          
          .home-about-social-links {
            gap: 25px !important;
          }
          
          .enhanced-social-icon {
            width: 65px !important;
            height: 65px !important;
            font-size: 1.9em !important;
          }
          
          .section-header h1 {
            fontSize: 2.2em !important;
          }
        }
      `}</style>
    </Container>
  );
}
export default Home2;
