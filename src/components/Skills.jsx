import { useCallback } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "../constants/data";
import { skillIconMap } from "../utils/iconMap";
import { fadeUp, staggerContainer } from "../utils/motion";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";
import SkillOrb from "./SkillOrb";

const Skills = () => {
  const handlePillMove = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty("--ripple-x", `${x}%`);
    event.currentTarget.style.setProperty("--ripple-y", `${y}%`);
  }, []);

  return (
    <section id="skills" className="skills-section section-shell">
      <div className="section-container">
        <SectionLabel index="05" title="skills" />
        <div className="skills-header-row">
          <div>
            <SectionHeading text="Tech Stack" />
          </div>
          <SkillOrb />
        </div>

        <motion.div
          className="skills-groups"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map((group) => (
            <motion.article key={group.title} className="skill-group card" variants={fadeUp}>
              <span className="skill-group-title">{group.title}</span>
              <div className="skill-pills">
                {group.items.map((skill) => {
                  const Icon = skillIconMap[skill.icon];

                  return (
                    <motion.span
                      key={skill.name}
                      className="skill-pill"
                      onMouseMove={handlePillMove}
                      whileHover={{ y: -5, scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      data-cursor="interactive"
                    >
                      <Icon />
                      {skill.name}
                    </motion.span>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
