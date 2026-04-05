import { useCallback, useMemo, useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { FaCodeFork, FaGithub, FaRegClock, FaStar } from "react-icons/fa6";
import { personalInfo, projectItems } from "../constants/data";
import useGithubRepos from "../hooks/useGithubRepos";
import useScrubStyle from "../hooks/useScrubStyle";
import useSectionScrollTimeline from "../hooks/useSectionScrollTimeline";
import { resetTiltEffect, updateTiltEffect } from "../utils/cardEffects";
import { mapScrubToSettle } from "../utils/scrollMotion";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";

const SKELETON_COUNT = 6;

const formatDate = (isoDate) => {
  if (!isoDate) {
    return "Recently updated";
  }

  const date = new Date(isoDate);

  if (Number.isNaN(date.getTime())) {
    return "Recently updated";
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const getGithubUsername = (url) =>
  (url || "")
    .replace(/\/+$/, "")
    .split("/")
    .filter(Boolean)
    .pop();

const isValidRepoUrl = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
};

const resolveRepoUrl = (project, username) => {
  if (isValidRepoUrl(project?.repoUrl)) {
    return project.repoUrl;
  }

  if (project?.name) {
    return `https://github.com/${username}/${encodeURIComponent(project.name)}`;
  }

  return `https://github.com/${username}`;
};

const Projects = ({ isMobile }) => {
  const sectionRef = useRef(null);
  const { progress, isActiveZone, isSettled, reducedMotion } = useSectionScrollTimeline({
    targetRef: sectionRef,
    pin: true,
    offsets: ["start start", "end end"],
  });
  const settleProgress = useTransform(progress, (value) =>
    mapScrubToSettle(value, { settleStart: 0.34, settleEnd: 0.6 }).alignProgress
  );
  const headingMotion = useScrubStyle(progress, {
    entryStart: 0.02,
    settleStart: 0.24,
    settleEnd: 0.48,
    fromX: -20,
    fromY: 22,
    fromScale: 0.985,
    fromRotateX: -4,
  });
  const gridMotion = useScrubStyle(progress, {
    entryStart: 0.06,
    settleStart: 0.3,
    settleEnd: 0.6,
    fromY: 44,
    fromZ: -24,
    fromScale: 0.97,
    fromRotateX: -4,
    fromRotateY: 3,
    fromOpacity: 0.82,
  });
  const githubUsername = useMemo(() => getGithubUsername(personalInfo.github), []);
  const { repos, isLoading, isError } = useGithubRepos(githubUsername);
  const projects = repos.length ? repos : projectItems;
  const hasFallback = !isLoading && (isError || !repos.length);

  const handleMove = useCallback(
    (event) => {
      if (!isMobile) {
        updateTiltEffect(event, event.currentTarget, {
          maxTilt: 10,
          perspective: 920,
          scale: 1.012,
        });
      }
    },
    [isMobile]
  );

  const handleLeave = useCallback(
    (event) => {
      if (!isMobile) {
        resetTiltEffect(event.currentTarget);
      }
    },
    [isMobile]
  );

  const renderSkeletons = () =>
    Array.from({ length: SKELETON_COUNT }, (_, index) => (
      <motion.article
        key={`project-skeleton-${index}`}
        className="project-card project-card-skeleton card"
      >
        <span className="project-accent-bar" />
        <div className="skeleton-line short" />
        <div className="skeleton-line medium" />
        <div className="skeleton-line full" />
        <div className="skeleton-line full" />
        <div className="skeleton-line short" />
      </motion.article>
    ));

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className={`projects-section section-shell scrub-section ${
        reducedMotion ? "" : "pin-shell"
      } ${
        isActiveZone ? "is-active-zone" : ""
      } ${isSettled ? "is-settled" : ""}`}
      style={{ "--scrub-settle-progress": reducedMotion ? 1 : settleProgress }}
    >
      <div className={`${reducedMotion ? "projects-pin-stage projects-no-pin-stage" : "pin-stage projects-pin-stage"}`}>
        <div className="section-container">
          <motion.div style={reducedMotion ? undefined : headingMotion.style}>
            <SectionLabel index="04" title="projects" />
            <div className="projects-heading-row">
              <SectionHeading text="GitHub Projects" />
              {!isLoading ? (
                <span className="projects-repo-count">{projects.length} repos</span>
              ) : null}
            </div>
            <p className={`projects-status ${hasFallback ? "is-warning" : ""}`}>
              {isLoading
                ? "Syncing repositories from GitHub..."
                : hasFallback
                  ? "GitHub feed is unavailable right now. Showing curated projects."
                  : `Live repositories from github.com/${githubUsername}`}
            </p>
          </motion.div>

          <motion.div className="projects-grid" style={reducedMotion ? undefined : gridMotion.style}>
            {isLoading
              ? renderSkeletons()
              : projects.map((project) => (
                  <motion.article
                    key={project.id ?? project.repoUrl ?? project.name}
                    className="project-card card"
                    onMouseMove={handleMove}
                    onMouseLeave={handleLeave}
                    whileHover={{ y: -6, scale: 1.01 }}
                    data-cursor="interactive"
                  >
                    <span className="project-accent-bar" />
                    <div className="project-meta">
                      <h3>{project.name}</h3>
                      <p>{project.language}</p>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-stats">
                      <span>
                        <FaStar />
                        {project.stars}
                      </span>
                      <span>
                        <FaCodeFork />
                        {project.forks}
                      </span>
                      <span>
                        <FaRegClock />
                        {formatDate(project.updatedAt)}
                      </span>
                    </div>
                    <div className="project-links">
                      <a
                        href={resolveRepoUrl(project, githubUsername)}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`Open ${project.name} repository on GitHub`}
                      >
                        <FaGithub />
                        <span>Repository</span>
                      </a>
                    </div>
                  </motion.article>
                ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
