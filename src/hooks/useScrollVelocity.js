import { useEffect, useState } from "react";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export const computeVelocityState = ({
  previousVelocity,
  deltaY,
  deltaTime,
  smoothing = 0.18,
  maxVelocity = 2.4,
}) => {
  const safeDeltaTime = Math.max(deltaTime, 1);
  const instantaneousVelocity = deltaY / safeDeltaTime;
  const velocity =
    previousVelocity + (instantaneousVelocity - previousVelocity) * smoothing;

  return {
    velocity,
    normalizedVelocity: clamp(Math.abs(velocity) / maxVelocity, 0, 1),
    signedNormalizedVelocity: clamp(velocity / maxVelocity, -1, 1),
  };
};

const useScrollVelocity = ({ smoothing = 0.18, maxVelocity = 2.4 } = {}) => {
  const [state, setState] = useState({
    velocity: 0,
    normalizedVelocity: 0,
    signedNormalizedVelocity: 0,
  });

  useEffect(() => {
    let frame = 0;
    let lastY = window.scrollY;
    let lastTime = performance.now();
    let smoothedVelocity = 0;

    const tick = () => {
      const now = performance.now();
      const currentY = window.scrollY;
      const velocityState = computeVelocityState({
        previousVelocity: smoothedVelocity,
        deltaY: currentY - lastY,
        deltaTime: now - lastTime,
        smoothing,
        maxVelocity,
      });

      smoothedVelocity = velocityState.velocity;
      setState(velocityState);
      lastY = currentY;
      lastTime = now;
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [maxVelocity, smoothing]);

  return state;
};

export default useScrollVelocity;

