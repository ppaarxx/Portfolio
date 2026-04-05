import { useCallback, useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { aboutStats, personalInfo } from "../constants/data";
import useScrubStyle from "../hooks/useScrubStyle";
import useSectionScrollTimeline from "../hooks/useSectionScrollTimeline";
import { resetTiltEffect, updateTiltEffect } from "../utils/cardEffects";
import { mapScrubToSettle } from "../utils/scrollMotion";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";
import StatCounter from "./StatCounter";

const About = ({ isMobile }) => {
  const sectionRef = useRef(null);
  const { progress, isActiveZone, isSettled, reducedMotion } = useSectionScrollTimeline({
    targetRef: sectionRef,
    pin: false,
    offsets: ["start 88%", "end 18%"],
  });
  const settleProgress = useTransform(progress, (value) =>
    mapScrubToSettle(value, { settleStart: 0.42, settleEnd: 0.72 }).alignProgress
  );
  const avatarMotion = useScrubStyle(progress, {
    entryStart: 0.02,
    settleStart: 0.38,
    settleEnd: 0.68,
    fromX: -22,
    fromY: 22,
    fromRotateY: -4,
    fromScale: 0.98,
  });
  const copyMotion = useScrubStyle(progress, {
    entryStart: 0.08,
    settleStart: 0.44,
    settleEnd: 0.74,
    fromX: 18,
    fromY: 20,
    fromRotateX: -3,
    fromScale: 0.985,
    fromOpacity: 0.86,
  });

  const handleMove = useCallback(
    (event) => {
      if (isMobile) {
        return;
      }

      updateTiltEffect(event, event.currentTarget, {
        maxTilt: 8,
        perspective: 900,
        scale: 1.01,
      });
    },
    [isMobile]
  );

  const handleLeave = useCallback(
    (event) => {
      if (!isMobile) {
        resetTiltEffect(event.currentTarget);
      }
    },
    [isMobile]
  );

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className={`about-section section-shell scrub-section ${
        isActiveZone ? "is-active-zone" : ""
      } ${isSettled ? "is-settled" : ""}`}
      style={{ "--scrub-settle-progress": reducedMotion ? 1 : settleProgress }}
    >
      <div className="section-container">
        <SectionLabel index="02" title="about" />
        <div className="about-grid">
          <motion.article
            className="about-avatar-card card"
            style={reducedMotion ? undefined : avatarMotion.style}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            data-cursor="interactive"
          >
            <span className="about-avatar-blob" />
            <div className="about-avatar-initial">P</div>
            <div className="about-avatar-footer">
              <strong>{personalInfo.name}</strong>
              <span>{personalInfo.title}</span>
            </div>
          </motion.article>

          <motion.div className="about-copy" style={reducedMotion ? undefined : copyMotion.style}>
            <SectionHeading text="About Me" />
            <p className="about-paragraph">{personalInfo.aboutCopy}</p>
            <div className="about-stats">
              {aboutStats.map((stat) => (
                <motion.article
                  key={stat.label}
                  className="about-stat-card card"
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  <span className="about-stat-value">
                    <StatCounter value={stat.value} />
                  </span>
                  <span className="about-stat-label">{stat.label}</span>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
