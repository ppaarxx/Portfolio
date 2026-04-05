const FALLBACK_DESCRIPTION = "Project details are available in the repository README.";
const FALLBACK_LANGUAGE = "Code";

const toTimestamp = (value) => {
  const parsed = Date.parse(value || "");
  return Number.isNaN(parsed) ? 0 : parsed;
};

const normalizeName = (name) => (typeof name === "string" ? name.trim() : "");

export const normalizeGithubRepo = (repo) => {
  const name = normalizeName(repo?.name);
  const updatedAt = repo?.updated_at || null;
  const repoUrl = repo?.html_url || "";

  return {
    id: repo?.id ?? repo?.node_id ?? repoUrl ?? name,
    name,
    description: repo?.description || FALLBACK_DESCRIPTION,
    language: repo?.language || FALLBACK_LANGUAGE,
    stars: Number.isFinite(repo?.stargazers_count) ? repo.stargazers_count : 0,
    forks: Number.isFinite(repo?.forks_count) ? repo.forks_count : 0,
    updatedAt,
    repoUrl,
  };
};

export const filterAndNormalizeGithubRepos = (repos, username) => {
  const normalizedUsername = normalizeName(username).toLowerCase();

  return (Array.isArray(repos) ? repos : [])
    .filter((repo) => {
      const repoName = normalizeName(repo?.name).toLowerCase();
      return (
        !repo?.private &&
        !repo?.fork &&
        repoName &&
        repoName !== normalizedUsername
      );
    })
    .sort((left, right) => toTimestamp(right?.updated_at) - toTimestamp(left?.updated_at))
    .map((repo) => normalizeGithubRepo(repo));
};

