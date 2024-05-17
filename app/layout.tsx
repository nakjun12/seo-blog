import { Providers } from "@/src/app/provider";
import "@/src/app/style/tailwind.css";
import localFont from "next/font/local";

import { SITE_NAME } from "@/src/shared/config/constant";
import type { Metadata } from "next";

const pretendard = localFont({
	src: "../public/font/PretendardVariable.woff2",
	variable: "--font-pretendard",
	display: "block",
});

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s - ${SITE_NAME}`,
	},
	description: "쉽게 읽는 개발 지식",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<Providers>
				<body className={`${pretendard.variable} font-pretendard`}>
					{children}
				</body>
			</Providers>
		</html>
	);
}
