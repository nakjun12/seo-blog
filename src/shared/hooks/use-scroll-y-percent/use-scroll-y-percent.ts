"use client";
import { useEffect, useState } from "react";
import { throttle } from "../../utils/throttle";

const THROTTLE_LIMIT = 50;

export const useScrollYPercent = () => {
	const [scrollYPercent, setScrollYPercent] = useState<number>(0);

	useEffect(() => {
		const calculateScrollPercentage = () => {
			const totalHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			setScrollYPercent((window.scrollY / totalHeight) * 100);
		};

		const handleScroll = throttle(() => {
			calculateScrollPercentage();
		}, THROTTLE_LIMIT);

		const handleResize = () => {
			calculateScrollPercentage();
		};
		calculateScrollPercentage();

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return scrollYPercent;
};
