import { useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { FaCodeFork, FaGithub, FaRegClock, FaStar } from "react-icons/fa6";
import { personalInfo, projectItems } from "../constants/data";
import useGithubRepos from "../hooks/useGithubRepos";
import { resetTiltEffect, updateTiltEffect } from "../utils/cardEffects";
import { fadeUp, staggerContainer } from "../utils/motion";
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
        variants={fadeUp}
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
    <section id="projects" className="projects-section section-shell">
      <div className="section-container">
        <SectionLabel index="04" title="projects" />
        <div className="projects-heading-row">
          <SectionHeading text="GitHub Projects" />
          {!isLoading ? <span className="projects-repo-count">{projects.length} repos</span> : null}
        </div>
        <p className={`projects-status ${hasFallback ? "is-warning" : ""}`}>
          {isLoading
            ? "Syncing repositories from GitHub..."
            : hasFallback
              ? "GitHub feed is unavailable right now. Showing curated projects."
              : `Live repositories from github.com/${githubUsername}`}
        </p>

        <motion.div
          className="projects-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {isLoading
            ? renderSkeletons()
            : projects.map((project) => (
                <motion.article
                  key={project.id ?? project.repoUrl ?? project.name}
                  className="project-card card"
                  variants={fadeUp}
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
    </section>
  );
};

export default Projects;

