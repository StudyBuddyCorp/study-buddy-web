import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { analyzer } from "vite-bundle-analyzer";

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    reactMarkdown: ["react-markdown"],
                    reduxToolkit: ["@reduxjs/toolkit"],
                    accordion: ["@radix-ui/react-accordion"],
                    toast: ["@radix-ui/react-toast"],
                },
            },
        },
    },
    plugins: [
        analyzer({
            analyzerMode: "json",
        }),
        react(),
        VitePWA({
            registerType: "autoUpdate",
            injectRegister: "auto",
            workbox: {
                globPatterns: [
                    "**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}",
                ],
            },
            manifest: {
                lang: "ru",
                name: "Study Buddy",
                short_name: "Study Buddy",
                description: "Study Buddy",
                background_color: "#f2f2f2",
                theme_color: "#f2f2f2",
                display: "standalone",
                icons: [
                    {
                        src: "icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "maskable",
                    },
                    {
                        src: "icons/icon-256x256.png",
                        sizes: "256x256",
                        type: "image/png",
                    },
                    {
                        src: "icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
