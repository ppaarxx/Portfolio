import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineHeart,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger footer animations when in view
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    // Scroll to top button visibility
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="modern-footer">
      <Container fluid className="footer-container">
        <Container>
          {/* Main Footer Content */}
          <Row className="footer-main-row">
            <Col md={6} className={`footer-brand ${isLoaded ? 'animate-slide-up' : ''}`}>
              <div className="brand-section">
                <h3 className="footer-name">Parth Mahendra Puri</h3>
                <p className="footer-tagline">
                  Building the future with <span className="highlight">AI everywhere</span> 🤖
                </p>
              </div>
            </Col>

            <Col md={6} className={`footer-social ${isLoaded ? 'animate-slide-up' : ''}`}>
              <div className="social-section">
                <h4 className="connect-title">Let's Connect</h4>
                <ul className="social-icons-list">
                  <li className={`social-item ${isLoaded ? 'animate-bounce-in' : ''}`} style={{ animationDelay: '0.3s' }}>
                    <a
                      href="https://github.com/ppaarxx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link github"
                      aria-label="GitHub"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className={`social-item ${isLoaded ? 'animate-bounce-in' : ''}`} style={{ animationDelay: '0.4s' }}>
                    <a
                      href="https://twitter.com/__parxx__"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link twitter"
                      aria-label="Twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className={`social-item ${isLoaded ? 'animate-bounce-in' : ''}`} style={{ animationDelay: '0.5s' }}>
                    <a
                      href="https://www.linkedin.com/in/parth-puri-004157225/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link linkedin"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          {/* Copyright Section */}
          <Row className="footer-bottom">
            <Col className={`copyright-section ${isLoaded ? 'animate-fade-in' : ''}`}>
              <p className="copyright-text">
                <AiOutlineHeart className="heart-icon" />
                © {currentYear} Designed & Developed by Parth Mahendra Puri
              </p>
            </Col>
          </Row>
        </Container>

        {/* Animated Background Elements */}
        <div className="footer-bg-animation">
          <div className={`floating-orb orb-1 ${isLoaded ? 'animate-float' : ''}`}></div>
          <div className={`floating-orb orb-2 ${isLoaded ? 'animate-float' : ''}`}></div>
          <div className={`floating-orb orb-3 ${isLoaded ? 'animate-float' : ''}`}></div>
        </div>

        {/* Scroll to Top Button */}
        {isVisible && (
          <button
            className={`scroll-to-top ${isVisible ? 'animate-scale-in' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <BiUpArrowAlt />
          </button>
        )}
      </Container>

      {/* Enhanced CSS with Animations */}
      <style jsx>{`
        /* Initial hidden states */
        .footer-brand,
        .footer-social,
        .copyright-section,
        .social-item {
          opacity: 0;
        }

        /* Modern Footer Base */
        .modern-footer {
          position: relative;
          background: linear-gradient(135deg, 
            rgba(10, 10, 10, 0.95) 0%, 
            rgba(25, 25, 25, 0.98) 50%, 
            rgba(10, 10, 10, 0.95) 100%);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(199, 112, 240, 0.2);
          margin-top: 100px;
          overflow: hidden;
        }

        .footer-container {
          position: relative;
          z-index: 2;
          padding: 80px 0 40px 0;
        }

        .footer-main-row {
          align-items: center;
          margin-bottom: 60px;
        }

        /* Brand Section */
        .brand-section {
          text-align: left;
        }

        .footer-name {
          font-size: 2.2em;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #ffffff 0%, #c770f0 50%, #ffffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .footer-name::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #c770f0, #9c27b0, transparent);
          border-radius: 2px;
        }

        .footer-tagline {
          font-size: 1.2em;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
          line-height: 1.6;
        }

        .highlight {
          color: #c770f0;
          font-weight: 600;
        }

        /* Social Section */
        .social-section {
          text-align: right;
        }

        .connect-title {
          font-size: 1.4em;
          font-weight: 600;
          color: #c770f0;
          margin-bottom: 30px;
          position: relative;
        }

        .connect-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          right: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c770f0);
          border-radius: 2px;
        }

        .social-icons-list {
          display: flex;
          justify-content: flex-end;
          gap: 25px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 20px;
          font-size: 1.8em;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(199, 112, 240, 0.2);
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .social-link:hover::before {
          left: 100%;
        }

        .social-link:hover {
          transform: translateY(-8px) scale(1.1);
          text-decoration: none;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        .social-link.github:hover {
          background: rgba(51, 51, 51, 0.9);
          border-color: #333;
          color: #ffffff;
        }

        .social-link.twitter:hover {
          background: rgba(29, 161, 242, 0.9);
          border-color: #1da1f2;
          color: #ffffff;
        }

        .social-link.linkedin:hover {
          background: rgba(0, 119, 181, 0.9);
          border-color: #0077b5;
          color: #ffffff;
        }

        /* Copyright Section */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 40px;
        }

        .copyright-section {
          text-align: center;
        }

        .copyright-text {
          font-size: 1em;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .heart-icon {
          color: #e74c3c;
          font-size: 1.2em;
          animation: heartPulse 2.5s ease-in-out infinite;
        }

        /* Scroll to Top Button */
        .scroll-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 55px;
          height: 55px;
          background: linear-gradient(135deg, #c770f0, #9c27b0);
          border: none;
          border-radius: 50%;
          color: #ffffff;
          font-size: 1.8em;
          cursor: pointer;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(199, 112, 240, 0.4);
        }

        .scroll-to-top:hover {
          transform: translateY(-5px) rotate(360deg);
          box-shadow: 0 12px 35px rgba(199, 112, 240, 0.6);
        }

        /* Floating Background Orbs */
        .footer-bg-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
        }

        .orb-1 {
          top: 15%;
          right: 20%;
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #c770f0, #9c27b0);
        }

        .orb-2 {
          bottom: 30%;
          left: 15%;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #00d4ff, #0099cc);
        }

        .orb-3 {
          top: 60%;
          left: 60%;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #c770f0, transparent);
        }

        /* Animations */
        .animate-slide-up {
          animation: slideUpFade 1s ease-out forwards;
        }

        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-bounce-in {
          animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        @keyframes bounceIn {
          from {
            opacity: 0;
            transform: scale(0.3) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-float {
          animation: floatGentle 8s ease-in-out infinite;
        }

        @keyframes floatGentle {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-scale-in {
          animation: scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes heartPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .footer-container {
            padding: 60px 0 30px 0;
          }

          .footer-main-row {
            margin-bottom: 40px;
          }

          .brand-section,
          .social-section {
            text-align: center;
            margin-bottom: 30px;
          }

          .footer-name {
            font-size: 1.8em;
          }

          .footer-name::after,
          .connect-title::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .social-icons-list {
            justify-content: center;
            gap: 20px;
          }

          .social-link {
            width: 55px;
            height: 55px;
            font-size: 1.6em;
          }

          .scroll-to-top {
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            font-size: 1.6em;
          }

          .floating-orb {
            display: none;
          }
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
