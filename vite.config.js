import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    origin: "http://localhost:5173",
    open: true,
    proxy: {
      "/local": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/local/, ""),
      },
    },
    cors: false,
  },
});
