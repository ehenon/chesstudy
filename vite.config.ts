import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Configuration Vite : https://vite.dev/config/
export default defineConfig({
	// Sous-chemin de publication GitHub Pages (https://ehenon.github.io/chesstudy/)
	base: "/chesstudy/",
	plugins: [react(), tailwindcss()],
});
