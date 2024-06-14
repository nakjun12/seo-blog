"use client";

import type { TocItem } from "@/src/entities/posts/lib/utils/toc.util";
import Link from "next/link";

interface TocProps {
	toc: TocItem[];
}

export const TopToc = ({ toc }: TocProps) => {
	const handleLinkClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		id: string,
	) => {
		e.preventDefault();
		const offset = 50; // 네브바의 높이 또는 원하는 오프셋 값
		const element = document.getElementById(id);
		if (element) {
			const elementTop =
				element.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top: elementTop, behavior: "smooth" });
		}
	};

	if (!toc) return null;

	return (
		<section className="xl:hidden h-full my-8 px-4 pb-4 border-b">
			<div className="text-1830 md:text-2034 text-seo-600 font-semibold">
				목차
			</div>
			<ul className="px-4 py-1 text-1624 md:text-1825">
				{toc.map((item) => (
					<li
						key={item.id}
						style={{ marginLeft: item.indent * 12 }}
						className="mt-2 text-seo-500  hover:font-semibold ease-in transition-all overflow-x-hidden overflow-y-auto"
					>
						<Link
							href={`#${item.id}`}
							title={item.text}
							onClick={(e) => handleLinkClick(e, item.id)}
						>
							{item.text}
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};
