import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

import { findPlatformWeb, warnPlatformMissing } from "./platform-source.mjs";

const source = findPlatformWeb();

if (!source.found) {
  warnPlatformMissing("setup:platform", source.searched);
  process.exit(0);
}

console.log(`[setup:platform] Using the ${source.label} at ${source.root}`);

// `npm ci` exige o lockfile; sem ele (submodulo raso, por exemplo) caimos para
// `npm install` em vez de derrubar o build inteiro.
const hasLockfile = existsSync(resolve(source.web, "package-lock.json"));

if (!hasLockfile) {
  console.warn(
    "[setup:platform] No package-lock.json found; falling back to `npm install`."
  );
}

const result = spawnSync(hasLockfile ? "npm ci" : "npm install", {
  cwd: source.web,
  stdio: "inherit",
  shell: true,
});

if (result.error) {
  throw result.error;
}

if (result.status !== 0) {
  throw new Error(`Platform dependency install failed with exit code ${result.status}.`);
}
