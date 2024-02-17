/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ["Lexend Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
			colors: {
				'brand': {
					'50': '#fef9ec',
					'100': '#fbeeca',
					'200': '#f8de8f',
					'300': '#f4c757',
					'400': '#f1b12e',
					'500': '#ea9016',
					'600': '#cf6c10',
					'700': '#ac4c11',
					'800': '#8c3b14',
					'900': '#733114',
					'950': '#421806',
			},
			
			}
		},
	},
	plugins: [],
}
