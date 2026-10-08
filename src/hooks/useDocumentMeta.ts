import { useEffect } from "react";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/config/site";

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/** Sets per-page title, description and canonical URL (client-side). */
export function useDocumentMeta(title?: string, description?: string) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Vibloom Studio` : DEFAULT_TITLE;
    const desc = description || DEFAULT_DESCRIPTION;
    document.title = fullTitle;
    setMeta('meta[name="description"]', "content", desc);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", desc);
    const url = `${window.location.origin}${window.location.pathname}`;
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);
  }, [title, description]);
}
