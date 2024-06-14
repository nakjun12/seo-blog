import dayjs from "dayjs";

export const sortByDateDescending = (a: string, b: string) => {
	const dateA = dayjs(a);
	const dateB = dayjs(b);
	return dateB.diff(dateA);
};

export const isFirstDateBeforeSecond = (
	date1: string,
	date2: string,
): boolean => {
	const firstDate = dayjs(date1);
	const secondDate = dayjs(date2);

	return firstDate.isBefore(secondDate);
};

export const findOutIsReleased = (postReleaseDate: string): boolean => {
	const today = dayjs();
	const releaseDate = dayjs(postReleaseDate);
	return today.isSame(releaseDate) || today.isAfter(releaseDate);
};
