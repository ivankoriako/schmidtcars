/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				gold: '#ffd700',
				'gold-light': '#ffed4e',
				'gold-dark': '#e6c200',
				premium: {
					50: '#fffbf0',
					100: '#fff7d6',
					200: '#ffed9e',
					300: '#ffdf66',
					400: '#ffd700',
					500: '#e6c200',
					600: '#ccad00',
					700: '#b39800',
					800: '#998300',
					900: '#7f6e00',
				},
				dark: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					950: '#020617',
				},
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			animation: {
				'shimmer': 'shimmer 2s infinite',
				'pulse-slow': 'pulse 3s infinite',
			},
			keyframes: {
				shimmer: {
					'0%': { backgroundPosition: '-200px 0' },
					'100%': { backgroundPosition: 'calc(200px + 100%) 0' },
				},
			},
			backdropBlur: {
				xs: '2px',
			},
		},
	},
	plugins: [],
} 