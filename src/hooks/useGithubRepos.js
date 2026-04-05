import { useEffect, useState } from "react";
import { filterAndNormalizeGithubRepos } from "../utils/github";

const useGithubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!username) {
      setRepos([]);
      setIsLoading(false);
      setIsError(true);
      return undefined;
    }

    let isActive = true;
    const abortController = new AbortController();

    const fetchRepos = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
          {
            signal: abortController.signal,
            headers: {
              Accept: "application/vnd.github+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const payload = await response.json();

        if (!isActive) {
          return;
        }

        setRepos(filterAndNormalizeGithubRepos(payload, username));
      } catch (error) {
        if (!isActive || abortController.signal.aborted) {
          return;
        }

        setRepos([]);
        setIsError(true);
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    fetchRepos();

    return () => {
      isActive = false;
      abortController.abort();
    };
  }, [username]);

  return { repos, isLoading, isError };
};

export default useGithubRepos;

