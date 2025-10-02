import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiWindows,
  SiMacos,
  SiGit,
  SiDocker,
  SiPostman,
  SiSlack,
  SiNotion,
  SiFigma,
  SiLinux
} from "react-icons/si";

function Toolstack() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const toolsData = [
    { icon: <SiVisualstudiocode size={45} />, name: "VS Code", color: "#007ACC" },
    { icon: <SiMacos size={45} />, name: "macOS", color: "#000000" },
    { icon: <SiWindows size={45} />, name: "Windows", color: "#0078D4" },
    { icon: <SiLinux size={45} />, name: "Linux", color: "#FCC624" },
    { icon: <SiGit size={45} />, name: "Git", color: "#F05032" },
    { icon: <SiDocker size={45} />, name: "Docker", color: "#2496ED" },
    { icon: <SiPostman size={45} />, name: "Postman", color: "#FF6C37" },
    { icon: <SiSlack size={45} />, name: "Slack", color: "#4A154B" },
    { icon: <SiNotion size={45} />, name: "Notion", color: "#000000" },
    { icon: <SiFigma size={45} />, name: "Figma", color: "#F24E1E" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} className="tools-row">
      {toolsData.map((tool, index) => (
        <Col 
          key={index} 
          xs={4} 
          md={2} 
          className="tech-icons"
          style={{ marginBottom: "35px" }}
        >
          <div 
            className={`tool-item-fixed ${isLoaded ? 'animate-tool' : ''}`}
            style={{ 
              animationDelay: `${index * 0.1}s`,
              '--tool-color': tool.color
            }}
          >
            <div className="tool-icon-wrapper">
              {tool.icon}
            </div>
            <div className="tool-name-wrapper">
              {tool.name}
            </div>
          </div>
        </Col>
      ))}

      {/* Fixed CSS Styles */}
      <style jsx>{`
        .tools-row {
          position: relative;
        }

        .tool-item-fixed {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 18px 12px 15px 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(199, 112, 240, 0.15);
          border-radius: 15px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          backdrop-filter: blur(10px);
          height: 130px;
          opacity: 0;
          box-sizing: border-box;
        }

        .tool-item-fixed:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--tool-color, #c770f0);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
        }

        .tool-icon-wrapper {
          color: var(--tool-color, #c770f0);
          transition: all 0.3s ease;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;
        }

        .tool-item-fixed:hover .tool-icon-wrapper {
          transform: scale(1.1);
          filter: drop-shadow(0px 5px 15px rgba(199, 112, 240, 0.4));
        }

        .tool-name-wrapper {
          font-size: 0.8em;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
          line-height: 1.2;
          margin-top: 8px;
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          max-width: 100%;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 32px;
        }

        .tool-item-fixed:hover .tool-name-wrapper {
          color: var(--tool-color, #c770f0);
        }

        /* Animation */
        .animate-tool {
          animation: toolFadeIn 0.6s ease-out forwards;
        }

        @keyframes toolFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .tool-item-fixed {
            height: 120px;
            padding: 15px 8px 12px 8px;
          }

          .tool-icon-wrapper {
            height: 50px;
          }

          .tool-icon-wrapper svg {
            width: 35px !important;
            height: 35px !important;
          }

          .tool-name-wrapper {
            font-size: 0.75em;
            min-height: 28px;
          }
        }

        @media (max-width: 576px) {
          .tool-item-fixed {
            height: 110px;
            padding: 12px 6px 10px 6px;
          }

          .tool-icon-wrapper {
            height: 45px;
          }

          .tool-icon-wrapper svg {
            width: 30px !important;
            height: 30px !important;
          }

          .tool-name-wrapper {
            font-size: 0.7em;
            min-height: 26px;
          }
        }
      `}</style>
    </Row>
  );
}

export default Toolstack;
