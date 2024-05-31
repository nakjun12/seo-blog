"use client";

import { capitalizeFirstLetter } from "@/src/entities/posts/lib/utils/language.util";
import useToggleStore from "@/src/shared/stores/toggle-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const MobileCategory = ({ categories }: { categories: string[] }) => {
	const { isMenuOpen, toggleMenu } = useToggleStore();
	const pathname = usePathname().replace(/\//g, "");

	useEffect(() => {
		const handleResize = () => {
			toggleMenu(false);
		};

		window.addEventListener("resize", handleResize);

		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			window.removeEventListener("resize", handleResize);
			document.body.style.overflow = "";
		};
	}, [isMenuOpen, toggleMenu]);

	return (
		<menu className="absolute top-12 left-0 w-full bg-white shadow-lg z-50 lg:hidden  h-[2000px] overflow-y-auto p-6 flex flex-col gap-6">
			{categories.map((category) => (
				<Link
					href={`/${category}`}
					title={category}
					key={category}
					onClick={(e) => {
						if (pathname === category) {
							e.preventDefault();
						} else {
							toggleMenu(false);
						}
					}}
					className={`text-1818   ${
						pathname === category
							? "text-seo-600 font-medium"
							: "text-seo-400 font-normal hover:text-seo-500"
					}`}
				>
					{capitalizeFirstLetter(category)}
				</Link>
			))}
		</menu>
	);
};
