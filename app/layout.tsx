import GoogleAddon from "@/src/app/google-addon";
import NoscriptTagManager from "@/src/app/noscript-tagmanager";
import { Providers } from "@/src/app/provider";
import "@/src/app/style/tailwind.css";
import { FAVICONS } from "@/src/shared/icons/favicons";
import { BASE_URL, SITE_NAME } from "@/src/shared/config/constant";
import { Footer } from "@/src/widgets/footer";
import { Header } from "@/src/widgets/header";
import type { Metadata } from "next";
import localFont from "next/font/local";

const pretendard = localFont({
	src: "../public/font/PretendardVariable.woff2",
	variable: "--font-pretendard",
	display: "block",
});

const title = SITE_NAME;
const description = "쉽게 읽는 개발 지식";

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s - ${SITE_NAME}`,
	},
	icons: FAVICONS,
	description,
	alternates: {
		canonical: BASE_URL,
	},
	openGraph: {
		title: SITE_NAME,
		description,
		url: BASE_URL,
		type: "website",
		siteName: `${SITE_NAME}`,
	},
	twitter: {
		card: "summary",
		site: BASE_URL,
		title,
		description,
	},
	robots: {
		// todo: 나중에 포스팅시 isReleased로 치환
		index: false,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<GoogleAddon />
			<Providers>
				<body className={`${pretendard.variable} font-pretendard`}>
					<Header />
					{children}
					<Footer />
					<NoscriptTagManager />
				</body>
			</Providers>
		</html>
	);
}
