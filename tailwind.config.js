/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'h1': ['52px', { lineHeight: '64px' }],
        'h2': ['40px', { lineHeight: '56px' }],
        'h3': ['32px', { lineHeight: '40px' }],
        'h4': ['24px', { lineHeight: '32px' }],
        'h5': ['20px', { lineHeight: '24px' }],
        'h6': ['16px', { lineHeight: '24px' }],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        inputBg: {
          DEFAULT: 'hsl(var(--input-background))',
          active: 'hsl(var(--input-background-active))',
        },
        inputText: {

        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input:
        {
          DEFAULT: 'hsl(var(--input-background))',
          active: 'hsl(var(--input-background-active))',
          border: 'hsl(var(--input-border))',
          label: {
            DEFAULT: 'hsl(var(--input-label))',
            active: 'hsl(var(--input-label-active))',
          }
        },
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

