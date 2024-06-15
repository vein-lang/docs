import { link } from "fs";
import { text } from "stream/consumers";
import { defineConfig } from "vitepress";

const VEIN_TM_LANGUAGE_SOURCE =
  "https://raw.githubusercontent.com/vein-lang/tmLanguage/master/grammars/vein.tmLanguage.json";

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
    nav: [
      { text: "Home", link: "/" },
      { text: "Cookbook", link: "/api/threading" },
    ],

    sidebar: [
      {
        text: "Main",
        items: [
          { text: "Begin", link: "/begin" }
        ],
      },
      {
        text: "Api",
        items: [
          { text: "Threading", link: "/api/threading" },
          { text: "Promises", link: "/api/promises" },
          { text: "Network", link: "/api/network" },
          {
            text: "Collections",
            items: [
              { text: "List", link: "/api/collections/list" },
              { text: "Map", link: "/api/collections/map" },
              { text: "Queue", link: "/api/collections/queue" },
              { text: "Stack", link: "/api/collections/stack" },
            ],
          }
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
