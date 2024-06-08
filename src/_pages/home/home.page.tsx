import type { Frontmatter, Post } from "@/src/entities/posts/model/post.type";
import { PostCardList } from "@/src/entities/posts/ui/post-card-list";
import { PostTitle } from "@/src/entities/posts/ui/post-title";
import { RecommendPost } from "@/src/entities/posts/ui/recommend-post";

interface HomeProps {
	posts: (Post & Frontmatter)[];
}

const HomePage = ({ posts }: HomeProps) => {
	const [firstContent, ...anotherContents] = posts;

	return (
		<main className="px-4 mx-auto lg:max-w-screen-xl">
			<br />
			<PostTitle title="DevDive의 모든 글" />
			<RecommendPost post={firstContent} />
			<br />
			<PostCardList posts={anotherContents} />
		</main>
	);
};

export default HomePage;
