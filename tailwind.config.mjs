/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1E40AF',
          light: '#60A5FA',
        },
        accent: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          light: '#FBBF24',
        },
        dark: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          soft: '#334155',
        },
        surface: '#F8FAFC',
        signal: '#06B6D4',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-grid':
          'linear-gradient(to right, rgba(148, 163, 184, 0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.18) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.35) 0%, rgba(59, 130, 246, 0) 50%), radial-gradient(circle at 20% 85%, rgba(245, 158, 11, 0.24) 0%, rgba(245, 158, 11, 0) 55%)',
      },
      boxShadow: {
        card: '0 18px 45px -24px rgba(15, 23, 42, 0.45)',
        inset: 'inset 0 0 0 1px rgba(148, 163, 184, 0.18)',
      },
      letterSpacing: {
        industrial: '0.12em',
      },
    },
  },
  plugins: [],
};
