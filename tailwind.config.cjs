/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			primary: '#161616',
			white: '#ffffff',
			transparent: '#0000004d',
			gray: {
				100: '#f8fafc',
				200: '#eaeaea',
				300: '#d9d9d9',
				400: '#cecece'
			},
			floralWhite: '#FFFAE9'
		},
		fontFamily: {
			euclid_circular_b: ['Euclid Circular B', 'sans-serif']
		},
		extend: {
			colors: {
				primary: '#161616',
				white: '#ffffff',
				error: '#FF0000',
				transparent: '#0000004d',
				baseColor: '#292929',
				gray: {
					100: '#f8fafc',
					200: '#eaeaea',
					300: '#d9d9d9',
					400: '#cecece'
				},
				eclipse: '#383838'
			},
			height: {
				15.5: '62px',
				17.5: '70px',
				105: '404px',
				125: '500px',
				146: '584px'
			},
			width: {
				46: '184px',
				49: '196px',
				117.5: '470px',
				150: '600px',
				173.5: '694px',
				174: '696px'
			},
			zIndex: {
				1: 1
			},
			padding: {
				17.5: '70px',
				18: '72px'
			},
			backgroundImage: {
				'recruitment-budget': "url('/src/assets/images/budget.png')"
			},
			inset: {
				22: '88px',
				33: '132px'
			},
			borderWidth: {
				3: '3px'
			},
			borderRadius: {
				base: '20px'
			},
			boxShadow: {
				top: '1px 0px 4px rgba(0, 0, 0, 0.15)'
			}
		}
	},
	plugins: [require('daisyui')],
	important: true
}
