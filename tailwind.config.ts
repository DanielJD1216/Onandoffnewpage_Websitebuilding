import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // On & Off New Page Brand Colors
        brand: {
          green: "#33251b", // Dark Brown (Sophisticated, premium, trust)
          ivory: "#F4ECDE", // Ivory Background (Clean, premium)
          beige: "#ECEBE3", // Soft Beige (Warmth, approachability)
          gold: "#A48242", // Gold Accent (Premium, success)
          black: "#000000", // Black (Text, logo)
        },
        // Semantic colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#33251b", // Brand green as primary
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#A48242", // Gold as secondary
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#ECEBE3", // Brand beige as muted
          foreground: "#33251b",
        },
        accent: {
          DEFAULT: "#F4ECDE", // Brand ivory as accent
          foreground: "#33251b",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        // Korean fonts
        pretendard: ["Pretendard", "system-ui", "sans-serif"],
        noto: ['"Noto Sans KR"', "system-ui", "sans-serif"],
        // English fonts
        inter: ["Inter", "system-ui", "sans-serif"],
        // Default sans
        sans: ["Pretendard", '"Noto Sans KR"', "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;