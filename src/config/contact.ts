/**
 * Central contact configuration for Vibloom.
 * Edit the values below; every component reads from here.
 * Leave a value as "" and it is automatically hidden on the site.
 */
export const COMPANY_NAME = "Vibloom Studio";
export const DOMAIN = "vibloomstudio.vercel.app";

/** Display phone number, e.g. "+91 98765 43210". Leave "" to hide. */
export const PHONE = "";

/**
 * WhatsApp number in international format, digits only, no "+" or spaces.
 * Example for India: "919876543210". Leave "" until you have the number:
 * WhatsApp buttons are hidden and the contact form falls back to email.
 */
export const WHATSAPP_NUMBER = "919545304449";

export const EMAIL = "vibloomstudio@gmail.com";

/** Business location shown in the footer/contact page. Leave "" to hide. */
export const ADDRESS = "";

export const INSTAGRAM = "https://www.instagram.com/vibloomstudio/";
export const LINKEDIN = "https://www.linkedin.com/company/vibloomstudio/";
export const FACEBOOK = "";
export const YOUTUBE = "VibloomStudio";

/** Derived helpers (do not edit) */
export const hasWhatsApp = WHATSAPP_NUMBER.replace(/\D/g, "").length >= 8;
export const hasPhone = PHONE.trim().length > 0;
export const telHref = hasPhone ? `tel:${PHONE.replace(/[^\d+]/g, "")}` : "";
export const mailtoHref = `mailto:${EMAIL}`;
