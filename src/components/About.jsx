import { useCallback } from "react";
import { motion } from "framer-motion";
import { aboutStats, personalInfo } from "../constants/data";
import { resetTiltEffect, updateTiltEffect } from "../utils/cardEffects";
import { fadeUp, staggerContainer } from "../utils/motion";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";
import StatCounter from "./StatCounter";

const About = ({ isMobile }) => {
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
    <section id="about" className="about-section section-shell">
      <div className="section-container">
        <SectionLabel index="02" title="about" />
        <div className="about-grid">
          <motion.article
            className="about-avatar-card card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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

          <motion.div
            className="about-copy"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div variants={fadeUp}>
              <SectionHeading text="About Me" />
            </motion.div>
            <motion.p className="about-paragraph" variants={fadeUp}>
              {personalInfo.aboutCopy}
            </motion.p>
            <motion.div className="about-stats" variants={staggerContainer}>
              {aboutStats.map((stat) => (
                <motion.article key={stat.label} className="about-stat-card card" variants={fadeUp}>
                  <span className="about-stat-value">
                    <StatCounter value={stat.value} />
                  </span>
                  <span className="about-stat-label">{stat.label}</span>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
