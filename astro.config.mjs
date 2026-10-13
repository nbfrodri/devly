// @ts-check

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), mdx()],
	i18n: {
		defaultLocale: "es",
		locales: ["es"],
	},
});
