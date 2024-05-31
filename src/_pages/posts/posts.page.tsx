import type { Frontmatter, Post } from "@/src/entities/posts/model/post.type";
import { PostCardList } from "@/src/entities/posts/ui/post-card-list";
import { PostTitle } from "@/src/entities/posts/ui/post-title";
import { Breadcrumb } from "@/src/shared/common-ui/breadcrumb";

interface PostProps {
	posts: (Post & Frontmatter)[];
}
export const PostsPage = ({ posts }: PostProps) => {
	return (
		<>
			<Breadcrumb />
			<PostTitle title="DevDive의 모든 글" />
			<br />
			<PostCardList posts={posts} />
		</>
	);
};

export default PostsPage;
