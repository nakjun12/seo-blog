import HomePage from "@/src/_pages/home/home.page";
import { getAllPosts } from "@/src/entities/posts/model/post";

export default async function Home() {
	const posts = await getAllPosts();

	return <HomePage posts={posts} />;
}
