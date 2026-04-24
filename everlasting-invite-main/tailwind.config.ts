import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        script: ["'Great Vibes'", "cursive"],
        display: ["'Marcellus'", "serif"],
        serif: ["'Cormorant Garamond'", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        maroon: {
          DEFAULT: "hsl(var(--maroon))",
          deep: "hsl(var(--maroon-deep))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
          deep: "hsl(var(--gold-deep))",
        },
        ivory: "hsl(var(--ivory))",
        cream: "hsl(var(--cream))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in-up": { "0%": { opacity: "0", transform: "translateY(40px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "scale-in": { "0%": { opacity: "0", transform: "scale(0.92)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        "shimmer": { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "float": { "0%, 100%": { transform: "translateY(0px) rotate(0deg)" }, "50%": { transform: "translateY(-12px) rotate(2deg)" } },
        "spin-slow": { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        "petal-fall": { "0%": { transform: "translateY(-10vh) translateX(0) rotate(0deg)", opacity: "0" }, "10%": { opacity: "0.8" }, "100%": { transform: "translateY(110vh) translateX(40px) rotate(360deg)", opacity: "0" } },
        "open-left": { "0%": { transform: "perspective(1500px) rotateY(0deg)" }, "100%": { transform: "perspective(1500px) rotateY(-170deg)" } },
        "open-right": { "0%": { transform: "perspective(1500px) rotateY(0deg)" }, "100%": { transform: "perspective(1500px) rotateY(170deg)" } },
        "glow-pulse": { "0%, 100%": { boxShadow: "0 0 30px hsl(var(--gold) / 0.4)" }, "50%": { boxShadow: "0 0 60px hsl(var(--gold) / 0.7)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "fade-in-up": "fade-in-up 1s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        "shimmer": "shimmer 3s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        "petal-fall": "petal-fall linear infinite",
        "open-left": "open-left 1.6s cubic-bezier(0.7, 0, 0.3, 1) forwards",
        "open-right": "open-right 1.6s cubic-bezier(0.7, 0, 0.3, 1) forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
