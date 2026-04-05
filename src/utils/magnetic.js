export const getMagneticOffset = (event, element, strength = 0.3) => {
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;

  return { x: x * strength, y: y * strength };
};
