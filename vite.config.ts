import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const serveStartupSummitDemo = (): Plugin => ({
  name: "serve-startup-summit-demo-index",
  configureServer(server) {
    server.middlewares.use((request, _response, next) => {
      const [pathname, query] = (request.url ?? "").split("?", 2);

      if (pathname === "/demo-startup-summit" || pathname === "/demo-startup-summit/") {
        request.url = `/demo-startup-summit/index.html${query ? `?${query}` : ""}`;
      }

      next();
    });
  },
});

export default defineConfig({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [serveStartupSummitDemo(), react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  }});
