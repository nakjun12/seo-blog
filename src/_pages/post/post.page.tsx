import type { TocItem } from "@/src/entities/posts/lib/utils/toc.util";
import type { Frontmatter, Post } from "@/src/entities/posts/model/post.type";
import { PostAuthorFoot } from "@/src/entities/posts/ui/post-author-foot";
import { PostAuthorHead } from "@/src/entities/posts/ui/post-author-head";
import { PostTitle } from "@/src/entities/posts/ui/post-title";
import { Breadcrumb } from "@/src/shared/common-ui/breadcrumb";
import { MdxRemote } from "@/src/shared/common-ui/mdx";
import { Toc } from "@/src/shared/common-ui/toc/toc";

interface PostProps {
	post: Post & Frontmatter;
	toc: TocItem[];
}

export const PostPage = ({ post, toc }: PostProps) => {
	return (
		<>
			<Breadcrumb postTitle={post.title} />
			<PostTitle title={post.title} />
			<PostAuthorHead
				authorName={post.authorName}
				authorIcon={post.authorIcon}
				releaseDate={post.releaseDate}
			/>
			<div className="relative">
				<Toc toc={toc} />
				<MdxRemote source={post.content} />
			</div>
			<PostAuthorFoot
				authorName={post.authorName}
				authorIcon={post.authorIcon}
				authorIntro={post.authorIntro}
			/>
		</>
	);
};

export default PostPage;
