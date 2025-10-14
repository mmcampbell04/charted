import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": resolve(fileURLToPath(new URL("./src", import.meta.url))),
    },
  },

  plugins: [react()],
});
