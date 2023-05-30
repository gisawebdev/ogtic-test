/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite',
			},
		},

		fontFamily: {
			sans: ['system-ui', 'sans-serif'],
		},
	},
	plugins: [require('tailwindcss-animated')],
};
