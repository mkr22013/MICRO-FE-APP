import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    federation({
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
        home: "http://localhost:5001/dist/assets/remoteEntry.js",
        pdp: "http://localhost:5002/dist/assets/remoteEntry.js",
        cart: "http://localhost:5003/dist/assets/remoteEntry.js",
      },
      exposes: {
        "./Header": "./src/components/Header/Header.jsx",
        "./Footer": "./src/components/Footer/Footer.jsx",
        "./Products": "././service/products.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
