import { useTransform } from "framer-motion";
import { mapScrubToSettle } from "../utils/scrollMotion";

const useScrubStyle = (progress, config = {}) => {
  const { enableBlur = false } = config;
  const x = useTransform(progress, (value) => mapScrubToSettle(value, config).x);
  const y = useTransform(progress, (value) => mapScrubToSettle(value, config).y);
  const z = useTransform(progress, (value) => mapScrubToSettle(value, config).z);
  const rotateX = useTransform(
    progress,
    (value) => mapScrubToSettle(value, config).rotateX
  );
  const rotateY = useTransform(
    progress,
    (value) => mapScrubToSettle(value, config).rotateY
  );
  const scale = useTransform(
    progress,
    (value) => mapScrubToSettle(value, config).scale
  );
  const opacity = useTransform(
    progress,
    (value) => mapScrubToSettle(value, config).opacity
  );
  const filter = useTransform(progress, (value) => {
    const blur = mapScrubToSettle(value, config).blur;
    return `blur(${blur.toFixed(2)}px)`;
  });
  const alignProgress = useTransform(
    progress,
    (value) => mapScrubToSettle(value, config).alignProgress
  );
  const style = {
    x,
    y,
    z,
    rotateX,
    rotateY,
    scale,
    opacity,
    transformPerspective: 1200,
  };

  if (enableBlur) {
    style.filter = filter;
  }

  return {
    style,
    alignProgress,
  };
};

export default useScrubStyle;
