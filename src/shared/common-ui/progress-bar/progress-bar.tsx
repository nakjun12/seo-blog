"use client";

import { useScrollYPercent } from "@/src/shared/hooks/use-scroll-y-percent";

export const ProgressBar = () => {
	const scrollYPercent = useScrollYPercent();

	return (
		<div className="fixed top-0 w-full lg:max-w-screen-xl bg-seo-100 h-1.5">
			<div className="bg-seo-600 h-1" style={{ width: `${scrollYPercent}%` }}>
				{""}
			</div>
		</div>
	);
};
