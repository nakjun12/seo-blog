import { BASE_URL, SITE_NAME } from "@/src/shared/config/constant";
import dayjs from "dayjs";
import type { Metadata } from "next/types";
import type { Frontmatter } from "../../model/post.type";

export const createMetaData = ({
	url,
	post,
}: {
	url: string;
	post: Frontmatter;
}): Metadata => {
	const today = dayjs(new Date().toISOString());
	const isReleased =
		today.isSame(post?.releaseDate, "day") &&
		!today.isBefore(post?.releaseDate, "day");
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

export const createUrl = (filePath: string[]) => {
	const url = `${BASE_URL}/${filePath.join("/")}`;
	return url;
};
