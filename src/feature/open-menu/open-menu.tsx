"use client";
import { useState } from "react";

export const OpenMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<button
			onClick={handleMenuClick}
			className="flex flex-col justify-center items-center"
		>
			<span
				className={`bg-seo-600   transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-md ${
											isMenuOpen
												? "rotate-45 translate-y-1"
												: "-translate-y-0.5"
										}`}
			></span>
			<span
				className={`bg-seo-600   transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-md my-0.5 ${
											isMenuOpen ? "opacity-0" : "opacity-100"
										}`}
			></span>
			<span
				className={`bg-seo-600   transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-md ${
											isMenuOpen
												? "-rotate-45 -translate-y-1"
												: "translate-y-0.5"
										}`}
			></span>
		</button>
	);
};
