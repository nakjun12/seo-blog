"use client";
import { useEffect, useState } from "react";
import { throttle } from "../../utils/throttle";

const THROTTLE_LIMIT = 50;

export const useScrollYPercent = () => {
	const [scrollYPercent, setScrollYPercent] = useState(0);

	useEffect(() => {
		const totalHeight =
			document.documentElement.scrollHeight - window.innerHeight;

		const handleScroll = () => {
			setScrollYPercent((window.scrollY / totalHeight) * 100);
		};

		const throttleHandleScroll = throttle(handleScroll, THROTTLE_LIMIT);

		window.addEventListener("scroll", throttleHandleScroll);
		return () => window.removeEventListener("scroll", throttleHandleScroll);
	}, []);

	return scrollYPercent;
};
