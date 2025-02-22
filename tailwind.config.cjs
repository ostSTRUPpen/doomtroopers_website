/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/routes/**/*.{svelte,js,ts}', './src/lib/elements/**/*.{svelte,js,ts}'],
	plugins: [require('daisyui')],
	daisyui: {
		themes:[
			{
				doomtroopers: {
					primary: '#111827',

					secondary: '#2f3c4c',

					accent: '#c8f1f4',

					neutral: '#312235',
 
					"base-100": "#a8a29e",

					info: '#69acd3',

					success: '#7fe1cd',

					warning: '#dbad14',

					error: '#9f1239'
				},
			},
		]
	}

};

module.exports = config;
