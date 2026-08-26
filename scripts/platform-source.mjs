import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const websiteRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * Localiza o app web da plataforma.
 *
 * O submodulo e a fonte oficial (e o que o CI usa). Um checkout irmao serve como
 * alternativa para desenvolver antes de o submodulo existir. Devolve `null`
 * quando nenhum dos dois esta disponivel: a vitrine em /platform/ e opcional, o
 * site precisa continuar buildando sem ela.
 */
export function findPlatformWeb() {
  const candidates = [
    { label: "submodule", root: resolve(websiteRoot, "platform-safety") },
    { label: "sibling checkout", root: resolve(websiteRoot, "..", "platform-safety") },
  ];

  const source = candidates.find((candidate) =>
    existsSync(resolve(candidate.root, "apps", "web", "package.json"))
  );

  if (!source) {
    return { found: false, searched: candidates.map((candidate) => candidate.root) };
  }

  return {
    found: true,
    label: source.label,
    root: source.root,
    web: resolve(source.root, "apps", "web"),
  };
}

export function warnPlatformMissing(step, searched) {
  console.warn(
    `[${step}] platform-safety not found at ${searched.join(" nor at ")}. ` +
      'Skipping the /platform/ demo. Run "git submodule add ' +
      'https://github.com/immersia-dev/platform-safety.git platform-safety" to enable it.'
  );
}
