import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // Set the base path to "./"
  plugins: [react()],
  // Other configuration options...
});
