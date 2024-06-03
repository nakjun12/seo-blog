export interface HeadingItem {
	text: string;
	link: string;
	indent: number;
}

export const parseToc = (content: string): HeadingItem[] => {
	// 헤더 태그를 찾기위한 정규식 (H2와 H3로 시작하는 문자열 검색)
	const regex = /^(##|###) (.*)$/gm;

	// 정규식에 매칭되는 모든 헤더 태그를 배열로 만듬
	const headingList = content.match(regex);
	console.log(headingList);

	// 매칭된 헤더 태그를 처리하여 목차 아이템 배열을 만듬
	return (
		headingList?.map((heading: string) => {
			// 헤더 태그를 제거하고 텍스트만 추출
			const text = heading.replace(/^(##|###) /, "").trim();

			// 텍스트를 소문자로 변환하고, URL에 사용할 수 있는 형식으로 변환
			const link = text
				.toLowerCase()
				.replace(/[^\w\s-]/g, "") // 단어 문자, 공백, 하이픈을 제외한 모든 문자를 제거
				.replace(/\s+/g, "-"); // 하나 이상의 연속된 공백을 하이픈으로 대체

			return {
				text, // 헤더 텍스트
				link: `#${link}`, // URL 형식의 링크
				indent: (heading.match(/#/g)?.length || 2) - 2, // 헤더의 들여쓰기 수준
			};
		}) || []
	);
};
