import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'lightBlueGradient': 'hsl(236, 72%, 79%)',
				'blueGradient': 'hsl(237, 63%, 64%)',
				'veryLightGrayishBlue': 'hsl(240, 78%, 98%)',
				'lightGrayishBlue': 'hsl(234, 14%, 74%)',
				'grayishBlue': 'hsl(233, 13%, 49%)',
				'darkGrayishBlue': 'hsl(232, 13%, 33%)'
			},
			padding: {
				'1': '8px',
				'2': '12px'
			},
			width: {
				'80': '18rem'
			},
			height: {
				'secondary': '22rem',
				'primary': '24rem',
				'7': '26px'
			},
			boxShadow: {
				'custom': '0px 8px 22px rgba(0, 0, 0, 0.075)'
			}
		},
	},
	plugins: [],
}
export default config
