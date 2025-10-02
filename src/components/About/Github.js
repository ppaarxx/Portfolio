import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";
import { FaGithub, FaCode, FaFire } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";

function Github() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [contributions, setContributions] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="github-section">
      <Row style={{ justifyContent: "center", paddingBottom: "50px", position: "relative" }}>
        {/* Enhanced Header */}
        <Col md={12} className="text-center">
          <div className={`github-header ${isLoaded ? 'animate-fade-down' : ''}`}>
            <div className="header-icons">
              <FaGithub className="github-icon main-icon" />
              <div className="floating-icons">
                <FaCode className="float-icon icon-1" />
                <FaFire className="float-icon icon-2" />
                <AiOutlineCalendar className="float-icon icon-3" />
              </div>
            </div>
            
            <h1 className="github-heading">
              Days I <strong className="purple">Code</strong>
            </h1>
            
            <p className="github-subtitle">
              My coding journey visualized through GitHub contributions
            </p>
            
            {/* Contribution Stats */}
            <div className="contribution-stats">
              <div className="stat-box">
                <span className="stat-number">365+</span>
                <span className="stat-label">Days Active</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">AI</span>
                <span className="stat-label">Focused</span>
              </div>
            </div>
          </div>
        </Col>

        {/* Enhanced GitHub Calendar */}
        <Col md={10} className="text-center">
          <div className={`calendar-container ${isLoaded ? 'animate-scale-up' : ''}`}>
            <div className="calendar-wrapper">
              <GitHubCalendar
                username="ppaarxx"
                blockSize={12}
                blockMargin={4}
                fontSize={14}
                theme={{
                  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
                colorScheme="dark"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                }}
              />
            </div>
            
            {/* AI Focus Indicator */}
            <div className="ai-focus-indicator">
              <span className="ai-badge">
                🤖 AI & Machine Learning Projects
              </span>
            </div>
          </div>
        </Col>

        {/* Background Elements */}
        <div className="github-bg-elements">
          <div className="bg-grid"></div>
          <div className="bg-orb orb-1"></div>
          <div className="bg-orb orb-2"></div>
        </div>
      </Row>

      {/* Enhanced CSS Styles */}
      <style jsx>{`
        .github-section {
          position: relative;
          padding: 60px 0;
        }

        /* Initial hidden states */
        .github-header,
        .calendar-container {
          opacity: 0;
        }

        /* Header Styling */
        .github-header {
          margin-bottom: 50px;
          position: relative;
        }

        .header-icons {
          position: relative;
          margin-bottom: 30px;
          display: inline-block;
        }

        .main-icon {
          font-size: 3.5em;
          color: #c770f0;
          animation: iconPulse 3s ease-in-out infinite;
        }

        .floating-icons {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
        }

        .float-icon {
          position: absolute;
          font-size: 1.2em;
          color: rgba(199, 112, 240, 0.6);
          animation: orbit 8s linear infinite;
        }

        .icon-1 {
          animation-delay: 0s;
        }

        .icon-2 {
          animation-delay: -2.7s;
        }

        .icon-3 {
          animation-delay: -5.3s;
        }

        .github-heading {
          font-size: 3em;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }

        .purple {
          background: linear-gradient(135deg, #c770f0, #9c27b0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .github-subtitle {
          font-size: 1.2em;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 30px;
        }

        /* Contribution Stats */
        .contribution-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 20px;
        }

        .stat-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px 25px;
          background: rgba(199, 112, 240, 0.1);
          border: 1px solid rgba(199, 112, 240, 0.3);
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }

        .stat-number {
          font-size: 1.5em;
          font-weight: 700;
          color: #c770f0;
        }

        .stat-label {
          font-size: 0.9em;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Calendar Container */
        .calendar-container {
          position: relative;
        }

        .calendar-wrapper {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(199, 112, 240, 0.2);
          border-radius: 20px;
          padding: 30px;
          backdrop-filter: blur(15px);
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .calendar-wrapper:hover {
          border-color: rgba(199, 112, 240, 0.4);
          transform: translateY(-5px);
        }

        .ai-focus-indicator {
          margin-top: 25px;
          text-align: center;
        }

        .ai-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, rgba(199, 112, 240, 0.1), rgba(199, 112, 240, 0.05));
          border: 1px solid rgba(199, 112, 240, 0.3);
          color: #c770f0;
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 0.95em;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        /* Background Elements */
        .github-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: -1;
        }

        .bg-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(199, 112, 240, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(199, 112, 240, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .bg-orb {
          position: absolute;
          border-radius: 50%;
          opacity: 0.05;
          animation: orbFloat 12s ease-in-out infinite;
        }

        .orb-1 {
          top: 20%;
          right: 10%;
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #c770f0, #9c27b0);
        }

        .orb-2 {
          bottom: 20%;
          left: 10%;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          animation-delay: -6s;
        }

        /* Animations */
        .animate-fade-down {
          animation: fadeDown 1s ease-out forwards;
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-scale-up {
          animation: scaleUp 1s ease-out 0.3s forwards;
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(60px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(60px) rotate(-360deg);
          }
        }

        @keyframes orbFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .github-heading {
            font-size: 2.2em;
          }

          .contribution-stats {
            flex-direction: column;
            gap: 20px;
            align-items: center;
          }

          .calendar-wrapper {
            padding: 20px 15px;
          }

          .main-icon {
            font-size: 2.5em;
          }

          .bg-orb {
            display: none;
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

export default Github;
