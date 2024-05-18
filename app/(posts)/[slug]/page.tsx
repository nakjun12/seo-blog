import { getAllPosts } from "@/src/entities/posts/model/post";
import { Breadcrumb } from "@/src/shared/common-ui/breadcrumb";
import Link from "next/link";

interface PostProps {
	params: {
		slug: string;
	};
}
export default async function Category({ params: { slug } }: PostProps) {
	const posts = await getAllPosts();

	const allCategory = posts.filter((post) => post.filePath[0].includes(slug));

	return (
		<>
			<Breadcrumb />
			{allCategory.map((post) => {
				return (
					<div key={post.title}>
						<Link title={post.title} href={post.filePath[0]}>
							{post.title}
						</Link>
					</div>
				);
			})}
		</>
	);
}
