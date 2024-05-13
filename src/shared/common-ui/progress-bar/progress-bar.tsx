"use client";

import { useScrollYPercent } from "@/src/shared/hooks/use-scroll-y-percent";

export const ProgrresBar = () => {
	const scrollYPercent = useScrollYPercent();

	return (
		<div className="fixed w-full bg-seo-200 h-2.5">
			<div className="bg-seo-600 h-2.5" style={{ width: `${scrollYPercent}%` }}>
				{""}
			</div>
		</div>
	);
};
