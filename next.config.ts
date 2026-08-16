const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/portfolio-site";

export default isGitHubPages
  ? {
      assetPrefix: githubPagesBasePath,
      images: { unoptimized: true },
      output: "export" as const,
      trailingSlash: true,
    }
  : {};
