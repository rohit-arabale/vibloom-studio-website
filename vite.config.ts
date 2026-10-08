import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const ROUTES = ["/", "/services", "/solutions", "/industries", "/about", "/contact", "/privacy"];

/**
 * Resolves the public site URL for canonical/Open Graph tags, sitemap.xml and robots.txt.
 * Defaults to https://vibloom.in; set VITE_SITE_URL to override (for example a staging domain).
 */
function siteUrlPlugin(): Plugin {
  const raw = process.env.VITE_SITE_URL || "https://vibloom.in";
  const siteUrl = raw.replace(/\/+$/, "");

  return {
    name: "vibloom-site-url",
    transformIndexHtml(html) {
      if (siteUrl) return html.split("__SITE_URL__").join(siteUrl);
      // Unknown domain: drop tags that must be absolute, keep root-relative image paths.
      return html
        .split("\n")
        .filter((line) => !/rel="canonical"|property="og:url"/.test(line))
        .join("\n")
        .split("__SITE_URL__")
        .join("");
    },
    generateBundle() {
      const robots = ["User-agent: *", "Allow: /", ...(siteUrl ? [`Sitemap: ${siteUrl}/sitemap.xml`] : [])].join("\n") + "\n";
      this.emitFile({ type: "asset", fileName: "robots.txt", source: robots });
      if (!siteUrl) return;
      const urls = ROUTES.map((r) => `  <url><loc>${siteUrl}${r}</loc></url>`).join("\n");
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: xml });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), siteUrlPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
