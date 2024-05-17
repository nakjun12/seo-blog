import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				seo: {
					100: "#FFFFFF",
					200: "#F1F3F5",
					300: "#C4CDD7",
					400: "#868E96",
					500: "#495057",
					600: "#212529",
				},
			},
			fontWeight: {
				regular: "400",
			},
			fontSize: {
				1218: ["0.75rem", "1.125rem"],
				1222: ["0.75rem", "1.375rem"],
				1418: ["0.875rem", "1.125rem"],
				1422: ["0.875rem", "1.375rem"],
				1430: ["0.875rem", "1.875rem"],
				1618: ["1rem", "1.125rem"],
				1622: ["1rem", "1.375rem"],
				1624: ["1rem", "1.5rem"],
				1630: ["1rem", "1.875rem"],
				1818: ["1.125rem", "1.125rem"],
				1825: ["1.125rem", "1.5625rem"],
				1830: ["1.125rem", "1.875rem"],
				2640: ["1.625rem", "2.5rem"],
			},
		},
		screens: {
			xs: "320px",
			sm: "480px",
			md: "768px",
			lg: "1064px",
			xl: "1300px",
		},
		fontFamily: {
			pretendard: ["var(--font-pretendard)"],
		},
	},
	variants: {
		typography: ["dark"],
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
