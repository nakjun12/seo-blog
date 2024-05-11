"use client";

import { useScrollYPercent } from "@/src/shared/hooks/use-scroll-y-percent";

export const ProgrresBar = () => {
	const scrollYPercent = useScrollYPercent();

	return <div className="fixed">{scrollYPercent}</div>;
};
