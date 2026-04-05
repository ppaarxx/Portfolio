import { useCallback, useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [data-cursor='interactive'], .card, .project-card, .timeline-card, .skill-pill";
const TEXT_SELECTOR = "h1, h2, h3, [data-cursor='text']";

const useCursorPosition = (enabled) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [variant, setVariant] = useState("default");
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [stretch, setStretch] = useState({ x: 1, y: 1 });
  const resetTimeoutRef = useRef(null);
  const lastScrollRef = useRef({ y: 0, time: 0 });
  const pressTimeoutRef = useRef(null);

  const clearStretch = useCallback(() => {
    window.clearTimeout(resetTimeoutRef.current);
    resetTimeoutRef.current = window.setTimeout(
      () => setStretch({ x: 1, y: 1 }),
      140
    );
  }, []);

  const handleMove = useCallback((event) => {
    setPosition({ x: event.clientX, y: event.clientY });
    setVisible(true);
  }, []);

  const handleOver = useCallback((event) => {
    const target = event.target;

    if (target.closest(TEXT_SELECTOR)) {
      setVariant("text");
      return;
    }

    setVariant(target.closest(INTERACTIVE_SELECTOR) ? "interactive" : "default");
  }, []);

  const handleDown = useCallback(() => {
    window.clearTimeout(pressTimeoutRef.current);
    setPressed(true);
    pressTimeoutRef.current = window.setTimeout(() => setPressed(false), 180);
  }, []);

  const handleScroll = useCallback(() => {
    const now = Date.now();
    const delta = window.scrollY - lastScrollRef.current.y;
    const deltaTime = now - lastScrollRef.current.time || 16;
    const velocity = Math.abs(delta / deltaTime);

    if (velocity > 0.6) {
      setStretch(delta > 0 ? { x: 0.88, y: 1.5 } : { x: 1.08, y: 0.72 });
      clearStretch();
    }

    lastScrollRef.current = { y: window.scrollY, time: now };
  }, [clearStretch]);

  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      return undefined;
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(pressTimeoutRef.current);
      window.clearTimeout(resetTimeoutRef.current);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [enabled, handleDown, handleMove, handleOver, handleScroll]);

  return { position, variant, pressed, stretch, visible };
};

export default useCursorPosition;
