import dayjs from "dayjs";

export const sortByDateDescending = (a: string, b: string) => {
	const dateA = dayjs(a);
	const dateB = dayjs(b);
	return dateB.diff(dateA);
};
