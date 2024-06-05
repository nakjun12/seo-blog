export interface TocItem {
	text: string;
	id: string;
	indent: number;
}

export const parseToc = (content: string): TocItem[] => {
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
			const id = text
				.toLowerCase()
				.replace(/[^\p{L}\p{N}\s-]/gu, "") // 단어 문자(유니코드), 공백, 하이픈을 제외한 모든 문자를 제거
				.replace(/\s+/g, "-"); // 하나 이상의 연속된 공백을 하이픈으로 대체

			return {
				text, // 헤더 텍스트
				id, // URL 형식의 링크
				indent: (heading.match(/#/g)?.length || 2) - 1, // 헤더의 들여쓰기 수준
			};
		}) || []
	);
};

export const getScrollTop = () => {
	if (!document.body) return 0;
	const scrollTop = document.documentElement
		? document.documentElement.scrollTop || document.body.scrollTop
		: document.body.scrollTop;
	return scrollTop;
};
