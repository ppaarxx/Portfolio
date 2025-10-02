import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/Logo.png";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu on route change
    setExpand(false);
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      clearTimeout(timer);
    };
  }, []);

  // Handle mobile menu toggle
  const handleToggle = () => {
    setExpand(!expand);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setExpand(false);
  };

  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="lg"
        variant="dark"
        className={`custom-navbar ${navColour ? "scrolled" : ""} ${
          isLoaded ? "loaded" : ""
        }`}
      >
        <Container fluid>
          {/* Logo Brand */}
          <Navbar.Brand as={Link} to="/" className="navbar-brand-custom" onClick={closeMobileMenu}>
            <img src={logo} alt="Parth Puri" className="navbar-logo" />
          </Navbar.Brand>

          {/* Mobile Toggle Button */}
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={handleToggle}
            className="custom-toggle"
          >
            <div className={`hamburger-menu ${expand ? "open" : ""}`}>
              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
              <div className="bar bar3"></div>
            </div>
          </Navbar.Toggle>

          {/* Navigation Menu */}
          <Navbar.Collapse id="basic-navbar-nav" className={expand ? "show" : ""}>
            <Nav className="ms-auto align-items-center">
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={closeMobileMenu}
                className="nav-link-custom"
              >
                <AiOutlineHome className="nav-icon" />
                <span className="nav-text">Home</span>
              </Nav.Link>

              <Nav.Link 
                as={Link} 
                to="/about" 
                onClick={closeMobileMenu}
                className="nav-link-custom"
              >
                <AiOutlineUser className="nav-icon" />
                <span className="nav-text">About</span>
              </Nav.Link>

              <Nav.Link 
                as={Link} 
                to="/project" 
                onClick={closeMobileMenu}
                className="nav-link-custom"
              >
                <AiOutlineFundProjectionScreen className="nav-icon" />
                <span className="nav-text">Projects</span>
              </Nav.Link>

              <Nav.Link 
                as={Link} 
                to="/resume" 
                onClick={closeMobileMenu}
                className="nav-link-custom"
              >
                <CgFileDocument className="nav-icon" />
                <span className="nav-text">Resume</span>
              </Nav.Link>

              <Nav.Item className="github-nav-item">
                <Button
                  as="a"
                  href="https://github.com/ppaarxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                  onClick={closeMobileMenu}
                >
                  <CgGitFork className="github-icon" />
                  <AiFillStar className="github-icon" />
                  <span>GitHub</span>
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Menu Overlay */}
      {expand && <div className="mobile-overlay" onClick={closeMobileMenu}></div>}

      <style jsx global>{`
        /* Reset and Base Styles */
        .custom-navbar {
          background: rgba(10, 10, 10, 0.95) !important;
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(199, 112, 240, 0.1);
          padding: 1rem 0 !important;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(-100%);
          min-height: 80px;
        }

        .custom-navbar.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .custom-navbar.scrolled {
          background: rgba(5, 5, 5, 0.98) !important;
          padding: 0.5rem 0 !important;
          border-bottom-color: rgba(199, 112, 240, 0.3);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          min-height: 70px;
        }

        /* Logo Styles */
        .navbar-brand-custom {
          display: flex !important;
          align-items: center !important;
          text-decoration: none !important;
          z-index: 1001;
        }

        .navbar-brand-custom:hover {
          text-decoration: none !important;
        }

        .navbar-logo {
          height: 45px !important;
          width: auto !important;
          transition: transform 0.3s ease !important;
        }

        .scrolled .navbar-logo {
          height: 40px !important;
        }

        .navbar-brand-custom:hover .navbar-logo {
          transform: scale(1.05);
        }

        /* Custom Hamburger Toggle */
        .custom-toggle {
          border: none !important;
          background: none !important;
          padding: 0 !important;
          width: 40px !important;
          height: 40px !important;
          position: relative !important;
          z-index: 1001 !important;
        }

        .custom-toggle:focus {
          box-shadow: none !important;
          outline: none !important;
        }

        .hamburger-menu {
          width: 30px;
          height: 24px;
          position: relative;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .bar {
          height: 3px;
          width: 100%;
          background: #c770f0;
          border-radius: 3px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .hamburger-menu.open .bar1 {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger-menu.open .bar2 {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger-menu.open .bar3 {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        /* Navigation Links */
        .nav-link-custom {
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 0.8rem 1.2rem !important;
          margin: 0 0.2rem !important;
          border-radius: 25px !important;
          color: rgba(255, 255, 255, 0.8) !important;
          text-decoration: none !important;
          font-weight: 500 !important;
          transition: all 0.3s ease !important;
          position: relative !important;
          overflow: hidden !important;
        }

        .nav-link-custom:hover,
        .nav-link-custom:focus {
          color: #c770f0 !important;
          background: rgba(199, 112, 240, 0.1) !important;
          text-decoration: none !important;
          transform: translateY(-2px);
        }

        .nav-link-custom.active {
          color: #c770f0 !important;
          background: rgba(199, 112, 240, 0.15) !important;
        }

        .nav-icon {
          font-size: 1.2em !important;
          transition: transform 0.3s ease !important;
        }

        .nav-link-custom:hover .nav-icon {
          transform: scale(1.1);
        }

        .nav-text {
          font-size: 0.95em !important;
          white-space: nowrap !important;
        }

        /* GitHub Button */
        .github-nav-item {
          margin-left: 1rem !important;
        }

        .github-button {
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          padding: 0.6rem 1.2rem !important;
          background: linear-gradient(135deg, #c770f0, #9c27b0) !important;
          border: none !important;
          border-radius: 25px !important;
          color: #ffffff !important;
          font-weight: 600 !important;
          font-size: 0.9em !important;
          text-decoration: none !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 4px 15px rgba(199, 112, 240, 0.3) !important;
        }

        .github-button:hover,
        .github-button:focus {
          transform: translateY(-2px) scale(1.05) !important;
          box-shadow: 0 6px 20px rgba(199, 112, 240, 0.4) !important;
          background: linear-gradient(135deg, #d580ff, #b040d0) !important;
          color: #ffffff !important;
          text-decoration: none !important;
        }

        .github-icon {
          font-size: 1.1em !important;
        }

        /* Mobile Overlay */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          display: none;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 991.98px) {
          .custom-navbar {
            padding: 0.8rem 0 !important;
          }

          .custom-navbar.scrolled {
            padding: 0.6rem 0 !important;
          }

          /* Mobile Menu Overlay */
          .mobile-overlay {
            display: block !important;
          }

          /* Mobile Navigation */
          .navbar-collapse {
            position: fixed !important;
            top: 0 !important;
            right: 0 !important;
            height: 100vh !important;
            width: 280px !important;
            max-width: 85vw !important;
            background: rgba(10, 10, 10, 0.98) !important;
            backdrop-filter: blur(25px) !important;
            border-left: 1px solid rgba(199, 112, 240, 0.2) !important;
            padding: 100px 20px 40px 20px !important;
            transform: translateX(100%) !important;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            z-index: 1000 !important;
            overflow-y: auto !important;
          }

          .navbar-collapse.show {
            transform: translateX(0) !important;
          }

          .navbar-nav {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 15px !important;
            width: 100% !important;
          }

          .nav-link-custom {
            width: 100% !important;
            padding: 1rem 1.5rem !important;
            margin: 0 !important;
            justify-content: flex-start !important;
            font-size: 1.1em !important;
            background: rgba(255, 255, 255, 0.03) !important;
            border: 1px solid rgba(199, 112, 240, 0.1) !important;
            border-radius: 15px !important;
          }

          .nav-link-custom:hover,
          .nav-link-custom:focus {
            background: rgba(199, 112, 240, 0.15) !important;
            border-color: rgba(199, 112, 240, 0.3) !important;
            transform: none !important;
          }

          .nav-icon {
            font-size: 1.4em !important;
            margin-right: 8px !important;
          }

          .nav-text {
            font-size: 1em !important;
          }

          .github-nav-item {
            margin-left: 0 !important;
            margin-top: 20px !important;
            padding-top: 20px !important;
            border-top: 1px solid rgba(199, 112, 240, 0.2) !important;
          }

          .github-button {
            width: 100% !important;
            padding: 1rem 1.5rem !important;
            justify-content: center !important;
            font-size: 1em !important;
          }

          .github-button:hover,
          .github-button:focus {
            transform: none !important;
          }
        }

        @media (max-width: 576px) {
          .navbar-logo {
            height: 35px !important;
          }

          .scrolled .navbar-logo {
            height: 32px !important;
          }

          .navbar-collapse {
            width: 100vw !important;
            max-width: 100vw !important;
            left: 0 !important;
            right: 0 !important;
            border-left: none !important;
            padding: 80px 15px 30px 15px !important;
          }

          .nav-link-custom {
            padding: 0.9rem 1.2rem !important;
            font-size: 1rem !important;
          }

          .nav-icon {
            font-size: 1.3em !important;
          }

          .github-button {
            padding: 0.9rem 1.2rem !important;
            font-size: 0.95em !important;
          }
        }

        /* Touch Optimization */
        @media (hover: none) and (pointer: coarse) {
          .nav-link-custom:hover {
            transform: none !important;
          }

          .github-button:hover {
            transform: none !important;
          }

          .navbar-brand-custom:hover .navbar-logo {
            transform: none !important;
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* High Contrast */
        @media (prefers-contrast: high) {
          .nav-link-custom {
            border: 2px solid !important;
          }
          
          .github-button {
            border: 2px solid !important;
          }
        }

        /* Fix for Bootstrap conflicts */
        .navbar-toggler {
          display: none !important;
        }

        @media (max-width: 991.98px) {
          .navbar-expand-lg .navbar-collapse {
            display: flex !important;
          }
          
          .custom-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}

export default NavBar;
