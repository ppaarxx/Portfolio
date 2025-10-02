import React from "react";

function Pre({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <div className="preloader-container">
        {/* AI Brain Animation */}
        <div className="ai-brain">
          <div className="brain-core">
            <div className="neural-network">
              {[...Array(6)].map((_, index) => (
                <div 
                  key={index} 
                  className={`neuron neuron-${index + 1}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="neuron-pulse"></div>
                </div>
              ))}
              
              {/* Neural Connections */}
              <svg className="connections" viewBox="0 0 200 200">
                <g className="connection-group">
                  <line x1="100" y1="50" x2="60" y2="90" className="connection" />
                  <line x1="100" y1="50" x2="140" y2="90" className="connection" />
                  <line x1="60" y1="90" x2="100" y2="130" className="connection" />
                  <line x1="140" y1="90" x2="100" y2="130" className="connection" />
                  <line x1="100" y1="130" x2="70" y2="160" className="connection" />
                  <line x1="100" y1="130" x2="130" y2="160" className="connection" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="loading-text">
          <span className="loading-letter">L</span>
          <span className="loading-letter">O</span>
          <span className="loading-letter">A</span>
          <span className="loading-letter">D</span>
          <span className="loading-letter">I</span>
          <span className="loading-letter">N</span>
          <span className="loading-letter">G</span>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>

        {/* AI Tagline */}
        <div className="ai-tagline">
          <span className="tagline-text">Initializing AI Systems...</span>
          <div className="typing-cursor"></div>
        </div>
      </div>

      <style jsx>{`
        #preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }

        #preloader-none {
          display: none;
        }

        .preloader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          position: relative;
        }

        /* AI Brain Animation */
        .ai-brain {
          position: relative;
          width: 200px;
          height: 200px;
        }

        .brain-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
        }

        .neural-network {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .neuron {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #c770f0;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(199, 112, 240, 0.6);
          animation: neuronPulse 2s ease-in-out infinite;
        }

        .neuron-1 { top: 20%; left: 45%; }
        .neuron-2 { top: 40%; left: 25%; }
        .neuron-3 { top: 40%; left: 65%; }
        .neuron-4 { top: 60%; left: 45%; }
        .neuron-5 { top: 75%; left: 30%; }
        .neuron-6 { top: 75%; left: 60%; }

        .neuron-pulse {
          position: absolute;
          top: -4px;
          left: -4px;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(199, 112, 240, 0.4);
          border-radius: 50%;
          animation: pulseRing 2s ease-in-out infinite;
        }

        .connections {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .connection {
          stroke: #c770f0;
          stroke-width: 2;
          stroke-opacity: 0.3;
          animation: connectionFlow 3s ease-in-out infinite;
        }

        /* Loading Text */
        .loading-text {
          display: flex;
          gap: 4px;
          font-family: 'SF Pro Display', -apple-system, sans-serif;
          font-size: 2em;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 2px;
        }

        .loading-letter {
          animation: letterBounce 1.4s ease-in-out infinite;
          background: linear-gradient(135deg, #ffffff, #c770f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .loading-letter:nth-child(1) { animation-delay: 0s; }
        .loading-letter:nth-child(2) { animation-delay: 0.1s; }
        .loading-letter:nth-child(3) { animation-delay: 0.2s; }
        .loading-letter:nth-child(4) { animation-delay: 0.3s; }
        .loading-letter:nth-child(5) { animation-delay: 0.4s; }
        .loading-letter:nth-child(6) { animation-delay: 0.5s; }
        .loading-letter:nth-child(7) { animation-delay: 0.6s; }

        /* Progress Bar */
        .progress-container {
          width: 300px;
          position: relative;
        }

        .progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #c770f0, #9c27b0, #00d4ff);
          border-radius: 2px;
          animation: progressLoad 3s ease-in-out infinite;
          position: relative;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: progressShine 2s ease-in-out infinite;
        }

        /* AI Tagline */
        .ai-tagline {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'SF Mono', Monaco, monospace;
          font-size: 1.1em;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 1px;
        }

        .tagline-text {
          animation: textGlow 2s ease-in-out infinite alternate;
        }

        .typing-cursor {
          width: 2px;
          height: 18px;
          background: #c770f0;
          animation: cursorBlink 1s ease-in-out infinite;
        }

        /* Animations */
        @keyframes neuronPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(199, 112, 240, 0.6);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 30px rgba(199, 112, 240, 0.9);
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes connectionFlow {
          0%, 100% {
            stroke-opacity: 0.1;
            stroke-dasharray: 0, 100;
          }
          50% {
            stroke-opacity: 0.6;
            stroke-dasharray: 20, 10;
          }
        }

        @keyframes letterBounce {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-20px);
          }
        }

        @keyframes progressLoad {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes progressShine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }

        @keyframes textGlow {
          0% {
            color: rgba(255, 255, 255, 0.7);
            text-shadow: none;
          }
          100% {
            color: rgba(199, 112, 240, 0.9);
            text-shadow: 0 0 10px rgba(199, 112, 240, 0.5);
          }
        }

        @keyframes cursorBlink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .ai-brain {
            width: 150px;
            height: 150px;
          }

          .loading-text {
            font-size: 1.5em;
            gap: 2px;
          }

          .progress-container {
            width: 250px;
          }

          .ai-tagline {
            font-size: 1em;
          }
        }

        @media (max-width: 480px) {
          .preloader-container {
            gap: 30px;
            padding: 0 20px;
          }

          .ai-brain {
            width: 120px;
            height: 120px;
          }

          .loading-text {
            font-size: 1.3em;
          }

          .progress-container {
            width: 200px;
          }
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Pre;
