import type { UserConfig } from "vitepress";

const config: UserConfig = {
  themeConfig: {
    siteTitle: "Utility-js",
    sidebar: [{ items: [{ text: "Arrays", link: "./arrays.md" }] }],
  },
  base: "/utility-js/",
};

export default config;
