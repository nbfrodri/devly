// @ts-check

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), mdx()],
	vite: {
		environments: {
			prerender: {
				// Keep Astro's cookie dependency in the prerender bundle with pnpm.
				resolve: { noExternal: ["cookie"] },
			},
		},
	},
	i18n: {
		defaultLocale: "es",
		locales: ["es"],
	},
});
