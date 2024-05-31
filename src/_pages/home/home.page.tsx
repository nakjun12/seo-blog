import type { Frontmatter, Post } from "@/src/entities/posts/model/post.type";
import { PostCardList } from "@/src/entities/posts/ui/post-card-list";
import { PostTitle } from "@/src/entities/posts/ui/post-title";

interface HomeProps {
	posts: (Post & Frontmatter)[];
}

const HomePage = ({ posts }: HomeProps) => {
	return (
		<main className="px-4 mx-auto lg:max-w-6xl">
			<br />
			<PostTitle title="All Posts" />
			<br />
			<PostCardList posts={posts} />
		</main>
	);
};

export default HomePage;
