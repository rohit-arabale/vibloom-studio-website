import {
  Globe, Cloud, Workflow, Megaphone, BarChart3, TrendingUp, Layers, Palette, Brain, Boxes, LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  services: string[];
}

/** The six pillars of the Vibloom framework. */
export const PILLARS: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Build", description: "Websites, apps, e-commerce and digital platforms.", icon: Globe },
  { title: "Digitize", description: "Digital business systems, Google presence, cloud tools and online infrastructure.", icon: Cloud },
  { title: "Automate", description: "Workflows, CRM, WhatsApp, billing, reporting and AI automation.", icon: Workflow },
  { title: "Market", description: "SEO, Google Ads, Meta Ads, social media and digital marketing.", icon: Megaphone },
  { title: "Analyze", description: "Excel, Power BI, dashboards, analytics and business intelligence.", icon: BarChart3 },
  { title: "Grow", description: "Optimization, customer acquisition, retention and digital strategy.", icon: TrendingUp },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "build",
    title: "Build",
    description: "The digital foundation: websites, apps and platforms built around how your business sells and serves.",
    icon: Globe,
    services: ["Website Development", "Web Applications", "Mobile Apps", "E-commerce", "Custom Software", "Landing Pages", "Customer Portals"],
  },
  {
    id: "grow",
    title: "Grow",
    description: "Be found, get enquiries and turn attention into customers across search, maps and social platforms.",
    icon: TrendingUp,
    services: ["SEO", "Local SEO", "Google Business Profile", "Google Ads", "Meta Ads", "Social Media Marketing", "Content Marketing", "Lead Generation"],
  },
  {
    id: "automate",
    title: "Automate",
    description: "Remove repetitive manual work with workflows that run on their own, from first enquiry to final invoice.",
    icon: Workflow,
    services: ["Business Automation", "AI Automation", "WhatsApp Automation", "CRM Automation", "Email Automation", "Billing Automation", "Workflow Automation", "AI Agents"],
  },
  {
    id: "analyze",
    title: "Analyze",
    description: "See what is working. Clear dashboards and reports that turn raw data into decisions.",
    icon: BarChart3,
    services: ["Advanced Excel", "Power BI", "Business Dashboards", "Data Analytics", "KPI Reporting", "Business Intelligence", "Forecasting", "Automated Reports"],
  },
  {
    id: "manage",
    title: "Manage",
    description: "Run daily operations from one place: customers, billing, stock and teams.",
    icon: Boxes,
    services: ["CRM", "Billing Systems", "Inventory Systems", "Employee Systems", "Customer Management", "Business Management Systems"],
  },
  {
    id: "brand",
    title: "Brand",
    description: "A consistent, professional identity across your website, social media and marketing materials.",
    icon: Palette,
    services: ["Branding", "Logo Design", "Graphic Design", "Social Media Creatives", "Content Creation", "Video Marketing", "Marketing Materials"],
  },
  {
    id: "ai-technology",
    title: "AI & Technology",
    description: "Practical AI and integrations that connect your tools and take on work your team shouldn't have to.",
    icon: Brain,
    services: ["AI Chatbots", "AI Assistants", "AI Agents", "AI Data Analysis", "AI Content Systems", "API Integrations", "Custom AI Solutions", "Digital Transformation"],
  },
  {
    id: "setup-support",
    title: "Setup & Support",
    description: "The essentials around every project: the accounts, hosting and ongoing care that keep things running.",
    icon: LifeBuoy,
    services: ["Google Workspace Setup", "Domain & Hosting", "Website Maintenance", "Email Marketing", "Performance Marketing", "Business Consulting"],
  },
];


export const TRUST_ITEMS: { label: string; icon: LucideIcon }[] = [
  { label: "Build Digital Presence", icon: Globe },
  { label: "Generate More Leads", icon: Megaphone },
  { label: "Automate Operations", icon: Workflow },
  { label: "Understand Your Data", icon: BarChart3 },
  { label: "Improve Efficiency", icon: Layers },
  { label: "Grow Revenue", icon: TrendingUp },
];
