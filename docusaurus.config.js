// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here.

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hossein Simchi",
  tagline: "Learn. Document. Build Faster.",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },
  organizationName: "HosseinSimchi",
  projectName: "/",
  // Set the production URL of your site here
  url: "https://hosseinsimchi.github.io",
  baseUrl: "/",

  // GitHub Pages deployment config
  // Replace these with your actual GitHub username and repository name

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",

      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      navbar: {
        title: "Hossein Simchi",

        // logo: {
        //   alt: "Hossein Simchi Logo",
        //   src: "img/logo.png",
        // },

        items: [
          {
            type: "docSidebar",
            sidebarId: "knowledgeSidebar",
            position: "left",
            label: "Knowledge",
          },

          {
            type: "docSidebar",
            sidebarId: "projectsSidebar",
            position: "left",
            label: "Projects",
          },

          {
            href: "https://github.com/HosseinSimchi",
            label: "GitHub",
            position: "right",
          },
        ],
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
