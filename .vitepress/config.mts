import { link } from "fs";
import { text } from "stream/consumers";
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
      { text: "Cookbook", link: "/cookbook" },
    ],

    sidebar: [
      {
        text: "Main",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      }
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/vein-lang" }],
	footer: {
		message: '',
		copyright: 'Copyright © Vein Project 2020-2024'
	},
	editLink: {
		pattern: ({ filePath }) => {
		  return `https://github.com/vein-lang/docs/edit/master/${filePath}`
		}
	}
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    ru: {
      label: "Russian",
      lang: "ru",
	  themeConfig: {
		nav: [
			{ text: "Главная", link: "/ru" }
		]
	  }
    },
  },
});
