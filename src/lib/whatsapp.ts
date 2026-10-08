import { WHATSAPP_NUMBER, hasWhatsApp } from "@/config/contact";
import { WHATSAPP_MESSAGES } from "@/config/site";

/** Returns a wa.me link with a pre-filled message, or "" if no number is configured. */
export function whatsappUrl(message: string = WHATSAPP_MESSAGES.general): string {
  if (!hasWhatsApp) return "";
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/** Opens WhatsApp in a new tab. Returns false when no number is configured. */
export function openWhatsApp(message: string = WHATSAPP_MESSAGES.general): boolean {
  const url = whatsappUrl(message);
  if (!url) return false;
  window.open(url, "_blank", "noopener,noreferrer");
  return true;
}
