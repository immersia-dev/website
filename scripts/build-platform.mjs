import { spawnSync } from "node:child_process";
import { cpSync, existsSync, rmSync } from "node:fs";
import { resolve, sep } from "node:path";

import { findPlatformWeb, warnPlatformMissing, websiteRoot } from "./platform-source.mjs";

const publicRoot = resolve(websiteRoot, "public");
const outputDir = resolve(publicRoot, "platform");
const platformBase = "/platform/";

const source = findPlatformWeb();

// Sem o app da plataforma o site ainda sobe, so que sem a vitrine em /platform/.
if (!source.found) {
  warnPlatformMissing("build:platform", source.searched);
  process.exit(0);
}

const platformWeb = source.web;
const platformDist = resolve(platformWeb, "dist");

console.log(`[build:platform] Using the ${source.label} at ${source.root}`);

// A vitrine roda sem backend: dados mockados em memoria e rotas em hash, ja que
// o GitHub Pages nao reescreve deep links para o index.html do sub-app.
// Comando como string unica: com `shell: true`, passar argv separado dispara o
// aviso de depreciacao DEP0190 do Node.
const result = spawnSync(`npm run build -- --base=${platformBase}`, {
  cwd: platformWeb,
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    VITE_DEMO_MODE: "true",
    VITE_ROUTER: "hash",
  },
});

if (result.error) {
  throw result.error;
}

if (result.status !== 0) {
  throw new Error(`Platform build failed with exit code ${result.status}.`);
}

if (!existsSync(platformDist)) {
  throw new Error(`Platform build not found at ${platformDist}.`);
}

if (!outputDir.startsWith(`${publicRoot}${sep}`)) {
  throw new Error(`Refusing to replace a directory outside ${publicRoot}.`);
}

rmSync(outputDir, { recursive: true, force: true });
cpSync(platformDist, outputDir, { recursive: true });

console.log(`Platform demo synced to ${outputDir}`);
