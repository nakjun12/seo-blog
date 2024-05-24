import type { Frontmatter, Post } from "../model/post.type";
import { PostCard } from "./post-card";

interface PostsProps {
	posts: (Post & Frontmatter)[];
}

export const PostCardList = ({ posts }: PostsProps) => {
	return (
		<ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0">
			{posts.map((post) => (
				<PostCard key={post.title} post={post} />
			))}
		</ul>
	);
};
