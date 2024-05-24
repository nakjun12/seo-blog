import { getAllPosts } from "@/src/entities/posts/model/post";
import { PostCard } from "@/src/entities/posts/ui/post-card";
import { Breadcrumb } from "@/src/shared/common-ui/breadcrumb";

interface PostProps {
	params: {
		slug: string;
	};
}
export default async function Category({ params: { slug } }: PostProps) {
	const posts = await getAllPosts();

	const allCategory = posts.filter(
		(post) => post.filePath[0].split("\\")[1] === slug,
	);

	return (
		<>
			<Breadcrumb />
			{allCategory.map((post) => {
				console.log(posts);
				console.log(allCategory);
				return <PostCard key={post.releaseDate} post={post} />;
			})}
		</>
	);
}
