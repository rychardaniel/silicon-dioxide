import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],

    // Deploy
    base: "/silicon-dioxide/",

    // Shadcn
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
