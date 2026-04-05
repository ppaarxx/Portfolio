import { AnimatePresence, motion } from "framer-motion";

const letters = ["P", "M", "P"];

const Loader = ({ show }) => (
  <AnimatePresence>
    {show ? (
      <motion.div
        className="loader-shell"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.2, transition: { duration: 0.4 } }}
      >
        <div className="loader-mark">
          <div className="loader-letters">
            {letters.map((letter, index) => (
              <motion.span
                key={letter + index}
                className="loader-letter"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.15, duration: 0.45 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <svg className="loader-ring" viewBox="0 0 100 100" aria-hidden="true">
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#loaderGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, rotate: -90 }}
              animate={{ pathLength: 1, rotate: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            />
            <defs>
              <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>
    ) : null}
  </AnimatePresence>
);

export default Loader;
