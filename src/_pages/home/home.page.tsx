import { PostTitle } from "@/src/entities/posts/ui/post-title";
import Link from "next/link";

const HomePage = () => {
	return (
		<main className="px-4 mx-auto lg:max-w-6xl">
			<PostTitle title="🚧공사 중🚧" />
			<br />
			<p className="text-2640">카테고리</p>
			<div className="flex gap-2 p-0">
				<Link
					href="/react"
					title="react 카테고리"
					className="text-1830 bg-seo-500 hover:bg-seo-400 text-white font-bold py-1 px-4 rounded"
				>
					react
				</Link>
				<Link
					href="/next"
					title="next 카테고리"
					className="text-1830 bg-seo-500 hover:bg-seo-400 text-white font-bold py-1 px-4 rounded"
				>
					next
				</Link>
			</div>
		</main>
	);
};

export default HomePage;
