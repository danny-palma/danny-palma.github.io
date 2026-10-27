import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin to inline CSS directly into index.html to eliminate render-blocking stylesheet requests
const inlineCss = () => ({
  name: 'inline-css-plugin',
  enforce: 'post',
  transformIndexHtml(html, { bundle }) {
    if (!bundle) return html;
    let newHtml = html;
    for (const [fileName, chunk] of Object.entries(bundle)) {
      if (fileName.endsWith('.css') && chunk.type === 'asset') {
        const cssContent = chunk.source;
        const linkRegex = new RegExp(`<link[^>]*rel="stylesheet"[^>]*href="[^"]*${fileName}"[^>]*>`, 'g');
        newHtml = newHtml.replace(linkRegex, `<style>${cssContent}</style>`);
      }
    }
    return newHtml;
  }
});

export default defineConfig({
  plugins: [react(), inlineCss()],
  build: {
    outDir: "./build"
  }
})
