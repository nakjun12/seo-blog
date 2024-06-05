"use client";

import {
	getScrollTop,
	type TocItem,
} from "@/src/entities/posts/lib/utils/toc.util";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface TocProps {
	toc: TocItem[];
}

interface TocTops {
	id: string;
	top: number;
}

export const Toc = ({ toc }: TocProps) => {
	const [activeId, setActiveId] = useState<string | null>(null);
	const [tocTops, setTocTops] = useState<TocTops[] | null>(null);

	const updateTocPositions = useCallback(() => {
		if (!toc) return;

		const scrollTop = getScrollTop();
		const tocTops = toc.map(({ id }) => {
			const element = document.getElementById(id);
			const top = element ? element.getBoundingClientRect().top + scrollTop : 0;

			return {
				id,
				top,
			};
		});
		setTocTops(tocTops);
	}, [toc]);

	useEffect(() => {
		updateTocPositions();
		let preScrollHeight = document.body.scrollHeight;
		let timeoutId: ReturnType<typeof setTimeout> | null = null;

		const checkScrollHeight = () => {
			const currentScrollHeight = document.body.scrollHeight;
			if (preScrollHeight !== currentScrollHeight) {
				updateTocPositions();
			}
			preScrollHeight = currentScrollHeight;
			timeoutId = setTimeout(checkScrollHeight, 250);
		};

		timeoutId = setTimeout(checkScrollHeight, 250);
		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, [updateTocPositions]);

	const onScroll = useCallback(() => {
		const scrollTop = getScrollTop();
		if (!tocTops) return;

		const currentHeading = [...tocTops].reverse().find((tocTop) => {
			return scrollTop >= tocTop.top - 4;
		});
		setActiveId(currentHeading ? currentHeading.id : null);
	}, [tocTops]);

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [onScroll]);

	useEffect(() => {
		onScroll();
	}, [onScroll]);

	if (!toc || !tocTops) return null;

	return (
		<aside className="absolute -top-[200px] -mb-[100px] h-[calc(100%+150px)] left-full hidden xl:block">
			<div className="sticky bottom-0 top-[200px] z-10 ml-[5rem] mt-[200px] w-[200px] overflow-y-auto overflow-x-hidden">
				<ul className="border-l px-5 py-1 text-1618">
					{toc.map((item) => (
						<li
							key={item.id}
							style={{ marginLeft: item.indent * 12 }}
							className={`mt-2 text-seo-500  hover:font-semibold ease-in transition-all ${
								activeId === item.id && "text-seo-600 font-semibold scale-105"
							}`}
						>
							<Link href={`#${item.id}`} title={item.text}>
								{item.text}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};
