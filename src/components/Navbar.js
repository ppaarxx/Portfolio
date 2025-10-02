import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/Logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger navbar animation on load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  // Add scroll listener
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleNavClick = () => {
    updateExpanded(false);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`modern-navbar ${navColour ? "navbar-scrolled" : ""} ${
        isLoaded ? "animate-slide-down" : ""
      }`}
    >
      <Container>
        {/* Animated Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className={`brand-container ${isLoaded ? "animate-logo" : ""}`}
        >
          <div className="logo-wrapper">
            <img src={logo} className="img-fluid navbar-logo" alt="Parth Puri - AI Engineer" />
            <div className="logo-glow"></div>
          </div>
        </Navbar.Brand>

        {/* Custom Animated Toggle */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-toggler"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <div className={`hamburger ${expand ? "active" : ""}`}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`ms-auto nav-links ${isLoaded ? "animate-nav-items" : ""}`}>
            <Nav.Item className="nav-item-animated">
              <Nav.Link
                as={Link}
                to="/"
                onClick={handleNavClick}
                className="nav-link-modern"
                style={{ animationDelay: '0.1s' }}
              >
                <AiOutlineHome className="nav-icon" />
                <span className="nav-text">Home</span>
                <div className="nav-underline"></div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item-animated">
              <Nav.Link
                as={Link}
                to="/about"
                onClick={handleNavClick}
                className="nav-link-modern"
                style={{ animationDelay: '0.2s' }}
              >
                <AiOutlineUser className="nav-icon" />
                <span className="nav-text">About</span>
                <div className="nav-underline"></div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item-animated">
              <Nav.Link
                as={Link}
                to="/project"
                onClick={handleNavClick}
                className="nav-link-modern"
                style={{ animationDelay: '0.3s' }}
              >
                <AiOutlineFundProjectionScreen className="nav-icon" />
                <span className="nav-text">Projects</span>
                <div className="nav-underline"></div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item-animated">
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={handleNavClick}
                className="nav-link-modern"
                style={{ animationDelay: '0.4s' }}
              >
                <CgFileDocument className="nav-icon" />
                <span className="nav-text">Resume</span>
                <div className="nav-underline"></div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={`fork-btn nav-item-animated ${isLoaded ? "animate-button" : ""}`}>
              <Button
                href="https://github.com/ppaarxx"
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
                style={{ animationDelay: '0.5s' }}
              >
                <CgGitFork className="fork-icon" />
                <AiFillStar className="star-icon" />
                <span className="btn-text">GitHub</span>
                <div className="btn-shine"></div>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Enhanced CSS Styles with Animations */}
      <style jsx>{`
        /* Base Navbar Styles */
        .modern-navbar {
          background: rgba(10, 10, 10, 0.95) !important;
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(199, 112, 240, 0.1);
          padding: 15px 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(-100%);
        }

        .navbar-scrolled {
          background: rgba(5, 5, 5, 0.98) !important;
          padding: 10px 0;
          border-bottom: 1px solid rgba(199, 112, 240, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        /* Navbar Animation */
        .animate-slide-down {
          animation: slideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Logo Animations */
        .brand-container {
          position: relative;
          text-decoration: none !important;
        }

        .logo-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          opacity: 0;
        }

        .animate-logo {
          animation: logoFadeIn 1s ease-out 0.3s forwards;
        }

        @keyframes logoFadeIn {
          from {
            opacity: 0;
            transform: scale(0.8) rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .navbar-logo {
          height: 45px;
          width: auto;
          transition: all 0.3s ease;
          filter: brightness(1.1);
        }

        .navbar-scrolled .navbar-logo {
          height: 40px;
        }

        .logo-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, rgba(199, 112, 240, 0.3), transparent);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .brand-container:hover .logo-glow {
          opacity: 1;
        }

        .brand-container:hover .navbar-logo {
          transform: scale(1.05);
          filter: brightness(1.3);
        }

        /* Custom Hamburger Toggle */
        .custom-toggler {
          border: none;
          padding: 8px;
          background: none;
          outline: none;
        }

        .custom-toggler:focus {
          box-shadow: none;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          width: 25px;
          height: 20px;
          justify-content: space-between;
        }

        .line {
          width: 100%;
          height: 3px;
          background: #c770f0;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .hamburger.active .line-1 {
          transform: rotate(45deg) translateY(8.5px);
        }

        .hamburger.active .line-2 {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger.active .line-3 {
          transform: rotate(-45deg) translateY(-8.5px);
        }

        /* Navigation Items */
        .nav-links {
          align-items: center;
          gap: 10px;
        }

        .nav-item-animated {
          opacity: 0;
        }

        .animate-nav-items .nav-item-animated {
          animation: navItemSlide 0.6s ease-out forwards;
        }

        @keyframes navItemSlide {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-link-modern {
          display: flex !important;
          align-items: center;
          gap: 8px;
          padding: 12px 20px !important;
          border-radius: 25px;
          color: rgba(255, 255, 255, 0.8) !important;
          text-decoration: none !important;
          font-weight: 500;
          font-size: 0.95em;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(199, 112, 240, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .nav-link-modern:hover::before {
          left: 100%;
        }

        .nav-link-modern:hover {
          color: #c770f0 !important;
          background: rgba(199, 112, 240, 0.1);
          transform: translateY(-2px);
        }

        .nav-icon {
          font-size: 1.2em;
          transition: transform 0.3s ease;
        }

        .nav-link-modern:hover .nav-icon {
          transform: scale(1.2);
        }

        .nav-text {
          transition: all 0.3s ease;
        }

        .nav-underline {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #c770f0, #9c27b0);
          border-radius: 1px;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link-modern:hover .nav-underline,
        .nav-link-modern.active .nav-underline {
          width: 80%;
        }

        /* GitHub Button */
        .animate-button {
          animation: buttonBounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        @keyframes buttonBounce {
          from {
            opacity: 0;
            transform: scale(0.3) rotate(10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .github-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: linear-gradient(135deg, #c770f0, #9c27b0);
          border: none;
          border-radius: 25px;
          color: #ffffff;
          font-weight: 600;
          font-size: 0.9em;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(199, 112, 240, 0.3);
        }

        .github-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(199, 112, 240, 0.4);
          background: linear-gradient(135deg, #d580ff, #b040d0);
          color: #ffffff;
        }

        .fork-icon,
        .star-icon {
          font-size: 1.1em;
          transition: transform 0.3s ease;
        }

        .github-btn:hover .fork-icon {
          transform: rotate(20deg);
        }

        .github-btn:hover .star-icon {
          transform: scale(1.2);
          animation: starTwinkle 0.6s ease;
        }

        @keyframes starTwinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; transform: scale(1.4); }
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

        .github-btn:hover .btn-shine {
          left: 100%;
        }

        .btn-text {
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        /* Responsive Design */
        @media (max-width: 991.98px) {
          .modern-navbar {
            padding: 12px 0;
          }

          .nav-links {
            background: rgba(15, 15, 15, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(199, 112, 240, 0.1);
            border-radius: 15px;
            margin: 20px 0;
            padding: 20px 0;
            flex-direction: column;
            gap: 5px;
          }

          .nav-link-modern {
            width: 90%;
            margin: 0 auto;
            justify-content: center;
          }

          .github-btn {
            margin: 10px auto 0 auto;
          }

          .navbar-scrolled {
            padding: 8px 0;
          }
        }

        @media (max-width: 576px) {
          .navbar-logo {
            height: 40px;
          }

          .navbar-scrolled .navbar-logo {
            height: 35px;
          }

          .nav-link-modern {
            padding: 10px 15px !important;
            font-size: 0.9em;
          }

          .github-btn {
            padding: 8px 16px;
            font-size: 0.85em;
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
    </Navbar>
  );
}

export default NavBar;
