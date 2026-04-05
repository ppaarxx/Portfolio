import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionHeading = ({ as = "h2", text, className = "" }) => {
  const Tag = as;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`section-heading-clip ${className}`.trim()}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={inView ? { clipPath: "inset(0 0% 0 0)" } : undefined}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tag className="section-heading" data-cursor="text">
        {text.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className="section-heading-char"
            initial={{ y: 60, opacity: 0, rotateX: -30 }}
            animate={inView ? { y: 0, opacity: 1, rotateX: 0 } : undefined}
            transition={{
              duration: 0.55,
              delay: index * 0.02,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
};

export default SectionHeading;
