"use client";

import type { TocItem } from "@/src/entities/posts/lib/utils/toc.util";
import Link from "next/link";

interface TocProps {
	toc: TocItem[];
}

export const Toc = ({ toc }: TocProps) => {
	return (
		<aside className="absolute -top-[200px] -mb-[100px] h-[calc(100%+150px)] left-full hidden xl:block">
			<div className="sticky bottom-0 top-[200px] z-10 ml-[5rem] mt-[200px] w-[200px] overflow-y-auto overflow-x-hidden">
				<ul className="border-l px-5 py-1 text-1618">
					{toc.map((item) => (
						<li
							key={item.link}
							style={{ marginLeft: item.indent * 12 }}
							className="mt-2 text-seo-500 active:text-seo-600 active:font-semibold hover:font-semibold"
						>
							<Link href={`${item.link}`} title={item.text}>
								{item.text}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};
