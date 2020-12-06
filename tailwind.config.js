module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
			"-sm": { min: "640px", max: "767px" },
			"-md": { min: "768px", max: "1023px" },
			"-lg": { min: "1024px", max: "1279px" },
			"-xl": { min: "1280px", max: "1535px" },
			"-2xl": { min: "1536px" },
		},
		extend: {},
	},
	variants: {},
	plugins: [],
};
