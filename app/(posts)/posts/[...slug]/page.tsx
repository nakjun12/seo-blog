import { getPost } from "@/src/entities/posts/model/post";
import { PostsPage } from "@/src/_pages/posts/posts.page";
import { redirect } from "next/navigation";

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
