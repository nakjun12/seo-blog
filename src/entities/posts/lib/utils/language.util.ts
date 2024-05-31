export const capitalizeFirstLetter = (word: string) => {
	const isEnglish = /^[a-zA-Z]+$/.test(word);

	if (isEnglish) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}
	return word;
};
