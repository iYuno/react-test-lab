/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xl: '1280px',
      lg: '1024px',
      md: '768px',
      sm: '375px',
      xs: '320px',
    },
    extend: {
      boxShadow: {
        lg: '0px 5px 24px rgba(0, 0, 0, 0.1)'
      },
      fontSize: {
        h1: ['52px', { lineHeight: '64px', fontWeight: '600' }],
        h2: ['40px', { lineHeight: '56px', fontWeight: '600' }],
        h3: ['32px', { lineHeight: '40px', fontWeight: '600' }],
        h4: ['24px', { lineHeight: '32px', fontWeight: '600' }],
        h5: ['20px', { lineHeight: '24px', fontWeight: '600' }],
        h6: ['16px', { lineHeight: '24px', fontWeight: '600' }]
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
          active: 'hsl(var(--input-background-active))'
        },
        inputText: {},
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
        input: {
          DEFAULT: 'hsl(var(--input-background))',
          active: 'hsl(var(--input-background-active))',
          border: 'hsl(var(--input-border))',
          label: {
            DEFAULT: 'hsl(var(--input-label))',
            active: 'hsl(var(--input-label-active))'
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
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

