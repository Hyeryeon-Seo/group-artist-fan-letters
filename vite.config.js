import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: "src", replacement: "/src" }, // 써줘야
			{ find: "styles", replacement: "/src/styles" },
			{ find: "components", replacement: "/src/components" },
			{ find: "pages", replacement: "/src/pages" },
			{ find: "shared", replacement: "/src/shared" },
			{ find: "assets", replacement: "/src/assets" },
		],
	},
});
