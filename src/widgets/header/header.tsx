"use client";

import { MobileCategory, OpenCategory, OpenMenu } from "@/src/feature";
import { ProgressBar } from "@/src/shared/common-ui/progress-bar";
import { useScrollDirection } from "@/src/shared/hooks/use-scroll-direction";
import useToggleStore from "@/src/shared/stores/toggle-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = ({ categories }: { categories: string[] }) => {
	const scrollDirection = useScrollDirection();
	const { isMenuOpen } = useToggleStore();
	const [isNav, setIsNav] = useState(true);
	const [isDesktop, setIsDesktop] = useState(
		typeof window !== "undefined" && 1064 <= window.innerWidth,
	);
	const path = usePathname();
	const depth = path.split("/").length;

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(1064 <= window.innerWidth);
		};

		if (scrollDirection === "up") {
			setIsNav(true);
		} else {
			setIsNav(false);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [scrollDirection]);

	return (
		<header className="top-0 z-50 mx-auto lg:max-w-6xl h-[50px] sticky min-h-[]">
			<nav>
				<div
					className={`h-full p-2 border-b bg-seo-100 flex justify-between items-center lg:justify-start lg:gap-3 transition-transform duration-300 ease-in-out ${
						isNav
							? "transform-none opacity-100"
							: "transform -translate-y-full opacity-0"
					}`}
				>
					<Link
						href="/"
						title="DevDive"
						className="text-1218 text-seo-100 bg-seo-600 rounded-full px-2 py-1.5 my-0.5"
						onClick={(e) => {
							if (path === "/") {
								e.preventDefault();
							}
						}}
					>
						DevDive
					</Link>
					{isDesktop ? (
						<OpenCategory categories={categories} />
					) : (
						<>
							<OpenMenu />
							{isMenuOpen && <MobileCategory categories={categories} />}
						</>
					)}
				</div>
				{depth === 3 && !isNav && <ProgressBar />}
			</nav>
		</header>
	);
};
