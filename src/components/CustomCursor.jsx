import useCursorPosition from "../hooks/useCursorPosition";

const CustomCursor = ({ enabled }) => {
  const { position, variant, pressed, stretch, visible } = useCursorPosition(enabled);

  if (!enabled) {
    return null;
  }

  const ringScale =
    variant === "interactive"
      ? { x: 2.2, y: 2.2 }
      : variant === "text"
        ? { x: 1.8, y: 0.3 }
        : { x: 1, y: 1 };
  const glowScale = variant === "interactive" ? 1.5 : 1;
  const dotScale = pressed ? 3 : variant === "interactive" ? 0 : 1;
  const dotOpacity = variant === "interactive" ? 0 : 1;
  const translate = `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`;

  return (
    <div className={`cursor-shell ${visible ? "is-visible" : ""}`} aria-hidden="true">
      <div
        className="cursor-glow"
        style={{ transform: `${translate} scale(${glowScale})` }}
      />
      <div
        className={`cursor-ring ${variant === "interactive" ? "is-hovering" : ""}`}
        style={{
          transform: `${translate} scaleX(${ringScale.x * stretch.x}) scaleY(${
            ringScale.y * stretch.y
          })`,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          opacity: dotOpacity,
          transform: `${translate} scale(${dotScale})`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
