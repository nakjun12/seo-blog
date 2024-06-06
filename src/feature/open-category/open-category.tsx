"use client";

import useToggleStore from "@/src/shared/stores/toggle-menu";
import { DesktopCategory } from "../desktop-category";

export const OpenCategory = ({ categories }: { categories: string[] }) => {
	const { isDesktopMenuOpen, toggleDesktopMenu } = useToggleStore();

	const handleMenuClick = () => {
		toggleDesktopMenu(!isDesktopMenuOpen);
	};

	return (
		<div className="hidden lg:block">
			<button
				type="button"
				onClick={handleMenuClick}
				className={`flex items-center gap-0.5 px-3 py-1.5 ${
					isDesktopMenuOpen && "bg-seo-200 rounded-md"
				}`}
			>
				<div
					className={`text-1422 font-medium ${
						isDesktopMenuOpen ? "text-seo-600" : "text-seo-500"
					}`}
				>
					카테고리
				</div>
				<div className="flex justify-center items-center">
					<span
						className={`transition-all duration-300 ease-out translate-x-[0.2rem]
        h-0.5 w-2 rounded-md ${
					isDesktopMenuOpen ? "-rotate-45 bg-seo-600" : "rotate-45 bg-seo-500"
				}`}
					/>
					<span
						className={`transition-all duration-300 ease-out translate-x--[0.2rem]
        h-0.5 w-2 rounded-md ${
					isDesktopMenuOpen ? "rotate-45 bg-seo-600" : "-rotate-45 bg-seo-500"
				}`}
					/>
				</div>
			</button>
			<DesktopCategory categories={categories} />
		</div>
	);
};
