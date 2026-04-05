import { useCallback, useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { skillGroups } from "../constants/data";
import useScrubStyle from "../hooks/useScrubStyle";
import useSectionScrollTimeline from "../hooks/useSectionScrollTimeline";
import { skillIconMap } from "../utils/iconMap";
import { mapScrubToSettle } from "../utils/scrollMotion";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";
import SkillOrb from "./SkillOrb";

const Skills = () => {
  const sectionRef = useRef(null);
  const { progress, isActiveZone, isSettled, reducedMotion } = useSectionScrollTimeline({
    targetRef: sectionRef,
    pin: true,
    offsets: ["start start", "end end"],
  });
  const settleProgress = useTransform(progress, (value) =>
    mapScrubToSettle(value, { settleStart: 0.34, settleEnd: 0.6 }).alignProgress
  );
  const headingMotion = useScrubStyle(progress, {
    entryStart: 0.02,
    settleStart: 0.24,
    settleEnd: 0.5,
    fromX: -18,
    fromY: 20,
    fromRotateX: -3,
    fromScale: 0.986,
  });
  const groupsMotion = useScrubStyle(progress, {
    entryStart: 0.08,
    settleStart: 0.32,
    settleEnd: 0.6,
    fromY: 46,
    fromZ: -18,
    fromRotateX: -4,
    fromScale: 0.97,
    fromOpacity: 0.82,
  });

  const handlePillMove = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty("--ripple-x", `${x}%`);
    event.currentTarget.style.setProperty("--ripple-y", `${y}%`);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id="skills"
      className={`skills-section section-shell scrub-section ${
        reducedMotion ? "" : "pin-shell"
      } ${
        isActiveZone ? "is-active-zone" : ""
      } ${isSettled ? "is-settled" : ""}`}
      style={{ "--scrub-settle-progress": reducedMotion ? 1 : settleProgress }}
    >
      <div className={`${reducedMotion ? "skills-pin-stage skills-no-pin-stage" : "pin-stage skills-pin-stage"}`}>
        <div className="section-container">
          <motion.div style={reducedMotion ? undefined : headingMotion.style}>
            <SectionLabel index="05" title="skills" />
            <div className="skills-header-row">
              <div>
                <SectionHeading text="Tech Stack" />
              </div>
              <SkillOrb />
            </div>
          </motion.div>

          <motion.div className="skills-groups" style={reducedMotion ? undefined : groupsMotion.style}>
            {skillGroups.map((group) => (
              <motion.article key={group.title} className="skill-group card">
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
      </div>
    </motion.section>
  );
};

export default Skills;
