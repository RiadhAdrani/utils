import type { UserConfig } from "vitepress";

const config: UserConfig = {
  themeConfig: {
    siteTitle: "Utility-js",
    sidebar: [
      {
        items: [
          { text: "Arrays", link: "./arrays.md", next: "/" },
          { text: "Async", link: "./async.md" },
          { text: "Colors", link: "./colors.md" },
          { text: "Iteration", link: "./iteration.md" },
          { text: "Math", link: "./math.md" },
        ],
      },
    ],
  },
  base: "/utility-js/",
};

export default config;
