import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { navItems, personalInfo } from "../constants/data";

const Navbar = ({ activeSection, progress, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScrollState = useCallback(
    () => setIsScrolled(window.scrollY > 50),
    []
  );

  useEffect(() => {
    handleScrollState();
    window.addEventListener("scroll", handleScrollState, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollState);
  }, [handleScrollState]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const handleNavigate = useCallback(
    (id) => {
      onNavigate(id);
      setIsOpen(false);
    },
    [onNavigate]
  );

  const toggleMenu = useCallback(() => setIsOpen((value) => !value), []);

  return (
    <header className={`navbar-shell ${isScrolled ? "is-scrolled" : ""}`}>
      <motion.span
        className="navbar-progress"
        style={{ scaleX: progress, transformOrigin: "0% 50%" }}
      />
      <div className="navbar-inner">
        <button
          type="button"
          className="navbar-logo"
          onClick={() => handleNavigate("home")}
          aria-label={`${personalInfo.initials} home`}
          data-cursor="interactive"
        >
          {personalInfo.initials}
        </button>

        <nav className="navbar-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`navbar-link ${activeSection === item.id ? "is-active" : ""}`}
              onClick={() => handleNavigate(item.id)}
              data-cursor="interactive"
            >
              <span className="navbar-link-dot" />
              <span>{item.label}</span>
              <span className="navbar-link-underline" />
            </button>
          ))}
        </nav>

        <button
          type="button"
          className={`navbar-toggle ${isOpen ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          data-cursor="interactive"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mobile-nav-panel"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  className="mobile-nav-link"
                  onClick={() => handleNavigate(item.id)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: index * 0.08 }}
                  data-cursor="interactive"
                >
                  <span className="mobile-nav-index">0{index + 1}</span>
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
