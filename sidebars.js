// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  knowledgeSidebar: [
    {
      type: "category",
      label: "Software Development",
      items: [
        "knowledge/software-development/javascript",
        "knowledge/software-development/typescript",
        "knowledge/software-development/angular",
      ],
    },

    {
      type: "category",
      label: "DevOps & Infrastructure",
      items: [
        "knowledge/devops/git",
        "knowledge/devops/docker",
        "knowledge/devops/ci-cd",
      ],
    },

    {
      type: "category",
      label: "Artificial Intelligence",
      items: [
        "knowledge/ai/machine-learning",
        "knowledge/ai/computer-vision",
        "knowledge/ai/agentic-ai",
      ],
    },
  ],

  projectsSidebar: [
    {
      type: "category",
      label: "Web Applications",
      items: ["projects/web-applications"],
    },

    {
      type: "category",
      label: "AI Applications",
      items: ["projects/ai-applications"],
    },

    {
      type: "category",
      label: "Research Projects",
      items: ["projects/research-projects"],
    },

    {
      type: "category",
      label: "Kaggle Projects",
      items: ["projects/competitions"],
    },
  ],
};

export default sidebars;
