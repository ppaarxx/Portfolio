import React, { useCallback, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import "./App.css";
import { sectionOrder, siteMeta } from "./constants/data";
import useScrollProgress from "./hooks/useScrollProgress";
import useScrollVelocity from "./hooks/useScrollVelocity";
import { getIsMobile } from "./utils/device";
import SEO from "./components/SEO.jsx";
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import GlobalBackground from "./components/GlobalBackground.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Recognition from "./components/Recognition.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(getIsMobile());
  const lenisRef = useRef(null);
  const { activeSection, scrollProgress } = useScrollProgress(sectionOrder);
  const { normalizedVelocity, signedNormalizedVelocity } = useScrollVelocity({
    smoothing: 0.18,
    maxVelocity: 2.6,
  });
  const updateDevice = useCallback(() => setIsMobile(getIsMobile()), []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 1600);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, [updateDevice]);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });
    let rafId = 0;

    const raf = (time) => {
      lenis.raf?.(time);
      rafId = window.requestAnimationFrame(raf);
    };

    lenisRef.current = lenis;
    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy?.();
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-loading", isLoading);
    return () => document.body.classList.remove("is-loading");
  }, [isLoading]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scroll-velocity",
      normalizedVelocity.toFixed(4)
    );
    document.documentElement.style.setProperty(
      "--scroll-signed-velocity",
      signedNormalizedVelocity.toFixed(4)
    );
  }, [normalizedVelocity, signedNormalizedVelocity]);

  const scrollToSection = useCallback((id, offset = -96) => {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    lenisRef.current?.scrollTo(target, { offset, duration: 1.15 });
  }, []);

  return (
    <div className={`app-shell theme-${activeSection}`}>
      <SEO meta={siteMeta} />
      <Loader show={isLoading} />
      <CustomCursor enabled={!isMobile} />
      <GlobalBackground
        activeSection={activeSection}
        scrollProgress={scrollProgress}
        isMobile={isMobile}
      />
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar
        activeSection={activeSection}
        progress={scrollProgress}
        onNavigate={scrollToSection}
      />
      <main className={`page-shell ${isLoading ? "is-loading" : "is-ready"}`}>
        <Hero isMobile={isMobile} onNavigate={scrollToSection} />
        <About isMobile={isMobile} />
        <Experience isMobile={isMobile} />
        <Projects isMobile={isMobile} />
        <Skills />
        <Recognition />
        <Contact isMobile={isMobile} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
