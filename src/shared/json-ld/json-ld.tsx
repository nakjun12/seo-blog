"use client";

import { Frontmatter, Post } from "@/src/entities/posts/model/post.type";
import { BASE_URL, SITE_NAME } from "@/src/shared/config/constant";
import { usePathname } from "next/navigation";
import Script from "next/script";

const generateWebsiteJsonLdData = () => {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE_NAME,
		url: BASE_URL,
		author: {
			"@type": "Organization",
			name: SITE_NAME,
		},
	};
};

const generatePostJsonLdData = (post: Frontmatter) => {
	const pathname = usePathname();
	return {
		"@context": "https://schema.org/",
		"@type": "TechArticle",
		headline: post.title,
		author: {
			"@type": "Person",
			name: post.authorName,
			url: `${BASE_URL}${pathname}`,
		},
		datePublished: post.releaseDate,
		dateCreated: post.writeDate,
		description: post.description,
		url: `${BASE_URL}${pathname}`,
		"inLanguage ": "ko-KR",
		image: post.thumbnail,
	};
};

export const PostJsonLD = ({ post }: { post: Post & Frontmatter }) => {
	const postJsonLd = generatePostJsonLdData(post);
	return (
		<Script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
		/>
	);
};

export const WebsiteJsonLd = () => {
	const websiteJsonLd = generateWebsiteJsonLdData();
	return (
		<Script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
		/>
	);
};
