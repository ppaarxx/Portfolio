import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  test("renders live repositories from GitHub when fetch succeeds", async () => {
    const fetchSpy = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        {
          id: 1,
          name: "ppaarxx",
          fork: false,
          private: false,
          updated_at: "2026-04-01T12:00:00Z",
          html_url: "https://github.com/ppaarxx/ppaarxx",
        },
        {
          id: 2,
          name: "LiveRepoOne",
          fork: false,
          private: false,
          description: "Live repo one",
          language: "TypeScript",
          stargazers_count: 4,
          forks_count: 1,
          updated_at: "2026-04-02T12:00:00Z",
          html_url: "https://github.com/ppaarxx/LiveRepoOne",
        },
        {
          id: 3,
          name: "ForkRepo",
          fork: true,
          private: false,
          updated_at: "2026-04-03T12:00:00Z",
          html_url: "https://github.com/ppaarxx/ForkRepo",
        },
      ],
    });
    global.fetch = fetchSpy;

    render(<Projects isMobile />);

    expect(document.querySelector(".projects-grid")).toBeInTheDocument();
    expect(document.querySelector(".projects-rail")).not.toBeInTheDocument();
    expect(
      await screen.findByText(/live repositories from github\.com\/ppaarxx/i)
    ).toBeInTheDocument();
    expect(await screen.findByText("LiveRepoOne")).toBeInTheDocument();
    expect(screen.queryByText("ForkRepo")).not.toBeInTheDocument();

    const repoLink = await screen.findByRole("link", {
      name: /open liverepoone repository on github/i,
    });
    expect(repoLink).toHaveAttribute("href", "https://github.com/ppaarxx/LiveRepoOne");

    expect(fetchSpy).toHaveBeenCalledWith(
      "https://api.github.com/users/ppaarxx/repos?per_page=100&sort=updated",
      expect.objectContaining({
        headers: { Accept: "application/vnd.github+json" },
      })
    );
  });

  test("creates fallback repository URL when GitHub payload misses html_url", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        {
          id: 4,
          name: "NoUrlRepo",
          fork: false,
          private: false,
          description: "No URL in API response",
          language: "Python",
          stargazers_count: 0,
          forks_count: 0,
          updated_at: "2026-04-04T12:00:00Z",
          html_url: "",
        },
      ],
    });

    render(<Projects isMobile />);

    const repoLink = await screen.findByRole("link", {
      name: /open nourlrepo repository on github/i,
    });
    expect(repoLink).toHaveAttribute("href", "https://github.com/ppaarxx/NoUrlRepo");
  });

  test("falls back to curated projects when GitHub fetch fails", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

    render(<Projects isMobile />);

    expect(
      await screen.findByText(/github feed is unavailable right now/i)
    ).toBeInTheDocument();
    expect(screen.getByText("Research Assistant Agent")).toBeInTheDocument();
  });
});
