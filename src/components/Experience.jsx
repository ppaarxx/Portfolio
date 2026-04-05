import { useCallback, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { experienceItems } from "../constants/data";
import useScrubStyle from "../hooks/useScrubStyle";
import useSectionScrollTimeline from "../hooks/useSectionScrollTimeline";
import { resetTiltEffect, updateTiltEffect } from "../utils/cardEffects";
import { mapScrubToSettle } from "../utils/scrollMotion";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";

const Experience = ({ isMobile }) => {
  const sectionRef = useRef(null);
  const { progress, isActiveZone, isSettled, reducedMotion } = useSectionScrollTimeline({
    targetRef: sectionRef,
    pin: false,
    offsets: ["start center", "end center"],
  });
  const settleProgress = useTransform(progress, (value) =>
    mapScrubToSettle(value, { settleStart: 0.4, settleEnd: 0.72 }).alignProgress
  );
  const headingMotion = useScrubStyle(progress, {
    entryStart: 0,
    settleStart: 0.34,
    settleEnd: 0.64,
    fromX: -16,
    fromY: 20,
    fromScale: 0.986,
    fromRotateX: -3,
  });
  const timelineMotion = useScrubStyle(progress, {
    entryStart: 0.08,
    settleStart: 0.44,
    settleEnd: 0.76,
    fromY: 36,
    fromScale: 0.97,
    fromRotateX: -4,
    fromOpacity: 0.84,
  });
  const scaleY = useSpring(progress, { stiffness: 120, damping: 28 });

  const handleMove = useCallback(
    (event) => {
      if (!isMobile) {
        updateTiltEffect(event, event.currentTarget);
      }
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
      id="experience"
      className={`experience-section section-shell scrub-section ${
        isActiveZone ? "is-active-zone" : ""
      } ${isSettled ? "is-settled" : ""}`}
      style={{ "--scrub-settle-progress": reducedMotion ? 1 : settleProgress }}
    >
      <div className="section-container">
        <motion.div style={reducedMotion ? undefined : headingMotion.style}>
          <SectionLabel index="03" title="experience" />
          <SectionHeading text="Experience" />
        </motion.div>
        <motion.div className="timeline-shell" style={reducedMotion ? undefined : timelineMotion.style}>
          <div className="timeline-line">
            <span className="timeline-line-base" />
            <motion.span className="timeline-line-fill" style={{ scaleY }} />
          </div>

          <div className="timeline-list">
            {experienceItems.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                className="timeline-item"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="timeline-dot" />
                <div
                  className="timeline-card card"
                  onMouseMove={handleMove}
                  onMouseLeave={handleLeave}
                  data-cursor="interactive"
                >
                  <div className="timeline-card-head">
                    <div>
                      <h3>{item.company}</h3>
                      <p className="timeline-role">{item.role}</p>
                    </div>
                    {item.tag ? <span className="timeline-tag">{item.tag}</span> : null}
                  </div>
                  <p className="timeline-period">
                    {item.period} | {item.location}
                  </p>
                  <ul className="timeline-bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
