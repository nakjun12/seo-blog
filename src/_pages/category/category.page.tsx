import type { Frontmatter, Post } from "@/src/entities/posts/model/post.type";
import { PostCardList } from "@/src/entities/posts/ui/post-card-list";
import { PostTitle } from "@/src/entities/posts/ui/post-title";
import { Breadcrumb } from "@/src/shared/common-ui/breadcrumb";

interface PostProps {
	posts: (Post & Frontmatter)[];
	slug: string;
}
export const CategoryPage = ({ posts, slug }: PostProps) => {
	return (
		<>
			<Breadcrumb />
			<PostTitle title={`${slug} 카테고리`} />
			<br />
			<PostCardList posts={posts} />
		</>
	);
};

export default CategoryPage;
