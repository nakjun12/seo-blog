"use client";
import { useEffect, useRef, useState } from "react";
import { throttle } from "../../utils/throttle";

const THRESHOLD = 30;
const TOP_BOUND = 20;
const THROTTLE_LIMIT = 100;

export const useScrollDirection = () => {
	const scrollYPos = useRef(0);
	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

	useEffect(() => {
		const handleScroll = () => {
			const newY = window.scrollY;
			if (newY < TOP_BOUND) {
				setScrollDirection("up");
			} else if (Math.abs(newY - scrollYPos.current) >= THRESHOLD) {
				setScrollDirection(scrollYPos.current > newY ? "up" : "down");
			}
			scrollYPos.current = window.scrollY;
		};

		const throttleHandleScroll = throttle(handleScroll, THROTTLE_LIMIT);

		window.addEventListener("scroll", throttleHandleScroll);
		return () => window.removeEventListener("scroll", throttleHandleScroll);
	}, []);

	return scrollDirection;
};
