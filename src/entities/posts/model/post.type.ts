export type Post = {
	content: string;
	filePath: string[];
};

export const CategiriesList = ["react", "next"] as const;
export type Categories = (typeof CategiriesList)[number];

export interface Frontmatter {
	title: string;
	description: string;
	thumbnail: string;
	categories: Categories[];
	writeDate: string;
	releaseDate: string;
	authorName: string;
	authorIcon: string;
	authorIntro: string;
}
