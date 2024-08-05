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
  head: [
    [
      'link', { rel: 'icon', href: '/favicon.ico' }
    ]
  ],
  sitemap: {
    hostname: "https://www.vein-lang.org/",
  },
  themeConfig: {
    logo: "https://github.com/vein-lang/artwork/blob/master/vein-icon.png?raw=true",
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Starter", link: "/getstart" },
    ],

    sidebar: [
      {
        text: "Main",
        items: [
          { text: "Getting Start", link: "/getstart" },
          { text: "Installation", link: "/install" },
          { text: "First Project", link: "/newproject" },
          { text: "Publish", link: "/etc/publish" },
        ],
      },
      {
        text: "Standard library",
        items: [
          {
            text: "IO",
            items: [
              { text: "Threading", link: "/api/io/threading" },
              { text: "Sync", link: "/api/io/sync" },
              { text: "File", link: "/api/io/file" },
            ]
          },
          {
            text: "Async",
            items: [
              { text: "Promises", link: "/api/async/promises" },

            ]
          },
          {
            text: "Network",
            items: [
              { text: "Dns", link: "/api/network/dns" },
              { text: "IP", link: "/api/network/ip" },
              { text: "Sockets", link: "/api/network/socket" },

            ]
          },
          {
            text: "Collections",
            items: [
              { text: "List", link: "/api/collections/list" },
              { text: "Map", link: "/api/collections/map" },
              { text: "Queue", link: "/api/collections/queue" },
              { text: "Stack", link: "/api/collections/stack" },
            ],
          },
          {
            text: "Utils",
            items: [
              { text: "Regex", link: "/api/utils/regex" }
            ],
          }
        ],
      }
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/vein-lang" }],
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
    }
  },
});
