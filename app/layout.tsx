import GoogleAddon from "@/src/app/google-addon";
import NoscriptTagManager from "@/src/app/noscript-tagmanager";
import { Providers } from "@/src/app/provider";
import "@/src/app/style/tailwind.css";
import { getCategories } from "@/src/entities/posts/model/post";
import {
	BASE_URL,
	OPEN_GRAHPH_IMAGE_NAME,
	SITE_NAME,
} from "@/src/shared/config/constant";
import { FAVICONS } from "@/src/shared/icons/favicons";
import { WebsiteJsonLd } from "@/src/shared/json-ld/json-ld";
import { Footer } from "@/src/widgets/footer";
import { Header } from "@/src/widgets/header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import AutoRefresh from "./auto-refresh";

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
		images: {
			url: `${BASE_URL}/${OPEN_GRAHPH_IMAGE_NAME}`,
			alt: "description of the blog site",
			width: 1200,
			height: 600,
		},
	},
	twitter: {
		card: "summary",
		site: BASE_URL,
		title,
		description,
		images: {
			url: `${BASE_URL}/${OPEN_GRAHPH_IMAGE_NAME}`,
			alt: "description of the blog site",
			width: 1200,
			height: 600,
		},
	},
	robots: {
		index: true,
	},
};

export const revalidate = 60 * 60 * 24;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const categories = getCategories();

	return (
		<AutoRefresh>
			<html lang="ko">
				<WebsiteJsonLd />
				<GoogleAddon />
				<Providers>
					<body className={`${pretendard.variable} font-pretendard`}>
						<Header categories={categories} />
						{children}
						<Footer />
						<NoscriptTagManager />
					</body>
				</Providers>
			</html>
		</AutoRefresh>
	);
}
