import {
  Store, UtensilsCrossed, Hotel, HeartPulse, GraduationCap, Building2, Factory, Briefcase, Rocket,
  ShoppingCart, Plane, Dumbbell, Scissors, Car, HardHat, MapPin, Lightbulb,
  Network, Workflow, BarChart3, Brain, Boxes, Compass, Target, Cpu, ShieldCheck, Users, LineChart,
  Eye, Gauge, Layers, TrendingUp, Zap, Headphones, FileText, Search, Bot, BookOpen, Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface IconItem { title: string; description: string; icon: LucideIcon }

export const INDUSTRIES: IconItem[] = [
  { title: "Retail", description: "Online catalogues, billing and inventory that stay in sync.", icon: Store },
  { title: "Restaurants & Cafés", description: "Online presence, ordering flows and review management.", icon: UtensilsCrossed },
  { title: "Hotels & Hospitality", description: "Direct enquiries, local visibility and guest communication.", icon: Hotel },
  { title: "Healthcare", description: "Clear clinic websites, appointment flows and patient reminders.", icon: HeartPulse },
  { title: "Education", description: "Admissions enquiries, portals and parent communication.", icon: GraduationCap },
  { title: "Real Estate", description: "Listings, lead capture and automated follow-ups.", icon: Building2 },
  { title: "Manufacturing", description: "Production, stock and sales reporting in one view.", icon: Factory },
  { title: "Professional Services", description: "Credible websites, client intake and CRM.", icon: Briefcase },
  { title: "Startups", description: "A fast, scalable digital foundation to launch and learn.", icon: Rocket },
  { title: "E-commerce", description: "Stores, payments, ads and order automation.", icon: ShoppingCart },
  { title: "Travel", description: "Enquiry handling, itineraries and WhatsApp booking flows.", icon: Plane },
  { title: "Fitness", description: "Memberships, lead follow-up and class communication.", icon: Dumbbell },
  { title: "Beauty & Wellness", description: "Appointments, reminders and social presence.", icon: Scissors },
  { title: "Automotive", description: "Service bookings, lead tracking and local SEO.", icon: Car },
  { title: "Construction", description: "Project enquiries, quotations and progress reporting.", icon: HardHat },
  { title: "Local Businesses", description: "Google Business Profile, local SEO and simple websites.", icon: MapPin },
  { title: "B2B Businesses", description: "Lead qualification, CRM and sales dashboards.", icon: Network },
  { title: "Consultants", description: "Authority-building websites, scheduling and automated intake.", icon: Lightbulb },
];

export interface Solution {
  id: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  includes: string[];
  outcome: string;
}

export const SOLUTIONS: Solution[] = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    summary: "Move from manual, disconnected processes to a connected digital business, step by step and in the right order.",
    icon: Compass,
    includes: ["Business and process review", "Digital roadmap", "Websites, systems and tool setup", "Integration of existing tools", "Team onboarding"],
    outcome: "One clear plan and a connected set of tools instead of scattered ones.",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    summary: "Automate enquiries, follow-ups, billing, reminders and reporting so your team spends time on work that needs people.",
    icon: Workflow,
    includes: ["Lead capture and CRM updates", "WhatsApp and email workflows", "Invoicing and payment follow-ups", "Automated reports", "API integrations"],
    outcome: "Less manual work, fewer missed follow-ups and faster operations.",
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    summary: "Bring sales, marketing, finance and operations data together so decisions are based on numbers you can see.",
    icon: BarChart3,
    includes: ["Advanced Excel models", "Power BI dashboards", "KPI tracking", "Forecasting", "Automated reporting"],
    outcome: "A clear view of what is working and where to act next.",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    summary: "Practical AI for customer support, lead qualification, document processing and internal knowledge, built around your data and workflows.",
    icon: Brain,
    includes: ["AI chatbots and assistants", "AI agents for repeatable tasks", "Document and data processing", "Content systems", "Custom AI solutions"],
    outcome: "Faster responses and less repetitive work, with people kept in the loop.",
  },
  {
    id: "digital-presence",
    title: "Digital Presence & Growth",
    summary: "Be found and chosen online with a strong website, Google presence and marketing that brings in the right enquiries.",
    icon: Target,
    includes: ["Website and landing pages", "SEO and local SEO", "Google Business Profile", "Google and Meta Ads", "Social media and content"],
    outcome: "More visibility and a steady flow of relevant enquiries.",
  },
  {
    id: "business-management",
    title: "Business Management Systems",
    summary: "Custom systems for billing, inventory, customers and teams that match how your business actually runs.",
    icon: Boxes,
    includes: ["CRM and customer management", "Billing and invoicing", "Inventory management", "Employee systems", "Custom software"],
    outcome: "More control, with everything in one place.",
  },
];

export const WHY_POINTS: IconItem[] = [
  { title: "One Digital Partner", description: "Technology, marketing, automation and analytics under one roof.", icon: Layers },
  { title: "Business-First Approach", description: "We don't just build technology. We understand what the business needs.", icon: Target },
  { title: "Custom Solutions", description: "No unnecessary one-size-fits-all packages.", icon: Sparkles },
  { title: "Practical Automation", description: "We focus on reducing manual work and improving efficiency.", icon: Zap },
  { title: "Data-Driven Growth", description: "Dashboards and analytics help businesses make better decisions.", icon: LineChart },
  { title: "Long-Term Support", description: "We build systems that can evolve as the business grows.", icon: ShieldCheck },
];

