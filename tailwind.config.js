/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: 'class',
	content: [
		"./src/**/*.{html,ts}",
	  ],
	theme: {
	  colors: {
		  'catalina-blue' : {
			  50: '#e5f7ff',
			  100: '#cff0ff',
			  200: '#a9e0ff',
			  300: '#76c9ff',
			  400: '#409fff',
			  500: '#1674ff',
			  600: '#005eff',
			  700: '#0060ff',
			  800: '#0055e2',
			  900: '#013cae',
			  950: '#012677'
		  },
		  yellow: colors.yellow,
		  gray: colors.gray
	  },
    extend: {},
  },
  plugins: [],
}

