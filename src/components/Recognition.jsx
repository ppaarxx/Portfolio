import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa6";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import {
  awards,
  certificationItems,
  educationItems,
} from "../constants/data";
import { fadeUp, staggerContainer } from "../utils/motion";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";

const Recognition = () => (
  <section id="recognition" className="recognition-section section-shell">
    <div className="section-container">
      <SectionLabel index="06" title="recognition" />
      <SectionHeading text="Awards & Education" />
      <div className="recognition-grid">
        <motion.div
          className="recognition-column"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="recognition-column-title">
            <FaTrophy />
            <span>Awards</span>
          </div>
          {awards.map((award) => (
            <motion.article key={`${award.title}-${award.year}`} className="award-card card" variants={fadeUp}>
              <h3>{award.title}</h3>
              <p>
                {award.organization}
                {" \u00B7 "}
                {award.year}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="recognition-column"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="recognition-column-title">
            <HiOutlineAcademicCap />
            <span>Education</span>
          </div>
          {educationItems.map((item) => (
            <motion.article
              key={`${item.title}-${item.meta}`}
              className={`education-card card ${item.badge ? "is-highlighted" : ""}`}
              variants={fadeUp}
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

          <motion.div className="certifications-card card" variants={fadeUp}>
            <span className="skill-group-title">Certifications</span>
            <ul>
              {certificationItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Recognition;
