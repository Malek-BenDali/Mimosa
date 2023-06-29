/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		colors: {
			...colors,
			transparent: "transparent",
			white: "#fff",
			"mimosa-yellow": "#D2C04A",
			"mimosa-brown": "#322F13",
			"mimosa-green": "#88A16C",
		},
	},
	plugins: [],
}
