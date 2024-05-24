import { PostPage } from "@/src/_pages/post/post.page";
import {
	createMetaData,
	createUrl,
} from "@/src/entities/posts/lib/utils/post.util";
import { getAllPosts, getPost } from "@/src/entities/posts/model/post";
import { redirect } from "next/navigation";
import type { Metadata } from "next/types";

interface PostProps {
	params: {
		slug: string[];
	};
}
export default async function Post({ params: { slug } }: PostProps) {
	const post = await getPost(slug);
	if (!post) return redirect("/");
	return <PostPage post={post} />;
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
	const url = createUrl(filePath);
	const post = await getPost(filePath);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
	const metaData = createMetaData({ url, post });
	return metaData;
};
