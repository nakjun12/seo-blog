"use client";

import { useScrollYPercent } from "@/src/shared/hooks/use-scroll-y-percent";
import { useState, useEffect } from "react";
import { useScrollDirection } from "@/src/shared/hooks/use-scroll-direction";

export const ProgressBar = () => {
	const scrollYPercent = useScrollYPercent();

	return (
		<div className="fixed top-0 w-full lg:max-w-6xl bg-seo-100 h-2.5">
			<div className="bg-seo-600 h-2" style={{ width: `${scrollYPercent}%` }}>
				{""}
			</div>
		</div>
	);
};
