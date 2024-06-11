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

export const SideToc = ({ toc }: TocProps) => {
	const [activeId, setActiveId] = useState<string | null>(null);
	const [tocTops, setTocTops] = useState<TocTops[] | null>(null);

	const updateTocPositions = useCallback(() => {
		if (!toc) return;

		const scrollTop = getScrollTop();
		const tocTops = toc.map(({ id }, index) => {
			const element = document.getElementById(id);
			const top = element ? element.getBoundingClientRect().top + scrollTop : 0;

			return {
				id,
				top: index === 0 ? 0 : top,
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
			return scrollTop >= tocTop.top - 50;
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

	return (
		<aside className="absolute -top-[200px] -mb-[100px] h-[calc(100%+150px)] left-full hidden xl:block">
			<div className="sticky bottom-0 top-[200px] z-10 ml-[4rem] mt-[200px] w-[200px] overflow-y-auto overflow-x-hidden">
				<ul className="border-l px-4 py-1 text-1418">
					{toc.map((item) => (
						<li
							key={item.id}
							style={{ marginLeft: item.indent * 12 }}
							className={`mt-2 text-seo-500  hover:font-semibold ease-in transition-all overflow-x-hidden overflow-y-auto ${
								activeId === item.id && "text-seo-600 font-semibold scale-105"
							}`}
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
			</div>
		</aside>
	);
};
