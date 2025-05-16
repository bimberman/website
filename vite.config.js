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
      process.env.VITE_API_URL || "http://localhost:5173" // Using port 5253 to match the PDF Reader project port from projects.ts
    ),
    "process.env.VITE_ENV": JSON.stringify(
      process.env.VITE_ENV || "development"
    ),
  },
});
