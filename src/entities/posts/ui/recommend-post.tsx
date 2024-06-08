import Image from "next/image";
import Link from "next/link";
import type { Frontmatter, Post } from "../model/post.type";
import dayjs from "dayjs";

interface PostProps {
	post: Post & Frontmatter;
}

export const RecommendPost = ({ post }: PostProps) => {
	dayjs.locale("ko");
	const date = dayjs(post.releaseDate).format("YYYY.MM.DD");
	const postLink = `${post.filePath.join("/")}`;

	return (
		<section className="flex flex-col gap-3 mt-3 h-full lg:h-[302px] shadow-md transition hover:shadow-xl rounded-md border">
			<Link href={postLink} title={post.title} className="h-full">
				<article className="flex flex-col lg:flex-row">
					<div className="relative aspect-[2/1] lg:h-[300px] lg:aspect-[5/3] rounded-md">
						<Image
							src={post.thumbnail}
							alt={post.title}
							title={post.title}
							placeholder="empty"
							fill
							priority
							sizes="(min-width: 1300px) 410px, (min-width: 1064px) calc((100vw - 64px) / 3), (min-width: 768px) calc((100vw - 48px) / 2), calc(100vw - 32px)"
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div className="flex flex-col justify-between h-full lg:h-[300px]">
						<div>
							<h2 className="px-4 lg:px-5 pt-3 lg:pt-6 text-1624 sm:text-1825 md:text-1624 lg:text-3240 font-semibold line-clamp-1">
								{post.title}
							</h2>
							<p className="px-4 lg:px-5 mb-4 lg:mt-3 h-[100px] lg:h-[150px] py-3 text-1422 sm:text-1622 md:text-1422 lg:text-2034 lg:text-seo-500  line-clamp-4">
								{post.description}
							</p>
						</div>
						<div className="px-4 lg:px-5 flex py-[11px] lg:py-5 gap-1.5 text-seo-500 text-1222 border-t lg:border-0 sm:text-1422 md:text-1222 lg:text-1818 lg:text-seo-400">
							<time dateTime={date}>{date}</time>
							<p>|</p>
							<span>{post.authorName}</span>
						</div>
					</div>
				</article>
			</Link>
		</section>
	);
};
