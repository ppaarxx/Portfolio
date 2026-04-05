import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionLabel = ({ index, title }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className="section-label">
      <motion.span
        initial={{ opacity: 0, x: -24 }}
        animate={inView ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 0.5 }}
      >
        {index} / {title}
      </motion.span>
      <motion.div
        className="section-label-line"
        initial={{ width: 0 }}
        animate={inView ? { width: 40 } : undefined}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
    </div>
  );
};

export default SectionLabel;
