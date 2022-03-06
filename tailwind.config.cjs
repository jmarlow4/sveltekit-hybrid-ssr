const mediaQueries = require('./src/theme/media-queries.json');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('daisyui')
	],
	daisyui: {
		themes: ['emerald']
	},
	theme: {
		screens: {
			...mediaQueries
		},
		fontFamily: {
			serif: ['ui-serif', 'Georgia'],
			sans: [
				'Segoe UI',
				'Roboto',
				'Oxygen',
				'Ubuntu',
				'Cantarell',
				'Open Sans',
				'Helvetica Neue',
				'sans-serif'
			],
			mono: ['ui-monospace', 'SFMono-Regular']
		}
	}
};

module.exports = config;
