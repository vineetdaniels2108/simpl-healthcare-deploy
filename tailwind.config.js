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
        'simpl-green': '#1aa484',
        'simpl-dark-green': '#18b791',
        'simpl-blue': '#0476a0',
        'simpl-dark-blue': '#0376a0',
        'simpl-grey': '#f8f8f8',
        'simpl-dark-grey': '#6c717b',
        'simpl-black': '#394152',
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