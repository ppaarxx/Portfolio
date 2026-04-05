import { motion } from "framer-motion";
import { contactLinks, personalInfo } from "../constants/data";
import { contactIconMap } from "../utils/iconMap";
import { fadeUp, staggerContainer } from "../utils/motion";
import ContactCanvas from "./ContactCanvas";
import SectionLabel from "./SectionLabel";

const Contact = ({ isMobile }) => (
  <section id="contact" className="contact-section section-shell">
    {!isMobile ? <ContactCanvas /> : <div className="contact-mobile-glow" aria-hidden="true" />}
    <div className="section-container contact-container">
      <SectionLabel index="07" title="contact" />
      <div className="contact-heading-wrap">
        <motion.h2
          className="contact-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <span>Let's Build Something</span>
          <span className="contact-heading-gradient">Together.</span>
        </motion.h2>
        <motion.a
          href={`mailto:${personalInfo.email}`}
          className="contact-email-link"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          viewport={{ once: true, amount: 0.35 }}
          data-cursor="interactive"
        >
          {personalInfo.email}
        </motion.a>
      </div>

      <motion.div
        className="contact-card-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {contactLinks.map((link) => {
          const Icon = contactIconMap[link.icon];

          return (
            <motion.a
              key={link.label}
              href={link.href}
              className="contact-card card"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              variants={fadeUp}
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
  </section>
);

export default Contact;
