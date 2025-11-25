/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cream': '#F3F2EE',      
				'glass': '#E8E8E3',      
				'card-bg': '#FDFDFD',    
				'dark-gray': '#2A2A2A',  
				'soft-gray': '#686868',  
				'accent-gray': '#4A4A4A' 
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
			},
			borderRadius: {
				'4xl': '2.5rem',
			},
			boxShadow: {
				'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
			}
		},
	},
	plugins: [],
}
