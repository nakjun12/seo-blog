"use client";
import { useEffect, useState } from "react";
import { throttle } from "../../utils/throttle";
import { debounce } from "../../utils/debounce";

const THROTTLE_LIMIT = 50;
const DEBOUNCE_LIMIT = 100;

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

		const handleResize = debounce(() => {
			calculateScrollPercentage();
		}, DEBOUNCE_LIMIT);

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
