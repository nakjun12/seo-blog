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
				1218: ["12px", "18px"],
				1222: ["12px", "22px"],
				1418: ["14px", "18px"],
				1422: ["14px", "22px"],
				1430: ["14px", "30px"],
				1618: ["16px", "18px"],
				1622: ["16px", "22px"],
				1624: ["16px", "24px"],
				1630: ["16px", "30px"],
				1818: ["18px", "18px"],
				1825: ["18px", "25px"],
				1830: ["18px", "30px"],
				2640: ["26px", "40px"],
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
	plugins: [],
};
export default config;
