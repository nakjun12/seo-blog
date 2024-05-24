import type { Config } from "tailwindcss";

import typography from "@tailwindcss/typography";
import lineClamp from "@tailwindcss/line-clamp";

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
			typography: {
				DEFAULT: {
					css: {
						h2: {
							color: "#212529",
							fontSize: 24,
							fontWeight: 600,
						},
						h3: {
							color: "#212529",
							fontSize: 20,
							fontWeight: 600,
						},
						h4: {
							color: "#212529",
							fontSize: 18,
							fontWeight: 600,
						},
						p: {
							color: "#495057",
							fontSize: 16,
							fontWeight: 400,
						},
						ul: {
							margin: 0,
							paddingLeft: "1.5rem",
							li: {
								padding: 0,
								margin: 0,
							},
						},
						li: {
							color: "#495057",
							fontSize: 16,
							fontWeight: 400,
							"&::marker": {
								color: "#495057",
							},
						},
						blockquote: {
							backgroundColor: "#F1F3F5",
							borderInlineStartColor: "#495057",
							borderTopRightRadius: "0.25rem",
							borderBottomRightRadius: "0.25rem",
							quotes: "none",
							fontStyle: "normal",
							margin: 0,
							padding: "1rem",
							p: {
								margin: 0,
								padding: 0,
							},
						},
						code: {
							color: "#495057",
							fontWeight: 600,
							padding: "0.1rem 0.3rem",
							borderRadius: 3,
							background: "#F1F3F5",
							border: "1px solid #C4CDD7",
							margin: "0 0.3rem",
							"&::before, &::after": {
								display: "none",
							},
						},
						a: {
							color: "#3182ce",
							"&:hover": {
								color: "#2c5282",
							},
						},
						img: {
							margin: "auto",
						},
					},
				},
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
	plugins: [typography, lineClamp],
};
export default config;
