import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  define: {
    "process.env.VITE_API_URL": JSON.stringify(
      process.env.VITE_API_URL || "http://192.168.1.79:5253"
    ),
    "process.env.VITE_ENV": JSON.stringify(
      process.env.VITE_ENV || "development"
    ),
  },
});
