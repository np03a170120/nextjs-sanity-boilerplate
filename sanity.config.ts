import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schema from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  name: "default",
  title: "sanity-studio",

  projectId: "kngojf3x",
  dataset: "production",

  plugins: [structureTool(), visionTool()],
  basePath: "/admin",

  schema: {
    types: schema,
  },
});

export default config;
