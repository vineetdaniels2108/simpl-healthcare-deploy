/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'simpl-green': '#22c55e',
        'simpl-dark-green': '#16a34a',
        'simpl-blue': '#3b82f6',
        'simpl-dark-blue': '#1d4ed8',
        'simpl-grey': '#f9fafb',
        'simpl-dark-grey': '#6b7280',
        'simpl-black': '#1f2937',
        'simpl-darkgrey': '#333333',
      },
      fontFamily: {
        'manrope': ['var(--font-manrope)', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'sans': ['var(--font-manrope)', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3rem', {
          lineHeight: '3.498rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
        'xl': ['1.25rem', {
          lineHeight: '1.75rem',
          fontWeight: '400',
        }],
        'lg': ['1.125rem', {
          lineHeight: '1.75rem',
          fontWeight: '400',
        }],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      letterSpacing: {
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
      },
    },
  },
  plugins: [],
} 