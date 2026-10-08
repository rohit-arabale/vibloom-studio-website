import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
			screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1200px" },
		},
		extend: {
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
				display: ['"Plus Jakarta Sans"', "Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
				secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
				destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
				muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
				accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
				popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
				card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
				brand: {
					300: "#FFC145",
					400: "#FFA41C",
					500: "#FF8A00",
					600: "#E56700",
					700: "#B84A00",
					800: "#8F3900",
				},
				sky2: "#FF4D00",
				ink: {
					950: "#070B16",
					900: "#0C101E",
					800: "#0F1829",
					700: "#17233A",
					600: "#22314D",
				},
			},
			backgroundImage: {
				"brand-gradient": "linear-gradient(135deg, #FFC145 0%, #FF8A00 50%, #FF4D00 100%)",
				"grid-faint":
					"linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
			},
			boxShadow: {
				soft: "0 8px 30px -12px rgba(6,10,19,0.18)",
				card: "0 1px 2px rgba(6,10,19,0.04), 0 12px 32px -16px rgba(6,10,19,0.22)",
				glow: "0 0 0 1px rgba(255,138,0,0.28), 0 20px 60px -20px rgba(255,106,0,0.5)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
				"accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
				float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
				"float-slow": { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(8px)" } },
				flow: { to: { strokeDashoffset: "-24" } },
				"glow-pulse": { "0%,100%": { opacity: "0.55" }, "50%": { opacity: "1" } },
				"fade-up": { from: { opacity: "0", transform: "translateY(14px)" }, to: { opacity: "1", transform: "none" } },
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				float: "float 7s ease-in-out infinite",
				"float-slow": "float-slow 9s ease-in-out infinite",
				flow: "flow 1.6s linear infinite",
				"glow-pulse": "glow-pulse 3.2s ease-in-out infinite",
				"fade-up": "fade-up 0.7s ease-out both",
			},
		},
	},
	plugins: [animate],
} satisfies Config;
