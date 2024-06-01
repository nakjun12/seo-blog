"use client";
import useToggleStore from "@/src/shared/stores/toggle-menu";

export const OpenMenu = () => {
	const { isMenuOpen, toggleMenu } = useToggleStore();
	const handleMenuClick = () => {
		toggleMenu(!isMenuOpen);
	};
	return (
		<button
			type="button"
			onClick={handleMenuClick}
			className="flex flex-col justify-center items-center lg:hidden"
		>
			<span
				className={`bg-seo-600   transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-md ${
											isMenuOpen
												? "rotate-45 translate-y-1"
												: "-translate-y-0.5"
										}`}
			/>
			<span
				className={`bg-seo-600   transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-md my-0.5 ${
											isMenuOpen ? "opacity-0" : "opacity-100"
										}`}
			/>
			<span
				className={`bg-seo-600   transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-md ${
											isMenuOpen
												? "-rotate-45 -translate-y-1"
												: "translate-y-0.5"
										}`}
			/>
		</button>
	);
};
