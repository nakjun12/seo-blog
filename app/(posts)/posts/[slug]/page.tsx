import { getCategoryPosts } from "@/src/entities/posts/model/post";
import { PostCardList } from "@/src/entities/posts/ui/post-card-list";
import { PostTitle } from "@/src/entities/posts/ui/post-title";
import { Breadcrumb } from "@/src/shared/common-ui/breadcrumb";

interface PostProps {
	params: {
		slug: string;
	};
}
export default async function Category({ params: { slug } }: PostProps) {
	const posts = await getCategoryPosts(slug);

	return (
		<>
			<Breadcrumb />
			<PostTitle title={`${slug} 카테고리`} />
			<br />
			<PostCardList posts={posts} />
		</>
	);
}
