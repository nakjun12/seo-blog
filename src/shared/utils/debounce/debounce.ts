export function debounce<T extends unknown[]>(
	callback: (...params: T) => void,
	limit = 300,
): (...params: T) => void {
	let timer: ReturnType<typeof setTimeout>;
	return (...params: T) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			callback(...params);
		}, limit);
	};
}
