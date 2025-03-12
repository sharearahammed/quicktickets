import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
// import eslintPlugin from "vite-plugin-eslint"

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    // eslintPlugin({
    //   cache: false, // Disable caching for ESLint (can help with certain issues)
    //   include: ["src/**/*.{js,jsx,ts,tsx}"], // Files to lint
    //   exclude: ["node_modules", "dist"], // Files/folders to exclude
    // }),
  ],
  optimizeDeps: {
    include: ["@mui/material", "@mui/lab"],
  },
  server: {
    host: true,
    port: 3001,
  },
})
