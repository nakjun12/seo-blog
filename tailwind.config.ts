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
					400: "#495057",
					500: "#868E96",
					600: "#212529",
				},
			},
		},
	},
	plugins: [],
};
export default config;
