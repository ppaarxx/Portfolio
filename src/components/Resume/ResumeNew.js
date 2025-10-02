import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload, AiOutlineEye, AiOutlineShareAlt, AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";
import { FaRobot } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [customScale, setCustomScale] = useState(null);
  const fullscreenRef = useRef(null);
  const viewerContainerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    // Fullscreen change handlers
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
        setZoomLevel(1); // Reset zoom when exiting fullscreen
        setCustomScale(null);
      }
    };

    const handleKeyDown = (e) => {
      if (isFullscreen) {
        switch(e.key) {
          case 'Escape':
            exitFullscreen();
            break;
          case '+':
          case '=':
            if (e.ctrlKey) {
              e.preventDefault();
              handleZoomIn();
            }
            break;
          case '-':
            if (e.ctrlKey) {
              e.preventDefault();
              handleZoomOut();
            }
            break;
          case '0':
            if (e.ctrlKey) {
              e.preventDefault();
              resetZoom();
            }
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("resize", updateWidth);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("keydown", handleKeyDown);
    updateWidth();

    // Trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => {
      window.removeEventListener("resize", updateWidth);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [isFullscreen]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1);
  };

  const enterFullscreen = async () => {
    if (fullscreenRef.current) {
      try {
        await fullscreenRef.current.requestFullscreen();
        setIsFullscreen(true);
        // Set initial fullscreen zoom
        setZoomLevel(1.2);
      } catch (error) {
        console.error("Error entering fullscreen:", error);
        // Fallback: set fullscreen state anyway for CSS styling
        setIsFullscreen(true);
      }
    }
  };

  const exitFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
      setIsFullscreen(false);
      setZoomLevel(1);
      setCustomScale(null);
    } catch (error) {
      console.error("Error exiting fullscreen:", error);
      setIsFullscreen(false);
      setZoomLevel(1);
      setCustomScale(null);
    }
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 4)); // Max zoom 4x
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5)); // Min zoom 0.5x
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  const fitToWidth = () => {
    if (isFullscreen && viewerContainerRef.current) {
      const containerWidth = viewerContainerRef.current.clientWidth - 40; // padding
      setCustomScale(containerWidth / 595); // A4 width in points
    }
  };

  const fitToHeight = () => {
    if (isFullscreen && viewerContainerRef.current) {
      const containerHeight = viewerContainerRef.current.clientHeight - 100; // controls height
      setCustomScale(containerHeight / 842); // A4 height in points
    }
  };

  const getScale = () => {
    if (customScale) return customScale;
    
    if (isFullscreen) {
      return zoomLevel;
    }
    
    if (width > 1200) return 1.7;
    if (width > 786) return 1.4;
    if (width > 576) return 1.0;
    return 0.7;
  };

  const getCurrentZoomPercentage = () => {
    return Math.round(getScale() * 100);
  };

  return (
    <div className="resume-page">
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Hero Section */}
        <Container>
          <Row className="resume-hero">
            <Col md={12} className={`text-center ${isLoaded ? 'animate-fade-up' : ''}`}>
              <div className="resume-header">
                <FaRobot className="resume-icon" />
                <h1 className="resume-title">
                  My <span className="highlight">Resume</span>
                </h1>
                <p className="resume-subtitle">
                  AI Engineer & Full-Stack Developer
                </p>
                <div className="resume-stats">
                  <div className="stat-item">
                    <AiOutlineEye className="stat-icon" />
                    <span>Professional CV</span>
                  </div>
                  <div className="stat-item">
                    <span className="download-counter">{downloadCount} downloads</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Action Buttons - Top */}
          {!isFullscreen && (
            <Row className="resume-actions-top">
              <Col md={12} className="text-center">
                <div className={`button-group ${isLoaded ? 'animate-scale-up' : ''}`}>
                  <Button
                    className="download-btn primary-btn"
                    href={pdf}
                    target="_blank"
                    onClick={handleDownload}
                  >
                    <AiOutlineDownload className="btn-icon" />
                    <span>Download Resume</span>
                    <div className="btn-shine"></div>
                  </Button>
                  
                  <Button
                    className="action-btn secondary-btn"
                    onClick={enterFullscreen}
                  >
                    <BiFullscreen className="btn-icon" />
                    <span>Fullscreen View</span>
                  </Button>

                  <Button
                    className="action-btn secondary-btn"
                    onClick={() => navigator.share && navigator.share({
                      title: 'Parth Puri - AI Engineer Resume',
                      url: window.location.href
                    })}
                  >
                    <AiOutlineShareAlt className="btn-icon" />
                    <span>Share</span>
                  </Button>
                </div>
              </Col>
            </Row>
          )}

          {/* PDF Viewer Section */}
          <Row className="resume-viewer">
            <Col md={12} className="text-center">
              <div 
                ref={fullscreenRef}
                className={`pdf-container ${isLoaded ? 'animate-slide-up' : ''} ${isFullscreen ? 'fullscreen-active' : ''}`}
              >
                {/* Fullscreen Controls */}
                {isFullscreen && (
                  <div className="fullscreen-controls">
                    <div className="controls-left">
                      <div className="zoom-controls">
                        {/* <Button className="zoom-btn" onClick={handleZoomOut} disabled={zoomLevel <= 0.5}>
                          <AiOutlineZoomOut />
                        </Button> */}
                        
                        <div className="zoom-display">
                          <span className="zoom-percentage">{getCurrentZoomPercentage()}%</span>
                        </div>
                        
                        {/* <Button className="zoom-btn" onClick={handleZoomIn} disabled={zoomLevel >= 4}>
                          <AiOutlineZoomIn />
                        </Button> */}
                        
                        <Button className="zoom-btn" onClick={resetZoom} title="Reset Zoom (Ctrl+0)">
                          <MdRefresh />
                        </Button>
                      </div>

                      <div className="fit-controls">
                        <Button className="fit-btn" onClick={fitToWidth} title="Fit to Width">
                          Fit Width
                        </Button>
                        <Button className="fit-btn" onClick={fitToHeight} title="Fit to Height">
                          Fit Height
                        </Button>
                      </div>
                    </div>

                    <div className="controls-right">
                      <Button className="exit-btn" onClick={exitFullscreen}>
                        <BiExitFullscreen />
                        <span>Exit Fullscreen</span>
                      </Button>
                    </div>
                  </div>
                )}

                <div 
                  ref={viewerContainerRef}
                  className="pdf-wrapper"
                  style={{ 
                    height: isFullscreen ? 'calc(100vh - 80px)' : 'auto',
                    overflow: isFullscreen ? 'auto' : 'visible'
                  }}
                >
                  {/* PDF Navigation */}
                  {numPages > 1 && (
                    <div className="pdf-navigation">
                      <Button
                        className="nav-btn"
                        disabled={pageNumber <= 1}
                        onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                      >
                        Previous
                      </Button>
                      <span className="page-info">
                        Page {pageNumber} of {numPages}
                      </span>
                      <Button
                        className="nav-btn"
                        disabled={pageNumber >= numPages}
                        onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
                      >
                        Next
                      </Button>
                    </div>
                  )}

                  {/* PDF Document */}
                  <div className="pdf-viewer">
                    <Document
                      file={pdf}
                      onLoadSuccess={onDocumentLoadSuccess}
                      loading={
                        <div className="pdf-loading">
                          <div className="loading-spinner"></div>
                          <p>Loading Resume...</p>
                        </div>
                      }
                      error={
                        <div className="pdf-error">
                          <p>Failed to load PDF. Please try downloading instead.</p>
                        </div>
                      }
                      className="pdf-document"
                    >
                      <Page
                        pageNumber={pageNumber}
                        scale={getScale()}
                        className="pdf-page"
                        loading={<div className="page-loading">Loading page...</div>}
                      />
                    </Document>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Action Buttons - Bottom */}
          {!isFullscreen && (
            <Row className="resume-actions-bottom">
              <Col md={12} className="text-center">
                <div className={`button-group ${isLoaded ? 'animate-scale-up' : ''}`}>
                  <Button
                    className="download-btn primary-btn"
                    href={pdf}
                    target="_blank"
                    onClick={handleDownload}
                  >
                    <AiOutlineDownload className="btn-icon" />
                    <span>Download Resume</span>
                    <div className="btn-shine"></div>
                  </Button>
                </div>
                
                <div className="resume-footer">
                  <p className="footer-text">
                    Ready to collaborate on <span className="highlight">AI-driven innovation</span>?
                  </p>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </Container>

      {/* Enhanced CSS Styles */}
      <style jsx>{`
        /* Base Styles */
        .resume-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
        }

        .resume-section {
          padding: 100px 0 60px 0;
          position: relative;
        }

        /* Initial hidden states */
        .resume-header,
        .button-group,
        .pdf-container {
          opacity: 0;
        }

        /* Hero Section */
        .resume-hero {
          margin-bottom: 60px;
        }

        .resume-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .resume-icon {
          font-size: 3em;
          color: #c770f0;
          margin-bottom: 20px;
          animation: iconFloat 3s ease-in-out infinite;
        }

        .resume-title {
          font-size: 3.5em;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 15px;
          letter-spacing: -2px;
        }

        .highlight {
          background: linear-gradient(135deg, #c770f0, #9c27b0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .resume-subtitle {
          font-size: 1.4em;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 30px;
          font-weight: 300;
        }

        .resume-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.1em;
          color: rgba(255, 255, 255, 0.7);
        }

        .stat-icon {
          color: #c770f0;
          font-size: 1.2em;
        }

        .download-counter {
          color: #c770f0;
          font-weight: 600;
        }

        /* Action Buttons */
        .resume-actions-top {
          margin-bottom: 50px;
        }

        .resume-actions-bottom {
          margin-top: 50px;
        }

        .button-group {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .primary-btn {
          background: linear-gradient(135deg, #c770f0, #9c27b0);
          border: none;
          padding: 15px 35px;
          border-radius: 50px;
          color: #ffffff;
          font-weight: 600;
          font-size: 1.1em;
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(199, 112, 240, 0.3);
          text-decoration: none;
        }

        .primary-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 35px rgba(199, 112, 240, 0.5);
          color: #ffffff;
          text-decoration: none;
        }

        .secondary-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(199, 112, 240, 0.3);
          padding: 13px 25px;
          border-radius: 50px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .secondary-btn:hover {
          background: rgba(199, 112, 240, 0.1);
          border-color: rgba(199, 112, 240, 0.6);
          color: #c770f0;
          transform: translateY(-2px);
        }

        .btn-icon {
          font-size: 1.2em;
          transition: transform 0.3s ease;
        }

        .primary-btn:hover .btn-icon {
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

        .primary-btn:hover .btn-shine {
          left: 100%;
        }

        /* PDF Viewer */
        .pdf-container {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(199, 112, 240, 0.1);
          border-radius: 20px;
          padding: 30px;
          backdrop-filter: blur(15px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .pdf-container.fullscreen-active {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.98);
          border-radius: 0;
          padding: 20px;
          margin: 0;
        }

        /* Fullscreen Controls */
        .fullscreen-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background: rgba(25, 25, 25, 0.95);
          border-radius: 15px;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 15px;
        }

        .controls-left {
          display: flex;
          align-items: center;
          gap: 25px;
          flex-wrap: wrap;
        }

        .zoom-controls {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(199, 112, 240, 0.1);
          padding: 8px 15px;
          border-radius: 25px;
          border: 1px solid rgba(199, 112, 240, 0.2);
        }

        .zoom-btn {
          background: rgba(199, 112, 240, 0.2);
          border: 1px solid rgba(199, 112, 240, 0.3);
          color: #ffffff;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1em;
          transition: all 0.3s ease;
        }

        .zoom-btn:hover:not(:disabled) {
          background: rgba(199, 112, 240, 0.4);
          border-color: rgba(199, 112, 240, 0.6);
          transform: scale(1.1);
        }

        .zoom-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .zoom-display {
          padding: 5px 15px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 15px;
          min-width: 70px;
          text-align: center;
        }

        .zoom-percentage {
          color: #c770f0;
          font-weight: 600;
          font-size: 0.9em;
        }

        .fit-controls {
          display: flex;
          gap: 10px;
        }

        .fit-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          padding: 8px 12px;
          border-radius: 15px;
          font-size: 0.85em;
          transition: all 0.3s ease;
        }

        .fit-btn:hover {
          background: rgba(199, 112, 240, 0.1);
          border-color: rgba(199, 112, 240, 0.3);
          color: #c770f0;
        }

        .exit-btn {
          background: linear-gradient(135deg, #dc3545, #c82333);
          border: none;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 25px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .exit-btn:hover {
          background: linear-gradient(135deg, #e74c3c, #dc3545);
          transform: translateY(-2px);
          color: #ffffff;
        }

        .pdf-wrapper {
          position: relative;
          width: 100%;
        }

        .pdf-navigation {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
          padding: 15px;
          background: rgba(199, 112, 240, 0.05);
          border-radius: 15px;
          border: 1px solid rgba(199, 112, 240, 0.1);
        }

        .nav-btn {
          background: linear-gradient(135deg, #c770f0, #9c27b0);
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          color: #ffffff;
          font-size: 0.9em;
          transition: all 0.3s ease;
        }

        .nav-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(199, 112, 240, 0.3);
        }

        .nav-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .page-info {
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }

        .pdf-viewer {
          display: flex;
          justify-content: center;
          overflow: hidden;
          border-radius: 15px;
        }

        .pdf-document {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .pdf-page {
          border-radius: 10px;
          overflow: hidden;
          background: #ffffff;
        }

        /* Loading States */
        .pdf-loading,
        .page-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 60px;
          color: rgba(255, 255, 255, 0.8);
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(199, 112, 240, 0.3);
          border-top: 3px solid #c770f0;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .pdf-error {
          padding: 60px;
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Footer */
        .resume-footer {
          margin-top: 30px;
        }

        .footer-text {
          font-size: 1.2em;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        /* Animations */
        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-scale-up {
          animation: scaleUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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

        .animate-slide-up {
          animation: slideUp 1s ease-out 0.3s forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .resume-title {
            font-size: 2.8em;
          }
          
          .button-group {
            flex-direction: column;
            align-items: center;
          }
          
          .resume-stats {
            flex-direction: column;
            gap: 15px;
          }

          .fullscreen-controls {
            flex-direction: column;
            align-items: stretch;
            gap: 15px;
          }

          .controls-left {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .resume-section {
            padding: 80px 0 40px 0;
          }
          
          .resume-title {
            font-size: 2.2em;
          }
          
          .pdf-container {
            padding: 15px;
            margin: 0 10px;
          }
          
          .button-group {
            gap: 15px;
          }
          
          .primary-btn,
          .secondary-btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .zoom-controls {
            flex-wrap: wrap;
            justify-content: center;
          }

          .fit-controls {
            flex-direction: column;
            width: 100%;
          }
        }

        @media (max-width: 576px) {
          .resume-hero {
            margin-bottom: 40px;
          }
          
          .resume-actions-top,
          .resume-actions-bottom {
            margin: 30px 0;
          }
          
          .pdf-navigation {
            flex-direction: column;
            gap: 10px;
          }

          .fullscreen-controls {
            padding: 10px;
          }

          .zoom-controls {
            gap: 5px;
            padding: 5px 10px;
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

export default ResumeNew;
