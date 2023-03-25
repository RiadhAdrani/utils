import type { UserConfig } from "vitepress";

const config: UserConfig = {
  themeConfig: {
    siteTitle: "Utils",
    sidebar: [
      {
        items: [
          { text: "Array", link: "./arrays.md", next: "/" },
          { text: "Async", link: "./async.md" },
          { text: "Colors", link: "./colors.md" },
          { text: "Iteration", link: "./iteration.md" },
          { text: "Math", link: "./math.md" },
          { text: "Object", link: "./object.md" },
          { text: "String", link: "./string.md" },
        ],
      },
    ],
  },
  base: "/utility-js/",
};

export default config;
