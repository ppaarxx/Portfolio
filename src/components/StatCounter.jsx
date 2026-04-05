import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

const StatCounter = ({ value }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });
  const [count, setCount] = useState(0);

  const parsed = useMemo(() => {
    const match = value.match(/^(\d+)(.*)$/);
    return {
      target: match ? Number(match[1]) : 0,
      suffix: match ? match[2] : value,
    };
  }, [value]);

  useEffect(() => {
    if (!inView) {
      return undefined;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1200;

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.round(parsed.target * progress));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, parsed.target]);

  return (
    <span ref={ref}>
      {count}
      {parsed.suffix}
    </span>
  );
};

export default StatCounter;
