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
      name: "cart",
      remotes: {
        home: "http://localhost:5001/dist/assets/remoteEntry.js",
        pdp: "http://localhost:5173/dist/assets/remoteEntry.js",
        cart: "http://localhost:5174/dist/assets/remoteEntry.js",
      },
      exposes: {
        "./cart": "./src/components/Cart/cart.js",
        "./MiniCart": "./src/components/Cart/MiniCart.jsx",
        "./Login": "./src/components/Login/Login.jsx",
        "./CartContent": "./src/components/Cart/CartContent.jsx",
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
