import type { TocItem } from "@/src/entities/posts/lib/utils/toc.util";
import type { Frontmatter, Post } from "@/src/entities/posts/model/post.type";
import { PostAuthorFoot } from "@/src/entities/posts/ui/post-author-foot";
import { PostAuthorHead } from "@/src/entities/posts/ui/post-author-head";
import { PostTitle } from "@/src/entities/posts/ui/post-title";
import { PostTitleImage } from "@/src/entities/posts/ui/post-title-image";
import { Breadcrumb } from "@/src/shared/common-ui/breadcrumb";
import { MdxRemote } from "@/src/shared/common-ui/mdx";
import { SideToc } from "@/src/shared/common-ui/side-toc/side-toc";
import { TopToc } from "@/src/shared/common-ui/top-toc/top-toc";
import { PostJsonLD } from "@/src/shared/json-ld/json-ld";

interface PostProps {
	post: Post & Frontmatter;
	toc: TocItem[];
}

export const PostPage = ({ post, toc }: PostProps) => {
	return (
		<>
			<PostJsonLD post={post} />
			<Breadcrumb postTitle={post.title} />
			<PostTitle title={post.title} />
			<PostAuthorHead
				authorName={post.authorName}
				authorIcon={post.authorIcon}
				releaseDate={post.releaseDate}
			/>
			<PostTitleImage image={post.thumbnail} title={post.title} />
			<div className="relative">
				<TopToc toc={toc} />
				<SideToc toc={toc} />
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
