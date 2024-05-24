import PostsPage from "@/src/_pages/posts/posts.page";
import { getAllPosts } from "@/src/entities/posts/model/post";

export default async function Posts() {
	const posts = await getAllPosts();

	return <PostsPage posts={posts} />;
}
