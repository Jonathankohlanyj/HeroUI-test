import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { heroui } from "@heroui/vite";

export default defineConfig({
  plugins: [
    react(),
    heroui()
  ],
  base: "./"
});
