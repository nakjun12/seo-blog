import CategoryPage from "@/src/_pages/category/category.page";
import { getCategoryPosts } from "@/src/entities/posts/model/post";

interface PostProps {
	params: {
		slug: string;
	};
}
export default async function Category({ params: { slug } }: PostProps) {
	const posts = await getCategoryPosts(slug);

	return <CategoryPage posts={posts} slug={slug} />;
}
