import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { FaTrophy } from "react-icons/fa6";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import {
  awards,
  certificationItems,
  educationItems,
} from "../constants/data";
import useScrubStyle from "../hooks/useScrubStyle";
import useSectionScrollTimeline from "../hooks/useSectionScrollTimeline";
import { mapScrubToSettle } from "../utils/scrollMotion";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";

const Recognition = () => {
  const sectionRef = useRef(null);
  const { progress, isActiveZone, isSettled, reducedMotion } = useSectionScrollTimeline({
    targetRef: sectionRef,
    pin: false,
    offsets: ["start 88%", "end 16%"],
  });
  const settleProgress = useTransform(progress, (value) =>
    mapScrubToSettle(value, { settleStart: 0.42, settleEnd: 0.74 }).alignProgress
  );
  const headingMotion = useScrubStyle(progress, {
    entryStart: 0,
    settleStart: 0.34,
    settleEnd: 0.64,
    fromX: -14,
    fromY: 18,
    fromScale: 0.988,
  });
  const gridMotion = useScrubStyle(progress, {
    entryStart: 0.1,
    settleStart: 0.46,
    settleEnd: 0.78,
    fromY: 32,
    fromScale: 0.972,
    fromRotateX: -4,
    fromOpacity: 0.84,
  });

  return (
    <motion.section
      ref={sectionRef}
      id="recognition"
      className={`recognition-section section-shell scrub-section ${
        isActiveZone ? "is-active-zone" : ""
      } ${isSettled ? "is-settled" : ""}`}
      style={{ "--scrub-settle-progress": reducedMotion ? 1 : settleProgress }}
    >
      <div className="section-container">
        <motion.div style={reducedMotion ? undefined : headingMotion.style}>
          <SectionLabel index="06" title="recognition" />
          <SectionHeading text="Awards & Education" />
        </motion.div>
        <motion.div className="recognition-grid" style={reducedMotion ? undefined : gridMotion.style}>
          <div className="recognition-column">
            <div className="recognition-column-title">
              <FaTrophy />
              <span>Awards</span>
            </div>
            {awards.map((award) => (
              <motion.article
                key={`${award.title}-${award.year}`}
                className="award-card card"
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <h3>{award.title}</h3>
                <p>
                  {award.organization}
                  {" \u00B7 "}
                  {award.year}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="recognition-column">
            <div className="recognition-column-title">
              <HiOutlineAcademicCap />
              <span>Education</span>
            </div>
            {educationItems.map((item) => (
              <motion.article
                key={`${item.title}-${item.meta}`}
                className={`education-card card ${item.badge ? "is-highlighted" : ""}`}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div className="education-card-head">
                  <h3>{item.title}</h3>
                  {item.badge ? <span className="education-badge">{item.badge}</span> : null}
                </div>
                <p>{item.subtitle}</p>
                <span>{item.meta}</span>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer" data-cursor="interactive">
                    View publication
                  </a>
                ) : null}
              </motion.article>
            ))}

            <motion.div className="certifications-card card" whileHover={{ y: -3, scale: 1.01 }}>
              <span className="skill-group-title">Certifications</span>
              <ul>
                {certificationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Recognition;
