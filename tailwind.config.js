/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
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
      colors: {
        border: "var(--color-border)", /* warm-neutral */
        input: "var(--color-input)", /* subtle-off-white */
        ring: "var(--color-ring)", /* warm-gold */
        background: "var(--color-background)", /* warm-white */
        foreground: "var(--color-foreground)", /* rich-dark-brown */
        primary: {
          DEFAULT: "var(--color-primary)", /* warm-gold */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* soft-champagne */
          foreground: "var(--color-secondary-foreground)", /* rich-dark-brown */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* warm-terracotta */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* soft-champagne */
          foreground: "var(--color-muted-foreground)", /* medium-brown */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* deeper-gold */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* subtle-off-white */
          foreground: "var(--color-popover-foreground)", /* rich-dark-brown */
        },
        card: {
          DEFAULT: "var(--color-card)", /* subtle-off-white */
          foreground: "var(--color-card-foreground)", /* rich-dark-brown */
        },
        success: {
          DEFAULT: "var(--color-success)", /* muted-sage-green */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* warm-gold */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* warm-terracotta */
          foreground: "var(--color-error-foreground)", /* white */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
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
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-in-from-top": "slide-in-from-top 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-in-from-bottom": "slide-in-from-bottom 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      boxShadow: {
        'warm': '0 2px 8px rgba(212, 165, 116, 0.12)',
        'warm-md': '0 4px 12px rgba(212, 165, 116, 0.15)',
        'warm-lg': '0 8px 24px rgba(212, 165, 116, 0.18)',
      },
      transitionTimingFunction: {
        'warm': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}