import { useCallback, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experienceItems } from "../constants/data";
import { resetTiltEffect, updateTiltEffect } from "../utils/cardEffects";
import { fadeUp } from "../utils/motion";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";

const Experience = ({ isMobile }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

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
    <section ref={sectionRef} id="experience" className="experience-section section-shell">
      <div className="section-container">
        <SectionLabel index="03" title="experience" />
        <SectionHeading text="Experience" />
        <div className="timeline-shell">
          <div className="timeline-line">
            <span className="timeline-line-base" />
            <motion.span className="timeline-line-fill" style={{ scaleY }} />
          </div>

          <div className="timeline-list">
            {experienceItems.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                className="timeline-item"
                variants={fadeUp}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
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
        </div>
      </div>
    </section>
  );
};

export default Experience;
