import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out forwards",
        "bounce-in": "bounceIn 1s ease-out forwards",
        "btn-fadeder": "btnFadeDER 1s ease-out forwards",
        "btn-fadeizq": "btnFadeIZQ 1s ease-out forwards",
        "fade-in-Img": "fadeInImg 1s ease-in-out forwards",
        slowMovetop: "slowMovetop 20s ease infinite alternate",
        wiggle: "wiggle 0.5s ease-in-out infinite",
        "pulse-slow": "pulseSlow 2s ease-in-out infinite",
        wave: "waveMotion 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        loadinglvl: "loadinglvl 1.5s ease-out forwards",
        popinviolent: "popinviolent 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "scale(0.7) translateY(-100px)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1) translateY(0)",
          },
        },
        slowMovetop: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
          },
          "50%": {
            transform: "rotate(45deg)",
          },
          "100%": {
            transform: "rotate(-35deg)",
          },
        },
        slowMovedownr: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
          "100%": {
            transform: "rotate(-5deg) translateX(30px)",
          },
        },
        slowMovedownl: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
          },
          "50%": {
            transform: "rotate(-10deg)",
          },
          "100%": {
            transform: "rotate(15deg)",
          },
        },
        waveMotion: {
          "0%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(-50px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
        pulseSlow: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
        },
        btnFadeDER: {
          "0%": {
            opacity: 0,
            transform: "scale(0.7) translateX(100px)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1) translateY(0)",
          },
        },
        btnFadeIZQ: {
          "0%": {
            opacity: 0,
            transform: "scale(0.7) translateX(-100px)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1) translateY(0)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        loadinglvl: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        popinviolent: {
          "0%": {
            opacity: "0",
            transform: "translateY(100%) scale(0.6)",
          },
          "60%": {
            opacity: "1",
            transform: "translateY(-20px) scale(1.05)",
          },
          "80%": {
            transform: "translateY(10px) scale(0.97)",
          },
          "100%": {
            transform: "translateY(0) scale(1)",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
