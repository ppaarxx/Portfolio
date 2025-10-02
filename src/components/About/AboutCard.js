import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaGraduationCap, FaMapMarkerAlt, FaQuoteLeft } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

function AboutCard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const activities = [
    { icon: "🎮", text: "Playing Games", delay: "0.1s" },
    { icon: "🎧", text: "Listening Podcasts", delay: "0.2s" },
    { icon: "✈️", text: "Travelling", delay: "0.3s" },
    { icon: "🏏", text: "Cricket", delay: "0.4s" },
    { icon: "⚽", text: "Football", delay: "0.5s" }
  ];

  return (
    <div className="about-card-container">
      <Card className="quote-card-view enhanced-card">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* Personal Introduction */}
            <div className={`intro-section ${isLoaded ? 'animate-fade-in' : ''}`}>
              <FaQuoteLeft className="quote-icon" />
              <p className="intro-text">
                Hi Everyone, I am <span className="purple name-highlight">Parth Mahendra Puri</span>
                <br />
                <span className="location-info">
                  <FaMapMarkerAlt className="location-icon" />
                  from <span className="purple">Mumbai, India.</span>
                </span>
              </p>
              
              <div className="education-badge">
                <div className="edu-content">
                  <span className="edu-title">AI Engineer</span>
                </div>
              </div>
            </div>

            {/* Activities Section */}
            <div className={`activities-section ${isLoaded ? 'animate-slide-up' : ''}`}>
              <div className="activities-header">
                <AiOutlineHeart className="heart-icon" />
                <span>Apart from coding, some other activities that I love to do!</span>
              </div>
              
              <ul className="activities-list">
                {activities.map((activity, index) => (
                  <li 
                    key={index}
                    className={`about-activity ${isLoaded ? 'animate-activity' : ''}`}
                    style={{ animationDelay: activity.delay }}
                  >
                    <div className="activity-content">
                      <ImPointRight className="point-icon" />
                      <span className="activity-emoji">{activity.icon}</span>
                      <span className="activity-text">{activity.text}</span>
                    </div>
                    <div className="activity-glow"></div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote Section */}
            <div className={`quote-section ${isLoaded ? 'animate-fade-in' : ''}`}>
              <div className="main-quote">
                <FaQuoteLeft className="quote-left" />
                <p className="quote-text">
                  "Fight today for a better tomorrow"
                </p>
                <FaQuoteLeft className="quote-right" />
              </div>
              <footer className="quote-author">
                <span>— Alfonso McFarlin</span>
              </footer>
            </div>
          </blockquote>
        </Card.Body>

        {/* Background Elements */}
        <div className="card-bg-elements">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
        </div>
      </Card>

      {/* Enhanced CSS Styles */}
      <style jsx>{`
        .about-card-container {
          position: relative;
        }

        /* Initial hidden states */
        .intro-section,
        .activities-section,
        .quote-section,
        .about-activity {
          opacity: 0;
        }

        .quote-card-view.enhanced-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(199, 112, 240, 0.2);
          border-radius: 25px;
          backdrop-filter: blur(20px);
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .quote-card-view.enhanced-card:hover {
          transform: translateY(-5px);
          border-color: rgba(199, 112, 240, 0.4);
          box-shadow: 
            0 20px 45px rgba(0, 0, 0, 0.4),
            0 0 30px rgba(199, 112, 240, 0.2);
        }

        .quote-card-view .card-body {
          padding: 40px;
          position: relative;
          z-index: 2;
        }

        /* Introduction Section */
        .intro-section {
          margin-bottom: 40px;
          position: relative;
        }

        .quote-icon {
          font-size: 2em;
          color: #c770f0;
          margin-bottom: 20px;
          opacity: 0.7;
        }

        .intro-text {
          font-size: 1.2em;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 25px;
          text-align: justify;
        }

        .name-highlight {
          position: relative;
          font-weight: 700;
          font-size: 1.1em;
        }

        .name-highlight::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #c770f0, #9c27b0);
          border-radius: 1px;
        }

        .location-info {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
        }

        .location-icon {
          color: #c770f0;
          font-size: 1.1em;
        }

        .education-badge {
          display: flex;
          align-items: center;
          gap: 15px;
          background: rgba(199, 112, 240, 0.1);
          border: 1px solid rgba(199, 112, 240, 0.3);
          border-radius: 15px;
          padding: 15px 20px;
          margin-top: 25px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .education-badge:hover {
          background: rgba(199, 112, 240, 0.15);
          border-color: rgba(199, 112, 240, 0.5);
          transform: translateY(-2px);
        }

        .edu-icon {
          font-size: 2em;
          color: #c770f0;
        }

        .edu-content {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .edu-title {
          font-weight: 600;
          color: #c770f0;
          font-size: 1.1em;
        }

        .edu-detail {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95em;
        }

        /* Activities Section */
        .activities-section {
          margin-bottom: 40px;
        }

        .activities-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 25px;
          font-size: 1.1em;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        .heart-icon {
          color: #e74c3c;
          font-size: 1.3em;
          animation: heartbeat 2s ease-in-out infinite;
        }

        .activities-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .about-activity {
          position: relative;
          padding: 12px 0;
          transition: all 0.3s ease;
        }

        .activity-content {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 1.05em;
          color: rgba(255, 255, 255, 0.85);
          position: relative;
          z-index: 1;
        }

        .point-icon {
          color: #c770f0;
          font-size: 1.2em;
          transition: transform 0.3s ease;
        }

        .activity-emoji {
          font-size: 1.3em;
          transition: transform 0.3s ease;
        }

        .activity-text {
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .activity-glow {
          position: absolute;
          top: 0;
          left: -10px;
          right: -10px;
          bottom: 0;
          background: rgba(199, 112, 240, 0.05);
          border-radius: 10px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .about-activity:hover .activity-glow {
          opacity: 1;
        }

        .about-activity:hover .point-icon {
          transform: scale(1.3);
        }

        .about-activity:hover .activity-emoji {
          transform: scale(1.2);
        }

        .about-activity:hover .activity-text {
          color: #c770f0;
        }

        /* Quote Section */
        .quote-section {
          text-align: center;
          padding: 30px 20px 10px 20px;
          background: rgba(199, 112, 240, 0.05);
          border-radius: 20px;
          border: 1px solid rgba(199, 112, 240, 0.1);
          position: relative;
          margin-top: 30px;
        }

        .main-quote {
          position: relative;
          margin-bottom: 20px;
        }

        .quote-left,
        .quote-right {
          position: absolute;
          font-size: 1.5em;
          color: rgba(199, 112, 240, 0.6);
        }

        .quote-left {
          top: -10px;
          left: -10px;
        }

        .quote-right {
          bottom: -10px;
          right: -10px;
          transform: rotate(180deg);
        }

        .quote-text {
          font-size: 1.3em;
          color: rgb(155, 126, 172);
          font-style: italic;
          font-weight: 600;
          margin: 0;
          padding: 0 30px;
          line-height: 1.5;
        }

        .quote-author {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95em;
          font-style: italic;
        }

        /* Background Elements */
        .card-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.05;
          animation: circleFloat 8s ease-in-out infinite;
        }

        .bg-circle-1 {
          top: 20%;
          right: 10%;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #c770f0, #9c27b0);
          animation-delay: 0s;
        }

        .bg-circle-2 {
          bottom: 30%;
          left: 15%;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          animation-delay: -4s;
        }

        /* Animations */
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-activity {
          animation: activitySlide 0.6s ease-out forwards;
        }

        @keyframes activitySlide {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes circleFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .quote-card-view .card-body {
            padding: 30px 25px;
          }

          .intro-text {
            font-size: 1.1em;
          }

          .education-badge {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }

          .activities-header {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }

          .activity-content {
            gap: 12px;
          }

          .quote-text {
            font-size: 1.1em;
            padding: 0 20px;
          }

          .bg-circle-1,
          .bg-circle-2 {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .quote-card-view .card-body {
            padding: 25px 20px;
          }

          .quote-section {
            padding: 25px 15px 10px 15px;
          }

          .activity-content {
            font-size: 1em;
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

export default AboutCard;
