import {
  cpSync,
  existsSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const websiteRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const demoDist = resolve(websiteRoot, "demo-startup-summit", "dist");
const publicRoot = resolve(websiteRoot, "public");
const outputDir = resolve(publicRoot, "demo-startup-summit");
const demoBase = "/demo-startup-summit";

if (!existsSync(demoDist)) {
  throw new Error(`Demo build not found at ${demoDist}. Run npm run setup:demo first.`);
}

if (!outputDir.startsWith(`${publicRoot}${sep}`)) {
  throw new Error(`Refusing to replace a directory outside ${publicRoot}.`);
}

rmSync(outputDir, { recursive: true, force: true });
cpSync(demoDist, outputDir, { recursive: true });

const textExtensions = new Set([".css", ".html", ".js"]);
const rootAssetPath = /(?<![A-Za-z0-9_-])\/(assets|scripts|lib|styles)\//g;

function rewriteAssetPaths(directory) {
  for (const entry of readdirSync(directory)) {
    const filePath = resolve(directory, entry);

    if (statSync(filePath).isDirectory()) {
      rewriteAssetPaths(filePath);
      continue;
    }

    if (!textExtensions.has(extname(filePath))) continue;

    const original = readFileSync(filePath, "utf8");
    const rewritten = original.replace(rootAssetPath, `${demoBase}/$1/`);

    if (rewritten !== original) {
      writeFileSync(filePath, rewritten, "utf8");
    }
  }
}

rewriteAssetPaths(outputDir);

console.log(`Startup Summit demo synced to ${outputDir}`);
