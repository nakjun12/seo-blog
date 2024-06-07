"use client";

import { capitalizeFirstLetter } from "@/src/entities/posts/lib/utils/language.util";
import useToggleStore from "@/src/shared/stores/toggle-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DesktopCategory = ({ categories }: { categories: string[] }) => {
	const { isDesktopMenuOpen, toggleDesktopMenu } = useToggleStore();
	const pathname = usePathname().replace(/\//g, "");

	return (
		<menu
			className={`absolute top-[48px] left-[80px] h-14 bg-white shadow-xl z-50 p-6 flex gap-6 rounded-md border border-seo-200 items-center ${
				isDesktopMenuOpen ? "" : "hidden"
			}`}
		>
			{categories.map((category) => (
				<Link
					href={`/${category}`}
					title={category}
					key={category}
					onClick={(e) => {
						if (pathname === category) {
							e.preventDefault();
						} else {
							toggleDesktopMenu(false);
						}
					}}
					className={`text-1418 rounded-md p-2 ${
						pathname === category
							? "text-seo-600 font-semibold"
							: "text-seo-500 font-normal hover:bg-seo-200 hover:font-medium"
					}`}
				>
					{capitalizeFirstLetter(category)}
				</Link>
			))}
		</menu>
	);
};
