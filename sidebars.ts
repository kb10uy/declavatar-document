import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [{ type: "autogenerated", dirName: "tutorial" }],
  conceptsSidebar: [{ type: "autogenerated", dirName: "concepts" }],
  referenceSidebar: [{ type: "autogenerated", dirName: "reference" }],
  examplesSidebar: [{ type: "autogenerated", dirName: "examples" }],
};

export default sidebars;
