import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ["box-icon"].includes(tag),
        },
      },
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://zenquotes.io/api/quotes",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
