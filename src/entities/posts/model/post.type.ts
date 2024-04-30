export type Post = {
	content: string;
	filePath: string[];
};

export const CategiriesList = ["react"] as const;
export type Categories = (typeof CategiriesList)[number];

export interface Frontmatter {
	title: string;
	date: string;
	description: string;
	categories: Categories[];
	releaseDate: string;
	writer: string;
}
