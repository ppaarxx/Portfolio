import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaCode, FaRocket, FaStar } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

function ProjectCards(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className={`project-card-view ${isHovered ? 'hovered' : ''}`}>
        {/* Card Image with Overlay */}
        <div className="card-image-container">
          <Card.Img variant="top" src={props.imgPath} alt="project-preview" />
          <div className="image-overlay">
            <div className="overlay-content">
              <AiOutlineEye className="view-icon" />
              <span className="view-text">View Project</span>
            </div>
          </div>
          
          {/* Category Badge */}
          {props.category && (
            <div className="category-badge">
              <FaCode className="category-icon" />
              <span>{props.category}</span>
            </div>
          )}
          
          {/* Featured Badge */}
          {props.featured && (
            <div className="featured-badge">
              <FaStar className="star-icon" />
              <span>Featured</span>
            </div>
          )}
        </div>

        <Card.Body className="card-body-enhanced">
          {/* Project Title */}
          <Card.Title className="project-title">
            {props.title}
            <div className="title-underline"></div>
          </Card.Title>
          
          {/* Project Description */}
          <Card.Text className="project-description">
            {props.description}
          </Card.Text>

          {/* Technology Stack */}
          {props.technologies && (
            <div className="tech-stack">
              <div className="tech-label">
                <FaRocket className="tech-icon" />
                <span>Tech Stack:</span>
              </div>
              <div className="tech-tags">
                {props.technologies.slice(0, 4).map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
                {props.technologies.length > 4 && (
                  <span className="tech-tag more-tech">
                    +{props.technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="card-actions">
            <Button 
              className="primary-action-btn"
              href={props.ghLink} 
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="btn-icon" />
              <span>{props.isBlog ? "Read Blog" : "View Code"}</span>
              <div className="btn-shine"></div>
            </Button>

            {!props.isBlog && props.demoLink && (
              <Button
                className="secondary-action-btn"
                href={props.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CgWebsite className="btn-icon" />
                <span>Live Demo</span>
              </Button>
            )}
          </div>

          {/* Card Footer Stats */}
          <div className="card-footer-stats">
            <div className="stat-item">
              <BiGitRepoForked className="stat-icon" />
              <span>Open Source</span>
            </div>
            <div className="project-type">
              {props.isBlog ? "Blog Post" : "Project"}
            </div>
          </div>
        </Card.Body>

        {/* Animated Background Elements */}
        <div className="card-bg-elements">
          <div className="bg-orb bg-orb-1"></div>
          <div className="bg-orb bg-orb-2"></div>
        </div>
      </Card>

      {/* Enhanced CSS Styles */}
      <style jsx>{`
        .project-card-container {
          height: 100%;
          perspective: 1000px;
          margin-bottom: 30px;
        }

        .project-card-view {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(199, 112, 240, 0.15);
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(15px);
          overflow: hidden;
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          transform-style: preserve-3d;
        }

        .project-card-view:hover {
          transform: translateY(-10px) rotateX(5deg);
          border-color: rgba(199, 112, 240, 0.4);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(199, 112, 240, 0.2),
            0 0 30px rgba(199, 112, 240, 0.2);
        }

        .project-card-view.hovered .card-bg-elements {
          opacity: 1;
        }

        /* Card Image */
        .card-image-container {
          position: relative;
          overflow: hidden;
          border-radius: 20px 20px 0 0;
          height: 200px;
        }

        .card-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          filter: brightness(0.9);
        }

        .project-card-view:hover .card-image-container img {
          transform: scale(1.1);
          filter: brightness(1.1);
        }

        /* Image Overlay */
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .project-card-view:hover .image-overlay {
          opacity: 1;
        }

        .overlay-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: #ffffff;
          text-align: center;
        }

        .view-icon {
          font-size: 2em;
          color: #c770f0;
          animation: pulse 2s ease-in-out infinite;
        }

        .view-text {
          font-size: 1.1em;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Badges */
        .category-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: rgba(199, 112, 240, 0.9);
          color: #ffffff;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.8em;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
          backdrop-filter: blur(10px);
          z-index: 2;
        }

        .featured-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, #ffd700, #ff8c00);
          color: #000000;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.8em;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
          z-index: 2;
          animation: shimmer 2s ease-in-out infinite;
        }

        .category-icon,
        .star-icon {
          font-size: 1em;
        }

        /* Card Body */
        .card-body-enhanced {
          flex: 1;
          padding: 25px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: transparent;
        }

        .project-title {
          font-size: 1.3em;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0;
          position: relative;
          line-height: 1.3;
        }

        .title-underline {
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #c770f0, #9c27b0);
          margin-top: 8px;
          border-radius: 1px;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card-view:hover .title-underline {
          width: 60px;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95em;
          line-height: 1.6;
          margin-bottom: 0;
          text-align: justify;
          flex: 1;
        }

        /* Technology Stack */
        .tech-stack {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 15px 0;
        }

        .tech-label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #c770f0;
          font-size: 0.9em;
          font-weight: 600;
        }

        .tech-icon {
          font-size: 1.1em;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          background: rgba(199, 112, 240, 0.1);
          border: 1px solid rgba(199, 112, 240, 0.3);
          color: rgba(255, 255, 255, 0.9);
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 0.8em;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: rgba(199, 112, 240, 0.2);
          border-color: rgba(199, 112, 240, 0.5);
          color: #c770f0;
          transform: translateY(-1px);
        }

        .more-tech {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.6);
          font-style: italic;
        }

        /* Action Buttons */
        .card-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: auto;
        }

        .primary-action-btn {
          flex: 1;
          background: linear-gradient(135deg, #c770f0, #9c27b0);
          border: none;
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 25px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }

        .primary-action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(199, 112, 240, 0.4);
          background: linear-gradient(135deg, #d580ff, #b040d0);
          color: #ffffff;
        }

        .secondary-action-btn {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(199, 112, 240, 0.3);
          color: rgba(255, 255, 255, 0.9);
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          text-decoration: none;
        }

        .secondary-action-btn:hover {
          background: rgba(199, 112, 240, 0.1);
          border-color: rgba(199, 112, 240, 0.6);
          color: #c770f0;
          transform: translateY(-2px);
        }

        .btn-icon {
          font-size: 1.1em;
          transition: transform 0.3s ease;
        }

        .primary-action-btn:hover .btn-icon,
        .secondary-action-btn:hover .btn-icon {
          transform: scale(1.2);
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .primary-action-btn:hover .btn-shine {
          left: 100%;
        }

        /* Card Footer */
        .card-footer-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85em;
        }

        .stat-icon {
          color: #c770f0;
          font-size: 1em;
        }

        .project-type {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85em;
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
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .bg-orb {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: orbFloat 6s ease-in-out infinite;
        }

        .bg-orb-1 {
          top: 20%;
          right: 10%;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #c770f0, #9c27b0);
          animation-delay: 0s;
        }

        .bg-orb-2 {
          bottom: 30%;
          left: 15%;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          animation-delay: -2s;
        }

        /* Animations */
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes shimmer {
          0%, 100% {
            background: linear-gradient(135deg, #ffd700, #ff8c00);
          }
          50% {
            background: linear-gradient(135deg, #ffed4a, #f39c12);
          }
        }

        @keyframes orbFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .card-body-enhanced {
            padding: 20px;
            gap: 15px;
          }

          .project-title {
            font-size: 1.2em;
          }

          .project-description {
            font-size: 0.9em;
          }

          .card-actions {
            flex-direction: column;
          }

          .primary-action-btn,
          .secondary-action-btn {
            flex: 1;
            min-width: 100%;
          }

          .tech-tags {
            justify-content: center;
          }

          .card-footer-stats {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }

        @media (max-width: 576px) {
          .card-image-container {
            height: 180px;
          }

          .category-badge,
          .featured-badge {
            top: 10px;
            font-size: 0.75em;
            padding: 4px 8px;
          }

          .category-badge {
            left: 10px;
          }

          .featured-badge {
            right: 10px;
          }

          .bg-orb-1,
          .bg-orb-2 {
            display: none;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
          
          .project-card-view:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

export default ProjectCards;
