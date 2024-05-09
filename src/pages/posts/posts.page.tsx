import type { Frontmatter, Post } from "@/src/entities/posts/model/post.type";
import { PostTitle } from "@/src/entities/posts/ui/post-title";
import { MdxRemote } from "@/src/shared/common-ui/mdx";

interface PostProps {
	post: Post & Frontmatter;
}

export const PostsPage = ({ post }: PostProps) => {
	return (
		<>
			<PostTitle title={post.title} />
			<MdxRemote source={post.content} />
		</>
	);
};

export default PostsPage;
