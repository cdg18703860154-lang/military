import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function gitValue(...args) {
  try {
    return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return "";
  }
}

const resolvedCommitSha = process.env.CF_PAGES_COMMIT_SHA || process.env.GITHUB_SHA || gitValue("rev-parse", "HEAD");
const commitBound = /^[a-f0-9]{40}$/i.test(resolvedCommitSha);
const deploymentBuild = Boolean(process.env.CF_PAGES || process.env.GITHUB_ACTIONS || process.env.CF_PAGES_COMMIT_SHA || process.env.GITHUB_SHA);
if (deploymentBuild && !commitBound) {
  throw new Error("Unable to resolve the deployed Git commit SHA.");
}
const branch = process.env.CF_PAGES_BRANCH || process.env.GITHUB_REF_NAME || gitValue("branch", "--show-current") || "unknown";
const outputDir = resolve("out");
mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, "deployment-verification.json"), JSON.stringify({
  schemaVersion: 1,
  commitSha: commitBound ? resolvedCommitSha : null,
  commitState: commitBound ? "bound" : "unbound-precommit",
  branch,
  builtAt: new Date().toISOString(),
  provider: process.env.CF_PAGES ? "cloudflare-pages" : process.env.GITHUB_ACTIONS ? "github-actions" : "local-build"
}, null, 2) + "\n", "utf8");
