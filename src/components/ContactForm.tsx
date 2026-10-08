import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { MessageCircle, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { COMPANY_NAME, EMAIL, hasWhatsApp } from "@/config/contact";
import { INDUSTRIES } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  "Website", "App", "E-commerce", "SEO", "Google Business", "Google Ads", "Meta Ads", "Automation", "AI",
  "Excel", "Power BI", "CRM", "Billing", "Digital Marketing", "Branding", "Custom Solution", "Other",
];
const BUSINESS_TYPES = [...INDUSTRIES.map((i) => i.title), "Other"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Name is too long."),
  businessName: z.string().trim().max(120, "Business name is too long."),
  email: z.string().trim().min(1, "Please enter your email.").email("Please enter a valid email address.").max(120),
  phone: z
    .string()
    .trim()
    .max(25, "Phone number is too long.")
    .refine((v) => v === "" || /^\+?[\d\s()-]{7,}$/.test(v), "Please enter a valid phone number."),
  businessType: z.string().trim().max(60),
  service: z.string().min(1, "Please choose what you need help with."),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters).")
    .max(800, "Please keep your message under 800 characters."),
});

type FieldKey = "name" | "businessName" | "email" | "phone" | "businessType" | "service" | "message";
type Values = Record<FieldKey, string>;
type Errors = Partial<Record<FieldKey, string>>;

const EMPTY: Values = { name: "", businessName: "", email: "", phone: "", businessType: "", service: "", message: "" };

const selectClass =
  "mt-1.5 flex h-12 w-full rounded-xl border border-input bg-background px-3 text-base text-ink-900 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-[invalid=true]:border-red-600 md:text-sm";
const inputClass = "mt-1.5 h-12 rounded-xl text-ink-900 aria-[invalid=true]:border-red-600";

interface FieldProps {
  id: FieldKey;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}

const Field = ({ id, label, required, error, children, className }: FieldProps) => (
  <div className={className}>
    <Label htmlFor={`field-${id}`} className="text-sm font-semibold text-ink-900">
      {label}
      {required && <span aria-hidden="true" className="ml-0.5 text-red-600">*</span>}
    </Label>
    {children}
    {error && (
      <p id={`error-${id}`} role="alert" className="mt-1.5 text-sm font-medium text-red-700">
        {error}
      </p>
    )}
  </div>
);

function buildMessage(v: Values): string {
  const lines: (string | false)[] = [
    `Hello ${COMPANY_NAME}, I would like to discuss a digital solution for my business.`,
    "",
    `Name: ${v.name}`,
    v.businessName ? `Business: ${v.businessName}` : false,
    v.businessType ? `Business type: ${v.businessType}` : false,
    `Email: ${v.email}`,
    v.phone ? `Phone: ${v.phone}` : false,
    `Need help with: ${v.service}`,
    "",
    `Message: ${v.message}`,
  ];
  return lines.filter((l): l is string => l !== false).join("\n");
}

const ContactForm = () => {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState<{ channel: "whatsapp" | "email"; url: string } | null>(null);

  const onChange =
    (key: FieldKey) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const aria = (key: FieldKey) => ({
    id: `field-${key}`,
    name: key,
    "aria-invalid": errors[key] ? (true as const) : undefined,
    "aria-describedby": errors[key] ? `error-${key}` : undefined,
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as FieldKey;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      const first = (Object.keys(EMPTY) as (FieldKey)[]).find((k) => next[k]);
      if (first) document.getElementById(`field-${first}`)?.focus();
      return;
    }

    const data = result.data;
    const text = buildMessage(data);
    if (hasWhatsApp) {
      const url = whatsappUrl(text);
      window.open(url, "_blank", "noopener,noreferrer");
      setPrepared({ channel: "whatsapp", url });
    } else {
      const subject = `New enquiry from ${data.name}${data.businessName ? ` (${data.businessName})` : ""}`;
      const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      window.location.href = url;
      setPrepared({ channel: "email", url });
    }
  };

  if (prepared) {
    const isWa = prepared.channel === "whatsapp";
    return (
      <div role="status" className="rounded-3xl border border-brand-500/40 bg-white p-7 shadow-card sm:p-8">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-700">
          {isWa ? <MessageCircle className="h-6 w-6" aria-hidden="true" /> : <Mail className="h-6 w-6" aria-hidden="true" />}
        </span>
        <h3 className="mt-5 text-2xl font-extrabold text-ink-900">Complete your enquiry</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          {isWa
            ? "We've opened WhatsApp with your details filled in. Press send there to complete your enquiry. Nothing has been sent yet."
            : `We've opened your email app with your details filled in. Press send to complete your enquiry. Nothing has been sent yet. If nothing opened, write to ${EMAIL}.`}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={prepared.url}
            {...(isWa ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="btn-primary"
          >
            {isWa ? "Open WhatsApp again" : "Open email again"}
          </a>
          <button
            type="button"
            className="btn-secondary-light"
            onClick={() => setPrepared(null)}
          >
            Edit my details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label="Contact form"
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name}>
          <Input {...aria("name")} className={inputClass} autoComplete="name" value={values.name} onChange={onChange("name")} placeholder="Your full name" aria-required="true" />
        </Field>
        <Field id="businessName" label="Business Name" error={errors.businessName}>
          <Input {...aria("businessName")} className={inputClass} autoComplete="organization" value={values.businessName} onChange={onChange("businessName")} placeholder="Your company or brand" />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <Input {...aria("email")} type="email" inputMode="email" className={inputClass} autoComplete="email" value={values.email} onChange={onChange("email")} placeholder="you@company.com" aria-required="true" />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <Input {...aria("phone")} type="tel" inputMode="tel" className={inputClass} autoComplete="tel" value={values.phone} onChange={onChange("phone")} placeholder="Optional" />
        </Field>
        <Field id="businessType" label="Business Type" error={errors.businessType}>
          <select {...aria("businessType")} className={selectClass} value={values.businessType} onChange={onChange("businessType")}>
            <option value="">Select your business type</option>
            {BUSINESS_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field id="service" label="What do you need help with?" required error={errors.service}>
          <select {...aria("service")} className={selectClass} value={values.service} onChange={onChange("service")} aria-required="true">
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field id="message" label="Message" required error={errors.message} className="sm:col-span-2">
          <Textarea
            {...aria("message")}
            rows={5}
            maxLength={800}
            className={cn(inputClass, "h-auto min-h-[140px] py-3 text-base md:text-sm")}
            value={values.message}
            onChange={onChange("message")}
            placeholder="Tell us about your business and what you'd like to achieve"
            aria-required="true"
          />
        </Field>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Send Enquiry
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        {hasWhatsApp
          ? "Submitting opens WhatsApp with your enquiry filled in. Press send in WhatsApp to complete your enquiry."
          : "Submitting opens your email app with your enquiry filled in. Press send in your email app to complete your enquiry."}{" "}
        We only use your details to reply to your enquiry. See our <Link to="/privacy" className="font-semibold text-brand-700 underline underline-offset-2">Privacy Policy</Link>.
      </p>
    </form>
  );
};

export default ContactForm;
