import type { UserConfig } from "vitepress";

const config: UserConfig = {
  themeConfig: {
    siteTitle: "Utility-js",
    sidebar: [
      {
        items: [
          { text: "Arrays", link: "./arrays.md" },
          { text: "Async", link: "./async.md" },
          { text: "Colors", link: "./colors.md" },
        ],
      },
    ],
  },
  base: "/utility-js/",
};

export default config;
