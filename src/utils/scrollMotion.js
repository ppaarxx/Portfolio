const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const lerp = (start, end, amount) => start + (end - start) * amount;

const smoothstep = (edge0, edge1, value) => {
  if (edge0 === edge1) {
    return value < edge0 ? 0 : 1;
  }

  const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

export const mapScrubToSettle = (progress, config = {}) => {
  const {
    entryStart = 0,
    settleStart = 0.52,
    settleEnd = 0.8,
    fromX = 0,
    fromY = 24,
    fromZ = 0,
    fromRotateX = -6,
    fromRotateY = 0,
    fromScale = 0.98,
    fromBlur = 0,
    fromOpacity = 0.8,
  } = config;

  const clampedProgress = clamp(progress, 0, 1);
  const scrubProgress = smoothstep(entryStart, settleStart, clampedProgress);
  const settleProgress = smoothstep(settleStart, settleEnd, clampedProgress);
  const blendProgress = clamp(scrubProgress * 0.82 + settleProgress * 0.18, 0, 1);

  return {
    x: lerp(fromX, 0, blendProgress),
    y: lerp(fromY, 0, blendProgress),
    z: lerp(fromZ, 0, blendProgress),
    rotateX: lerp(fromRotateX, 0, blendProgress),
    rotateY: lerp(fromRotateY, 0, blendProgress),
    scale: lerp(fromScale, 1, blendProgress),
    blur: lerp(fromBlur, 0, blendProgress),
    opacity: lerp(fromOpacity, 1, scrubProgress),
    alignProgress: settleProgress,
    settled: clampedProgress >= settleEnd,
    active: clampedProgress > entryStart && clampedProgress < 1,
  };
};
