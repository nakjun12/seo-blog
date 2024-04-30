import { getPost } from "@/src/entities/posts/model";
import { PostsPage } from "@/src/pages/posts";
import { redirect } from "next/navigation";

interface PostProps {
	params: {
		slug: string[];
	};
}

export default async function Home({ params: { slug } }: PostProps) {
	const post = await getPost(slug);
	if (!post) return redirect("/");
	return <PostsPage />;
}
