"use client";

import type { TocItem } from "@/src/entities/posts/lib/utils/toc.util";
import Link from "next/link";

interface TocProps {
	toc: TocItem[];
}

export const Toc = ({ toc }: TocProps) => {
	return (
		<aside className="absolute -top-[200px] -mb-[100px] h-[calc(100%+150px)] left-[70%]">
			<ul className="sticky bottom-0 top-[200px] z-10 ml-[5rem] mt-[200px] w-[200px] ">
				{toc.map((item) => (
					<li key={item.link} style={{ marginLeft: item.indent * 12 }}>
						<Link href={`${item.link}`}>{item.text}</Link>
					</li>
				))}
			</ul>
		</aside>
	);
};
