/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
	  extend: {
		colors: {
		  // 🎨 Brand Colors
		  'astro-primary': '#5B21B6',
		  'astro-accent': '#F97316',
		  'astro-bg-light': '#F9FAFB',
		  'astro-bg-dark': '#0F172A',
		  'astro-text': '#111827',
		  'astro-muted': '#6B7280',
		  'astro-stars': '#1E293B',
		  'astro-brand': '#005ea6',
  
		  // 🌈 CSS Variable Colors
		  background: 'hsl(var(--background) / <alpha-value>)',
		  foreground: 'hsl(var(--foreground) / <alpha-value>)',
  
		  card: 'hsl(var(--card) / <alpha-value>)',
		  'card-foreground': 'hsl(var(--card-foreground) / <alpha-value>)',
  
		  popover: {
			DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
			foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
			foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
			foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
			foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
			foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
			foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
		  },
  
		  border: 'hsl(var(--border) / <alpha-value>)',
		  input: 'hsl(var(--input) / <alpha-value>)',
		  ring: 'hsl(var(--ring) / <alpha-value>)',
  
		  // 📊 Charts
		  chart: {
			'1': 'hsl(var(--chart-1) / <alpha-value>)',
			'2': 'hsl(var(--chart-2) / <alpha-value>)',
			'3': 'hsl(var(--chart-3) / <alpha-value>)',
			'4': 'hsl(var(--chart-4) / <alpha-value>)',
			'5': 'hsl(var(--chart-5) / <alpha-value>)',
		  },
		},
  
		// 📚 Typography
		fontFamily: {
		  sans: ['var(--font-manrope)', 'sans-serif'], // ✅ Manrope as default sans
		  mono: ['var(--font-mono)', 'Fira Code', 'monospace'],
		},
  
		// 🟦 Border Radii
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
	plugins: [require('tailwindcss-animate')],
  };
  