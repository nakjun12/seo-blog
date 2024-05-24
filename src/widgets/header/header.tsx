"use client";

import { useScrollDirection } from "@/src/shared/hooks/use-scroll-direction";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
	const scrollDirection = useScrollDirection();
	const [isNav, setIsNav] = useState(true);
	const path = usePathname();

	useEffect(() => {
		if (scrollDirection === "up") {
			setIsNav(true);
		} else {
			setIsNav(false);
		}
	}, [scrollDirection]);

	return (
		<header className="top-0 z-50 mx-auto lg:max-w-6xl h-14  sticky">
			{isNav && (
				<nav className="h-full p-4 border-b bg-seo-100">
					<Link
						href="/"
						title="DevDive"
						className="text-1218 text-seo-100 bg-seo-600 rounded-full px-2 py-1.5"
						onClick={(e) => {
							if (path === "/") {
								e.preventDefault();
							}
						}}
					>
						DevDive
					</Link>
				</nav>
			)}
		</header>
	);
};
