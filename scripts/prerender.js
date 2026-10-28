import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import React from "react";
import { renderToString } from "react-dom/server";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const ssrOutDir = path.resolve(rootDir, "build-ssr");
const clientHtmlPath = path.resolve(rootDir, "build", "index.html");

async function prerender() {
  console.log("⚡ Starting SSG Prerendering for dannypalma.com...");

  // 1. Build SSR bundle
  console.log("📦 Bundling App for SSR...");
  execSync("npx vite build --ssr src/App.tsx --outDir build-ssr", {
    cwd: rootDir,
    stdio: "inherit",
  });

  // 2. Import the built App module
  const appModulePath = path.resolve(ssrOutDir, "App.js");
  const { default: App } = await import(appModulePath);

  // 3. Render React tree to static HTML string
  console.log("🎨 Rendering React components to static HTML...");
  const renderedApp = renderToString(React.createElement(App));
  console.log(`✅ Pre-rendered ${renderedApp.length} characters of HTML content.`);

  // 4. Inject into build/index.html
  const clientHtml = await fs.readFile(clientHtmlPath, "utf8");
  const target = '<div id="root"></div>';

  if (!clientHtml.includes(target)) {
    throw new Error(`Target '${target}' not found in ${clientHtmlPath}`);
  }

  const updatedHtml = clientHtml.replace(target, `<div id="root">${renderedApp}</div>`);
  await fs.writeFile(clientHtmlPath, updatedHtml, "utf8");
  console.log("🚀 Injected pre-rendered HTML into build/index.html");

  // 5. Clean up SSR bundle directory
  await fs.rm(ssrOutDir, { recursive: true, force: true });
  console.log("🧹 Cleaned up temporary SSR files. Prerender complete!");
}

prerender().catch((err) => {
  console.error("❌ Prerender failed:", err);
  process.exit(1);
});
