# Vibloom Studio website

Marketing website for Vibloom. React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui + React Router.

## Run

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # production build into dist/
npm run preview    # serve the production build locally
npm run lint
```

## Things to edit (all in one place)

| What | File |
| --- | --- |
| Phone, WhatsApp number, email, address, social links | `src/config/contact.ts` |
| Taglines, CTA labels, nav links, WhatsApp messages | `src/config/site.ts` |
| Services, industries, solutions, FAQs, process steps | `src/data/services.ts`, `src/data/content.ts` |
| Portfolio projects and testimonials | `src/data/portfolio.ts` |
| Colours and fonts | `tailwind.config.ts`, `src/index.css` |
| Logo (symbol + wordmark) | `src/components/Logo.tsx`; original icon files in `public/brand/` |
| Brand name shown in titles, footer, messages | `COMPANY_NAME` in `src/config/contact.ts`, `SITE_NAME` in `src/config/site.ts` |

Empty contact values are hidden automatically. Once `WHATSAPP_NUMBER` is set (digits only, with country
code, e.g. `919876543210`), the floating WhatsApp button, the CTA button and the contact form switch to WhatsApp.

## Contact form

There is no backend. The form validates, then opens WhatsApp (if configured) or the visitor's email app with
the enquiry pre-filled. The page tells the visitor nothing has been sent until they press send. To use a
form service later (Formspree, Web3Forms, etc.), replace the submit logic in `src/components/ContactForm.tsx`.

## Testimonials

The section is hidden until you add real entries to `TESTIMONIALS` in `src/data/portfolio.ts`.

## Deploying to Vercel

1. Import the repository. Framework preset: Vite. Build command `npm run build`, output `dist`.
2. The site URL defaults to `https://vibloom.in` (canonical tags, sitemap.xml, robots.txt, social preview). Set `VITE_SITE_URL` only if you need a different domain. Add `vibloom.in` under the project's Domains in Vercel.
3. `vercel.json` already contains the single-page-app rewrite so routes like `/services` work on refresh.
