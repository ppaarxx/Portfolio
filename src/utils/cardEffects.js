export const updateTiltEffect = (event, element, options = {}) => {
  if (!element) {
    return;
  }

  const { maxTilt = 10, perspective = 600, scale = 1.02 } = options;
  const rect = element.getBoundingClientRect();
  const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -maxTilt * 2;
  const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * maxTilt * 2;
  const glareX = ((event.clientX - rect.left) / rect.width) * 100;
  const glareY = ((event.clientY - rect.top) / rect.height) * 100;

  element.style.setProperty("--glare-x", `${glareX}%`);
  element.style.setProperty("--glare-y", `${glareY}%`);
  element.style.transform = `perspective(${perspective}px) rotateX(${rotateX.toFixed(
    2
  )}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale})`;
};

export const resetTiltEffect = (element) => {
  if (!element) {
    return;
  }

  element.style.transform =
    "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
  element.style.setProperty("--glare-x", "50%");
  element.style.setProperty("--glare-y", "50%");
};
