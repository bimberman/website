import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  define: {
    "process.env.VITE_API_URL": JSON.stringify(
      process.env.VITE_API_URL || "http://localhost:5173" // Using Vite's default port
    ),
    "process.env.VITE_ENV": JSON.stringify(
      process.env.VITE_ENV || "development"
    ),
  },
});
