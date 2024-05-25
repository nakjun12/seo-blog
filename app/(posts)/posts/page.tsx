import PostsPage from "@/src/_pages/posts/posts.page";
import { BASE_URL } from "@/src/shared/config/constant";
import { createPostsMetaData } from "@/src/entities/posts/lib/utils/post.util";
import { getAllPosts } from "@/src/entities/posts/model/post";
import { redirect } from "next/navigation";
import type { Metadata } from "next/types";

export default async function Posts() {
	const posts = await getAllPosts();
	if (!posts) return redirect("/");

	return <PostsPage posts={posts} />;
}

export const generateMetadata = async (): Promise<Metadata> => {
	const url = `${BASE_URL}/posts`;

	const metaData = createPostsMetaData({ url, category: "all posts" });
	return metaData;
};
