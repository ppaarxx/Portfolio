import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { contactLinks, personalInfo } from "../constants/data";
import useScrubStyle from "../hooks/useScrubStyle";
import useSectionScrollTimeline from "../hooks/useSectionScrollTimeline";
import { contactIconMap } from "../utils/iconMap";
import { mapScrubToSettle } from "../utils/scrollMotion";
import ContactCanvas from "./ContactCanvas";
import SectionLabel from "./SectionLabel";

const Contact = ({ isMobile }) => {
  const sectionRef = useRef(null);
  const { progress, isActiveZone, isSettled, reducedMotion } = useSectionScrollTimeline({
    targetRef: sectionRef,
    pin: false,
    offsets: ["start 90%", "end 12%"],
  });
  const settleProgress = useTransform(progress, (value) =>
    mapScrubToSettle(value, { settleStart: 0.4, settleEnd: 0.72 }).alignProgress
  );
  const headingMotion = useScrubStyle(progress, {
    entryStart: 0,
    settleStart: 0.32,
    settleEnd: 0.62,
    fromY: 20,
    fromScale: 0.986,
    fromRotateX: -3,
  });
  const cardsMotion = useScrubStyle(progress, {
    entryStart: 0.12,
    settleStart: 0.44,
    settleEnd: 0.76,
    fromY: 34,
    fromScale: 0.97,
    fromRotateX: -4,
    fromOpacity: 0.84,
  });

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className={`contact-section section-shell scrub-section ${
        isActiveZone ? "is-active-zone" : ""
      } ${isSettled ? "is-settled" : ""}`}
      style={{ "--scrub-settle-progress": reducedMotion ? 1 : settleProgress }}
    >
      {!isMobile ? <ContactCanvas /> : <div className="contact-mobile-glow" aria-hidden="true" />}
      <div className="section-container contact-container">
        <SectionLabel index="07" title="contact" />
        <motion.div
          className="contact-heading-wrap"
          style={reducedMotion ? undefined : headingMotion.style}
        >
          <h2 className="contact-heading">
            <span>Let's Build Something</span>
            <span className="contact-heading-gradient">Together.</span>
          </h2>
          <a
            href={`mailto:${personalInfo.email}`}
            className="contact-email-link"
            data-cursor="interactive"
          >
            {personalInfo.email}
          </a>
        </motion.div>

        <motion.div
          className="contact-card-grid"
          style={reducedMotion ? undefined : cardsMotion.style}
        >
          {contactLinks.map((link) => {
            const Icon = contactIconMap[link.icon];

            return (
              <motion.a
                key={link.label}
                href={link.href}
                className="contact-card card"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                whileHover={{ y: -4, scale: 1.01 }}
                data-cursor="interactive"
              >
                <Icon />
                <div>
                  <strong>{link.label}</strong>
                  <span>{link.value}</span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
