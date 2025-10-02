import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { 
  FaPython
} from "react-icons/fa";
import { 
  SiTensorflow, 
  SiPytorch, 
  SiKeras, 
  SiOpencv, 
  SiScipy,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiAnaconda,
  SiGooglecloud,
  SiAmazonaws,
  // SiHuggingface,
  SiOpenai,
  SiGooglecolab,
  SiStreamlit
} from "react-icons/si";

function Techstack() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  // AI/ML focused tech stack
  const aiTechStackData = [
    { icon: <SiTensorflow size={45} />, name: "TensorFlow", color: "#FF6F00" },
    { icon: <SiPytorch size={45} />, name: "PyTorch", color: "#EE4C2C" },
    { icon: <SiKeras size={45} />, name: "Keras", color: "#D00000" },
    { icon: <SiScikitlearn size={45} />, name: "Scikit-learn", color: "#F7931E" },
    { icon: <FaPython size={45} />, name: "Python", color: "#3776AB" },
    { icon: <SiPandas size={45} />, name: "Pandas", color: "#150458" },
    { icon: <SiNumpy size={45} />, name: "NumPy", color: "#013243" },
    { icon: <SiScipy size={45} />, name: "SciPy", color: "#8CAAE6" },
    { icon: <SiOpencv size={45} />, name: "OpenCV", color: "#5C3EE8" },
    { icon: <SiJupyter size={45} />, name: "Jupyter", color: "#F37626" },
    { icon: <SiAnaconda size={45} />, name: "Anaconda", color: "#44A833" },
    { icon: <SiGooglecolab size={45} />, name: "Google Colab", color: "#F9AB00" },
    // { icon: <SiHuggingface size={45} />, name: "Hugging Face", color: "#FFD21E" },
    { icon: <SiOpenai size={45} />, name: "OpenAI", color: "#412991" },
    { icon: <SiStreamlit size={45} />, name: "Streamlit", color: "#FF4B4B" },
    { icon: <SiGooglecloud size={45} />, name: "Google Cloud", color: "#4285F4" },
    { icon: <SiAmazonaws size={45} />, name: "AWS", color: "#FF9900" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} className="tech-stack-row">
      {aiTechStackData.map((tech, index) => (
        <Col 
          key={index} 
          xs={4} 
          md={2} 
          className="tech-icons"
          style={{ marginBottom: "35px" }}
        >
          <div 
            className={`tech-item-fixed ${isLoaded ? 'animate-tech' : ''}`}
            style={{ 
              animationDelay: `${index * 0.1}s`,
              '--tech-color': tech.color
            }}
          >
            <div className="tech-icon-wrapper">
              {tech.icon}
            </div>
            <div className="tech-name-wrapper">
              {tech.name}
            </div>
          </div>
        </Col>
      ))}

      {/* Fixed CSS Styles */}
      <style jsx>{`
        .tech-stack-row {
          position: relative;
        }

        .tech-item-fixed {
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

        .tech-item-fixed:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--tech-color, #c770f0);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
        }

        .tech-icon-wrapper {
          color: var(--tech-color, #c770f0);
          transition: all 0.3s ease;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;
        }

        .tech-item-fixed:hover .tech-icon-wrapper {
          transform: scale(1.1);
          filter: drop-shadow(0px 5px 15px rgba(199, 112, 240, 0.4));
        }

        .tech-name-wrapper {
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

        .tech-item-fixed:hover .tech-name-wrapper {
          color: var(--tech-color, #c770f0);
        }

        /* Animation */
        .animate-tech {
          animation: techFadeIn 0.6s ease-out forwards;
        }

        @keyframes techFadeIn {
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
          .tech-item-fixed {
            height: 120px;
            padding: 15px 8px 12px 8px;
          }

          .tech-icon-wrapper {
            height: 50px;
          }

          .tech-icon-wrapper svg {
            width: 35px !important;
            height: 35px !important;
          }

          .tech-name-wrapper {
            font-size: 0.75em;
            min-height: 28px;
          }
        }

        @media (max-width: 576px) {
          .tech-item-fixed {
            height: 110px;
            padding: 12px 6px 10px 6px;
          }

          .tech-icon-wrapper {
            height: 45px;
          }

          .tech-icon-wrapper svg {
            width: 30px !important;
            height: 30px !important;
          }

          .tech-name-wrapper {
            font-size: 0.7em;
            min-height: 26px;
          }
        }
      `}</style>
    </Row>
  );
}

export default Techstack;
