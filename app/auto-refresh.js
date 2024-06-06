"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/* eslint-disable no-func-assign */

// biome-ignore lint/suspicious/noFunctionAssign: <explanation>
function AutoRefresh({ children }) {
	return children;
}

if (process.env.NODE_ENV === "development") {
	AutoRefresh = function AutoRefresh({ children }) {
		const router = useRouter();
		useEffect(() => {
			console.log("is work");
			const ws = new WebSocket("ws://localhost:3001");
			ws.onmessage = (event) => {
				if (event.data === "refresh") {
					router.refresh();
				}
			};
			return () => {
				ws.close();
			};
		}, [router]);
		return children;
	};
}

export default AutoRefresh;
