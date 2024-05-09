import type { Frontmatter, Post } from "@/src/entities/posts/model/post.type";
import { PostAuthorHead } from "@/src/entities/posts/ui/post-author-head";
import { PostTitle } from "@/src/entities/posts/ui/post-title";
import { MdxRemote } from "@/src/shared/common-ui/mdx";

interface PostProps {
	post: Post & Frontmatter;
}

export const PostsPage = ({ post }: PostProps) => {
	return (
		<>
			<PostTitle title={post.title} />
			<PostAuthorHead
				authorName={post.authorName}
				authorIcon={post.authorIcon}
				writeDate={post.writeDate}
			/>
			<MdxRemote source={post.content} />
		</>
	);
};

export default PostsPage;
