/**
 * Portfolio projects.
 * To add a project, copy one object and fill the fields:
 *   PROJECT_TITLE -> title, PROJECT_DESCRIPTION -> description,
 *   PROJECT_IMAGE -> image (path in /public, optional), PROJECT_CATEGORY -> category,
 *   PROJECT_LINK -> link (optional).
 * Projects with an empty title are never shown on the live site.
 */
export interface Project {
  title: string;
  description: string;
  image?: string;
  category: string;
  link?: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Smith Tours & Travels",
    description:
      "A mobile-first website for a car rental and tour business in Kolhapur, with WhatsApp enquiry flows, a vehicle showcase and local destination guides.",
    image: "/portfolio/smith-tours.webp",
    category: "Website Development",
    link: "https://www.smithtours.in",
    tags: ["Website", "WhatsApp Enquiries", "Travel"],
  },
  {
    title: "KeratoCare",
    description:
      "A clear, trust-focused website for a specialty contact lens clinic in Pune, helping patients with keratoconus understand the treatment and get in touch.",
    category: "Website Development",
    link: "https://keratocare9.vercel.app/",
    tags: ["Website", "Healthcare", "Local Presence"],
  },
];

/** Add real client testimonials here. The section stays hidden while this list is empty. */
export interface Testimonial { quote: string; name: string; role?: string; business?: string }
export const TESTIMONIALS: Testimonial[] = [];
