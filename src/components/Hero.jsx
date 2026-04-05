import { lazy, Suspense, useMemo, useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { personalInfo, heroRoles } from "../constants/data";
import useScrubStyle from "../hooks/useScrubStyle";
import useSectionScrollTimeline from "../hooks/useSectionScrollTimeline";
import { mapScrubToSettle } from "../utils/scrollMotion";
import { contactIconMap } from "../utils/iconMap";
import MagneticButton from "./MagneticButton";

const HeroCanvas = lazy(() => import("./HeroCanvas"));

const Hero = ({ isMobile, onNavigate }) => {
  const sectionRef = useRef(null);
  const { progress, isActiveZone, isSettled, reducedMotion } = useSectionScrollTimeline({
    targetRef: sectionRef,
    pin: true,
    offsets: ["start start", "end end"],
  });
  const roleSequence = useMemo(
    () => heroRoles.flatMap((role) => [role, 1400]),
    []
  );
  const settleProgress = useTransform(progress, (value) =>
    mapScrubToSettle(value, { settleStart: 0.3, settleEnd: 0.56 }).alignProgress
  );
  const starY = useTransform(progress, [0, 1], [0, 120]);
  const copyMotion = useScrubStyle(progress, {
    entryStart: 0,
    settleStart: 0.24,
    settleEnd: 0.5,
    fromX: -28,
    fromY: 24,
    fromRotateX: -4,
    fromRotateY: -4,
    fromScale: 0.98,
    fromOpacity: 0.84,
  });
  const visualMotion = useScrubStyle(progress, {
    entryStart: 0.04,
    settleStart: 0.3,
    settleEnd: 0.58,
    fromX: 34,
    fromY: 30,
    fromZ: -24,
    fromRotateX: -4,
    fromRotateY: 4,
    fromScale: 0.97,
    fromOpacity: 0.82,
  });
  const indicatorMotion = useScrubStyle(progress, {
    entryStart: 0,
    settleStart: 0.18,
    settleEnd: 0.4,
    fromY: 10,
    fromScale: 0.98,
    fromOpacity: 0.88,
  });
  const GithubIcon = contactIconMap.github;
  const LinkedInIcon = contactIconMap.linkedin;

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      className={`hero-section section-shell scrub-section ${
        reducedMotion ? "" : "pin-shell"
      } ${
        isActiveZone ? "is-active-zone" : ""
      } ${isSettled ? "is-settled" : ""}`}
      style={{ "--scrub-settle-progress": reducedMotion ? 1 : settleProgress }}
    >
      <div className={`${reducedMotion ? "hero-pin-stage hero-no-pin-stage" : "pin-stage hero-pin-stage"}`}>
        <motion.div className="hero-stars-layer" style={{ y: starY }} />
        <div className="section-container hero-container">
          <motion.div className="hero-copy" style={reducedMotion ? undefined : copyMotion.style}>
            <motion.div
              className="hero-availability"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {"\u2726"} {personalInfo.availability}
            </motion.div>

            <div className="hero-heading-group">
              <motion.span
                className="hero-intro"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
              >
                Hi, I'm
              </motion.span>
              <div className="hero-name-row" data-cursor="text">
                {personalInfo.shortName.split(" ").map((word, index) => (
                  <motion.span
                    key={word}
                    className="hero-name"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.55 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              className="hero-type"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <TypeAnimation sequence={roleSequence} speed={44} repeat={Infinity} />
            </motion.div>

            <motion.div
              className="hero-description"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
            >
              {personalInfo.heroDescription.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.58 + index * 0.1, duration: 0.6 }}
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <MagneticButton className="hero-button hero-button-primary" onClick={() => onNavigate("projects")}>
                View My Work
              </MagneticButton>
              <MagneticButton
                className="hero-button hero-button-secondary"
                href={personalInfo.resume}
                target="_blank"
                rel="noreferrer"
                ariaLabel="Download CV"
                download="Parth_Mahendra_Puri_Resume.pdf"
              >
                Download CV
              </MagneticButton>
            </motion.div>

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72 }}
            >
              <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub" data-cursor="interactive">
                <GithubIcon />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-cursor="interactive">
                <LinkedInIcon />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Gmail" data-cursor="interactive">
                <HiOutlineEnvelope />
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="hero-visual" style={reducedMotion ? undefined : visualMotion.style}>
            {isMobile ? (
              <div className="hero-mobile-visual" aria-hidden="true" />
            ) : (
              <Suspense fallback={<div className="hero-fallback-visual" />}>
                <HeroCanvas />
              </Suspense>
            )}
          </motion.div>
        </div>

        <motion.button
          type="button"
          className="hero-scroll-indicator"
          onClick={() => onNavigate("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          data-cursor="interactive"
          style={reducedMotion ? undefined : indicatorMotion.style}
        >
          <span className="hero-scroll-line">
            <span className="hero-scroll-dot" />
          </span>
          <span className="hero-scroll-text">scroll</span>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;
