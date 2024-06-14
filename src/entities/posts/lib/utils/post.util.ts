import { BASE_URL, SITE_NAME } from "@/src/shared/config/constant";
import type { Metadata } from "next/types";
import type { Frontmatter } from "../../model/post.type";
import { findOutIsReleased } from "./time.util";

export const createMetaData = ({
	url,
	post,
}: {
	url: string;
	post: Frontmatter;
}): Metadata => {
	const isReleased = findOutIsReleased(post.releaseDate);
	return {
		title: post.title,
		description: post.description,
		alternates: {
			canonical: url,
		},
		authors: {
			name: post.authorName,
		},
		openGraph: {
			title: post.title,
			description: post.description,
			url: url,
			type: "website",
			siteName: `${SITE_NAME}`,
		},
		twitter: {
			creator: post.authorName,
			card: "summary",
			site: url,
			title: post.title,
			description: post.description,
		},
		robots: {
			index: isReleased,
		},
	};
};

export const createPostsMetaData = ({
	url,
	category,
}: {
	url: string;
	category: string;
}): Metadata => {
	const title = `${category}`;
	const description =
		category === "all posts"
			? "DevDive의 모든 게시글을 확인해보세요."
			: `${category} 카테고리의 모든 게시글을 확인해보세요.`;

	return {
		title,
		description,
		alternates: {
			canonical: url,
		},
		openGraph: {
			title,
			description,
			url: url,
			type: "website",
			siteName: `${SITE_NAME}`,
		},
		twitter: {
			card: "summary",
			site: url,
			title,
			description,
		},
		robots: {
			index: true,
		},
	};
};

export const createUrl = (filePath: string[]) => {
	const url = `${BASE_URL}/${filePath.join("/")}`;
	return url;
};
