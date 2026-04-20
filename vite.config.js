import { defineConfig } from "vite";

export default defineConfig({
  // Use repository subpath only in GitHub Actions Pages builds.
  base: process.env.GITHUB_ACTIONS ? "/portfolio/" : "/",
});
