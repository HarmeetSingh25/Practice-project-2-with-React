import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// no tailwind import here

export default defineConfig({
  plugins: [react(),],
  base: "/Practice-project-2-with-React/",
});
