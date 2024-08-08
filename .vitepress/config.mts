import { defineConfig } from "vitepress";

const VEIN_TM_LANGUAGE_SOURCE =
  "https://raw.githubusercontent.com/vein-lang/tmLanguage/master/grammars/vein.tmLanguage.json";

const masterSideBar = [
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
    text: "Docs",
    items: [
      { text: "Standard library", link: "/api/index" },
      { text: "Language Reference", link: "/book/tutor/introduction" },
    ],
  }
]

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
      "link",
      { rel: "icon", href: "https://gallery.vein-lang.org/favicon.ico" },
    ],
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
    sidebar: {
      '/': [
        ...masterSideBar
      ],
      '/api/':  [
        ...masterSideBar,
        {
          text: "Standard library",
          items: [
            {
              text: "IO",
              items: [
                { text: "Threading", link: "/api/io/threading" },
                { text: "Sync", link: "/api/io/sync" },
                { text: "File", link: "/api/io/file" },
              ],
            },
            {
              text: "Async",
              items: [{ text: "Promises", link: "/api/async/promises" }],
            },
            {
              text: "Network",
              items: [
                { text: "Dns", link: "/api/network/dns" },
                { text: "IP", link: "/api/network/ip" },
                { text: "Sockets", link: "/api/network/socket" },
              ],
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
              items: [{ text: "Regex", link: "/api/utils/regex" }],
            },
          ],
        }
      ],
      '/book/':  [
        ...masterSideBar,
        {
          text: "Language Reference",
          items: [
            {
              text: "New",
              items: [
                { text: "<div style='color: #4b4949;'>In v0.30</div>", link: "/book/tutor/todo" },
              ],
            },
            {
              text: "Tutotrial",
              items: [
                { text: "Introduction", link: "/book/tutor/introduction" },
                { text: "Run your first program", link: "/book/tutor/runfirstprogram" },
                { text: "Declare and use variables", link: "/book/tutor/declaration" },
                { text: "Work with strings", link: "/book/tutor/strings" },
                { text: "Primitives", link: "/book/tutor/primitives" },
                { text: "Numbers Precision", link: "/book/tutor/precision" },
                { text: "Numbers Math", link: "/book/tutor/math" },
                { text: "Branches", link: "/book/tutor/branches" },
                { text: "Loops", link: "/book/tutor/loops" },
                { text: "Collections", link: "/book/tutor/collections" },
                { text: "Type System", link: "/book/tutor/type-system" },
                { text: "Type aliases", link: "/book/tutor/type-aliases" },
                { text: "Namespaces", link: "/book/tutor/namespaces" },
                { text: "Fields and Properties", link: "/book/tutor/fields" },
                { text: "This and Self", link: "/book/tutor/this_and_self" },
                { text: "Methods and operators", link: "/book/tutor/methods" },
                { text: "<div style='color: #4b4949;'>Classes, structs</div>", link: "/book/tutor/todo" },
                { text: "<div style='color: #4b4949;'>Generics</div>", link: "/book/tutor/todo" },
                { text: "<div style='color: #4b4949;'>Polymorphism</div>", link: "/book/tutor/todo" },
                { text: "Exceptions and errors", link: "/book/tutor/exceptions" },
                { text: "Asynchronous", link: "/book/tutor/async" },
                { text: "Quantum", link: "/book/tutor/qunatum" },
                { text: "<div style='color: #4b4949;'>CUDA and computed shaders</div>", link: "/book/tutor/todo" },
              ],
            }
          ],
        }
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/vein-lang" }],
    editLink: {
      pattern: ({ filePath }) => {
        return `https://github.com/vein-lang/docs/edit/master/${filePath}`;
      },
    },
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
  },
  metaChunk: true,
  ignoreDeadLinks: true,
});
