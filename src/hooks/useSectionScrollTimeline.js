import { useMemo, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const defaultOffsets = {
  pin: ["start start", "end end"],
  free: ["start 90%", "end 15%"],
};

const useSectionScrollTimeline = ({ targetRef, offsets, pin = false }) => {
  const reducedMotion = useReducedMotion();
  const [isActiveZone, setIsActiveZone] = useState(false);
  const [isSettled, setIsSettled] = useState(false);
  const resolvedOffsets = useMemo(() => {
    if (offsets?.length === 2) {
      return offsets;
    }

    return pin ? defaultOffsets.pin : defaultOffsets.free;
  }, [offsets, pin]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: resolvedOffsets,
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.22,
  });

  useMotionValueEvent(progress, "change", (value) => {
    const clamped = clamp(value, 0, 1);

    setIsActiveZone(clamped > 0.04 && clamped < 0.92);
    setIsSettled(clamped >= (pin ? 0.58 : 0.72));
  });

  return { progress, isActiveZone, isSettled, reducedMotion };
};

export default useSectionScrollTimeline;
