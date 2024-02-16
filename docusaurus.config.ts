import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "declavatar",
  tagline: "Declarative Avatar Asset Composing Tool",
  favicon: "img/favicon.ico",

  url: "https://declavatar.kb10uy.dev",
  baseUrl: "/",

  organizationName: "kb10uy",
  projectName: "declavatar",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "declavatar",
      /*
      logo: {
        alt: "declavatar logo",
        src: "img/logo.svg",
      },
      */
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "チュートリアル",
        },
        {
          type: "docSidebar",
          sidebarId: "referenceSidebar",
          position: "left",
          label: "リファレンス",
        },
        {
          href: "https://github.com/kb10uy/declavatar",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Repositories",
          items: [
            {
              label: "declavatar",
              href: "https://github.com/kb10uy/declavatar",
            },
            {
              label: "modular-declavatar",
              href: "https://github.com/kb10uy/modular-declavatar",
            },
            {
              label: "declavatar-attachments",
              href: "https://github.com/kb10uy/declavatar-attachments",
            },
            {
              label: "declavatar-document",
              href: "https://github.com/kb10uy/declavatar-document",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "@kb10uy @ twitter.com",
              href: "https://twitter.com/kb10uy",
            },
            {
              label: "@kb10uy @ mstdn.maud.io",
              href: "https://mstdn.maud.io/@kb10uy",
            },
            {
              label: "kb10uy.org",
              href: "https://kb10uy.org",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} kb10uy. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
