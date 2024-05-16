import { PostsPage } from "@/src/_pages/posts/posts.page";
import { getAllPosts, getPost } from "@/src/entities/posts/model/post";
import { BASE_URL, SITE_NAME } from "@/src/shared/config/constant";
import dayjs from "dayjs";
import { redirect } from "next/navigation";
import type { Metadata } from "next/types";

interface PostProps {
	params: {
		slug: string[];
	};
}

export default async function Home({ params: { slug } }: PostProps) {
	const post = await getPost(slug);
	if (!post) return redirect("/");
	return <PostsPage post={post} />;
}

export const generateStaticParams = async () => {
	return (await getAllPosts()).map((post) => ({
		slug: post.filePath,
	}));
};

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string[] };
}): Promise<Metadata> => {
	const filePath = params.slug;
	const baseUrl = BASE_URL;
	const post = await getPost(filePath);
	const url = `${baseUrl}/${filePath.join("/")}`;
	const today = dayjs(new Date().toISOString());
	const isReleased =
		today.isSame(post?.releaseDate) || today.isBefore(post?.releaseDate);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
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
