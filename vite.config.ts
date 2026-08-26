import { copyFileSync, existsSync } from "node:fs";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Sub-apps embarcados (submodulos) sao servidos como estaticos em public/;
// no dev server o diretorio precisa cair no index.html correspondente.
const embeddedApps = ["demo-startup-summit", "platform"];

const serveEmbeddedAppIndexes = (): Plugin => ({
  name: "serve-embedded-app-indexes",
  configureServer(server) {
    server.middlewares.use((request, _response, next) => {
      const [pathname, query] = (request.url ?? "").split("?", 2);

      for (const app of embeddedApps) {
        if (pathname === `/${app}` || pathname === `/${app}/`) {
          request.url = `/${app}/index.html${query ? `?${query}` : ""}`;
          break;
        }
      }

      next();
    });
  },
});

// GitHub Pages has no SPA rewrite, so /privacy and /terms only resolve when a
// 404.html with the same shell is present (Pages serves it with the URL intact).
const emitSpaFallback = (): Plugin => ({
  name: "emit-spa-404-fallback",
  apply: "build",
  closeBundle() {
    const indexPath = path.resolve(import.meta.dirname, "dist/index.html");

    if (existsSync(indexPath)) {
      copyFileSync(indexPath, path.resolve(import.meta.dirname, "dist/404.html"));
    }
  },
});

export default defineConfig({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [serveEmbeddedAppIndexes(), react(), emitSpaFallback()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  }});
