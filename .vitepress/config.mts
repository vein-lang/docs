import { defineConfig } from "vitepress";

const VEIN_TM_LANGUAGE_SOURCE =
	"https://raw.githubusercontent.com/vein-lang/tmLanguage/master/grammars/vein.tmLanguage.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Vein",
	cleanUrls: true,
	description: "Join the future!",
	markdown: {
		shikiSetup: async (shiki) => {
			const tmLanguage = await fetch(VEIN_TM_LANGUAGE_SOURCE);

			await shiki.loadLanguage({
				aliases: ["vein"],
				...(await tmLanguage.json()),
			});
		},
	},
	sitemap: {
		hostname: "https://www.vein-lang.org/",
	},
	themeConfig: {
		logo: "https://github.com/vein-lang/artwork/blob/master/vein-icon.png?raw=true",
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Examples", link: "/markdown-examples" },
		],

		sidebar: [
			{
				text: "Examples",
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" },
				],
			},
		],

		socialLinks: [{ icon: "github", link: "https://github.com/vein-lang" }],
	},
});
