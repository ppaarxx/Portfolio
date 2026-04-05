import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCallback } from "react";
import { getMagneticOffset } from "../utils/magnetic";

const MagneticButton = ({
  href,
  onClick,
  children,
  className,
  target,
  rel,
  ariaLabel,
  download,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  const Component = href ? motion.a : motion.button;

  const handleMove = useCallback(
    (event) => {
      const offset = getMagneticOffset(event, event.currentTarget, 0.3);
      x.set(offset.x);
      y.set(offset.y);
    },
    [x, y]
  );

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <Component
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      download={download}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor="interactive"
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </Component>
  );
};

export default MagneticButton;
