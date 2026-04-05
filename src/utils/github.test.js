import {
  filterAndNormalizeGithubRepos,
  normalizeGithubRepo,
} from "./github";

describe("normalizeGithubRepo", () => {
  test("normalizes a GitHub repository payload into project-card shape", () => {
    const result = normalizeGithubRepo({
      id: 42,
      name: "RepoOne",
      description: "Demo project",
      language: "JavaScript",
      stargazers_count: 12,
      forks_count: 3,
      updated_at: "2026-03-10T10:00:00Z",
      html_url: "https://github.com/example/RepoOne",
    });

    expect(result).toEqual({
      id: 42,
      name: "RepoOne",
      description: "Demo project",
      language: "JavaScript",
      stars: 12,
      forks: 3,
      updatedAt: "2026-03-10T10:00:00Z",
      repoUrl: "https://github.com/example/RepoOne",
    });
  });

  test("applies safe fallbacks for missing fields", () => {
    const result = normalizeGithubRepo({
      name: "NoMetaRepo",
      html_url: "https://github.com/example/NoMetaRepo",
    });

    expect(result.description).toMatch(/project details/i);
    expect(result.language).toBe("Code");
    expect(result.stars).toBe(0);
    expect(result.forks).toBe(0);
  });
});

describe("filterAndNormalizeGithubRepos", () => {
  test("filters out forks/profile repo and sorts by recent updates", () => {
    const result = filterAndNormalizeGithubRepos(
      [
        {
          id: 1,
          name: "ppaarxx",
          fork: false,
          private: false,
          updated_at: "2026-03-20T00:00:00Z",
          html_url: "https://github.com/ppaarxx/ppaarxx",
        },
        {
          id: 2,
          name: "MainProject",
          fork: false,
          private: false,
          language: "Python",
          stargazers_count: 8,
          forks_count: 1,
          updated_at: "2026-03-21T00:00:00Z",
          html_url: "https://github.com/ppaarxx/MainProject",
        },
        {
          id: 3,
          name: "ForkedRepo",
          fork: true,
          private: false,
          updated_at: "2026-03-22T00:00:00Z",
          html_url: "https://github.com/ppaarxx/ForkedRepo",
        },
        {
          id: 4,
          name: "OlderProject",
          fork: false,
          private: false,
          updated_at: "2026-03-01T00:00:00Z",
          html_url: "https://github.com/ppaarxx/OlderProject",
        },
      ],
      "ppaarxx"
    );

    expect(result.map((repo) => repo.name)).toEqual(["MainProject", "OlderProject"]);
    expect(result[0].repoUrl).toBe("https://github.com/ppaarxx/MainProject");
  });
});

