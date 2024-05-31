"use client";

import useToggleStore from "@/src/shared/stores/toggle-menu";
import { useEffect } from "react";

export const MobileCategory = ({ categories }: { categories: string[] }) => {
	const { isMenuOpen, toggleMenu } = useToggleStore();

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
		<menu className="absolute top-12 left-0 w-full bg-white shadow-lg z-50 lg:hidden  h-[2000px] overflow-y-auto">
			{categories.map((category) => (
				<div key={category}>{category}</div>
			))}
		</menu>
	);
};
