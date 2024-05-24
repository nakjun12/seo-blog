import Image from "next/image";
import Link from "next/link";
import type { Frontmatter, Post } from "../model/post.type";
import dayjs from "dayjs";

interface PostProps {
	post: Post & Frontmatter;
}

export const PostCard = ({ post }: PostProps) => {
	dayjs.locale("ko");
	const date = dayjs(post.releaseDate).format("YYYY.MM.DD");

	return (
		<li className="flex h-full flex-col gap-3 rounded-md border shadow-md transition hover:shadow-xl">
			<Link
				href={post.filePath.join("/")}
				title={post.title}
				className="h-full"
			>
				<article className="flex flex-col h-full">
					<header className="flex-shrink-0">
						<div className="relative w-full aspect-[2/1] rounded-t-md border-b">
							<Image
								src={post.thumbnail}
								alt={post.title}
								title={post.title}
								placeholder="empty"
								fill
								priority
								sizes="(max-width: 000px) 50vw, 450px"
							/>
						</div>
						<h2 className="px-4 pt-5 text-1624 font-semibold sm:text-1825 md:text-1624 line-clamp-1">
							{post.title}
						</h2>
					</header>
					<section className="flex-grow h-28 px-4 py-3 text-1422 sm:text-1622 md:text-1422 ">
						<p className="h-full line-clamp-4">{post.description}</p>
					</section>
					<footer className="flex px-4 py-[11px] gap-1.5 h-11 text-seo-500 text-1222 border-t sm:text-1422 md:text-1222">
						<time dateTime={date}>{date}</time>
						<p>|</p>
						<span>{post.authorName}</span>
					</footer>
				</article>
			</Link>
		</li>
	);
};
