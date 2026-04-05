import { useCallback, useEffect, useState } from "react";

const getActiveSection = (ids) => {
  const marker = window.innerHeight * 0.35;
  const sections = ids
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  let active = ids[0];

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= marker && rect.bottom >= marker) {
      active = section.id;
    }
  });

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    active = ids[ids.length - 1];
  }

  return active;
};

const useScrollProgress = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateValues = useCallback(() => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    setScrollProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    setActiveSection(getActiveSection(sectionIds));
  }, [sectionIds]);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateValues);
    };

    updateValues();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateValues]);

  return { activeSection, scrollProgress };
};

export default useScrollProgress;
