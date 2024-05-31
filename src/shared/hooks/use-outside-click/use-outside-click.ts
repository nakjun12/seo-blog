import { type RefObject, useCallback, useEffect } from "react";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const useOutsideClick = (ref: RefObject<any>, callback: () => void) => {
	const runCallback = useCallback(
		({ target }: MouseEvent | TouchEvent) => {
			if (target === null) {
				return;
			}

			if (ref.current && !ref.current.contains(target as HTMLDivElement)) {
				callback();
			}
		},
		[ref, callback],
	);

	useEffect(() => {
		window.addEventListener("click", runCallback);

		return () => {
			window.removeEventListener("click", runCallback);
		};
	}, [runCallback]);
};