export const PROCESS_STEPS = [
  { title: "Discover", description: "Understand your business." },
  { title: "Plan", description: "Create the digital strategy." },
  { title: "Build", description: "Develop the required solutions." },
  { title: "Launch", description: "Deploy and connect everything." },
  { title: "Optimize", description: "Improve, automate and scale." },
];

export const JOURNEY_STEPS = [
  { title: "Discover", description: "Understand the business, goals, customers and challenges." },
  { title: "Strategize", description: "Identify the right technology, marketing and growth opportunities." },
  { title: "Build", description: "Create websites, apps, systems, dashboards and digital assets." },
  { title: "Connect", description: "Integrate tools, platforms, CRM, payments, communication and data." },
  { title: "Automate", description: "Remove repetitive work through workflows, automation and AI." },
  { title: "Grow", description: "Use marketing, analytics and optimization to improve business performance." },
];

export const RESULTS: IconItem[] = [
  { title: "More Visibility", description: "Show up where your customers search.", icon: Eye },
  { title: "More Leads", description: "Capture and organise every enquiry.", icon: Target },
  { title: "Less Manual Work", description: "Let workflows handle the routine.", icon: Zap },
  { title: "Faster Operations", description: "Shorter turnaround from enquiry to delivery.", icon: Gauge },
  { title: "Better Customer Experience", description: "Quick, consistent communication.", icon: Users },
  { title: "Better Decisions", description: "Numbers you can trust and act on.", icon: LineChart },
  { title: "More Control", description: "Everything visible in one place.", icon: ShieldCheck },
  { title: "Scalable Systems", description: "Foundations that grow with the business.", icon: TrendingUp },
];

export const AI_USES: { label: string; icon: LucideIcon }[] = [
  { label: "Customer support", icon: Headphones },
  { label: "Lead qualification", icon: Target },
  { label: "Sales assistance", icon: TrendingUp },
  { label: "Document processing", icon: FileText },
  { label: "Data analysis", icon: Search },
  { label: "Reporting", icon: BarChart3 },
  { label: "Content generation", icon: Sparkles },
  { label: "Workflow automation", icon: Workflow },
  { label: "Knowledge management", icon: BookOpen },
  { label: "Internal business assistants", icon: Bot },
  { label: "AI agents", icon: Cpu },
];

export const AUTOMATION_FLOW = [
  "Customer Enquiry", "Lead Captured", "CRM Updated", "WhatsApp Response", "Follow-up",
  "Payment", "Invoice", "Customer Feedback", "Dashboard",
];

export const ANALYTICS_ITEMS = [
  "Excel", "Power BI", "KPI dashboards", "Sales analytics", "Marketing analytics",
  "Financial analytics", "Inventory analytics", "Customer analytics", "Automated reporting",
];

export const FAQS = [
  { q: "What does Vibloom do?", a: "Vibloom is a digital growth and transformation company. We help businesses build their digital presence, attract customers, automate operations, understand their data and grow, with technology, marketing, automation, analytics and AI under one roof." },
  { q: "What types of businesses do you work with?", a: "We work with small local businesses, startups and established companies across industries such as retail, healthcare, education, real estate, hospitality, travel and professional services. Solutions are built around how your business actually works." },
  { q: "Do you only build websites?", a: "No. Websites are often the starting point, but we also build web and mobile apps, set up CRM, billing and inventory systems, run marketing, automate workflows, build dashboards and create AI solutions." },
  { q: "Can Vibloom automate my existing business processes?", a: "Yes. We review how you work today, then automate the repetitive parts, such as lead capture, follow-ups, invoicing, reminders and reporting, using the tools you already have wherever possible." },
  { q: "Can you manage Google Business Profile and SEO?", a: "Yes. We optimise your Google Business Profile and website for local and general search so customers can find you and contact you." },
  { q: "Can you run Google and Meta Ads?", a: "Yes. We plan, launch and optimise Google Ads and Meta Ads campaigns, and connect them to lead tracking so you can see what is bringing in enquiries." },
  { q: "Can you build custom software?", a: "Yes. If an off-the-shelf tool doesn't fit, we can build web applications, customer portals and business management systems around your process." },
  { q: "Can you create Power BI dashboards?", a: "Yes. We build Power BI and Excel dashboards for sales, marketing, finance, inventory and customer data, and can automate the reporting." },
  { q: "Can you integrate WhatsApp with my business?", a: "Yes. We can connect WhatsApp to your enquiry flow, CRM and notifications so customers get fast, consistent replies. Specific features depend on the WhatsApp tools and policies that apply to your use case." },
  { q: "Can you help with AI automation?", a: "Yes. We build chatbots, assistants and AI agents for tasks such as customer support, lead qualification, document processing and reporting, designed with a person in the loop where it matters." },
  { q: "Do you provide ongoing support?", a: "Yes. We can support, maintain and improve what we build as your business grows. The scope of ongoing support is agreed with you per project." },
  { q: "How does the process work?", a: "We discover your business, plan the digital strategy, build the solutions, launch and connect everything, then optimise and automate over time." },
  { q: "How do I get started?", a: "Send us an enquiry through the contact form, or email us. Tell us where your business is today and what you want to achieve, and we will come back with the next steps." },
];
