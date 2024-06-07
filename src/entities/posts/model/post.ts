import { compileMDX } from "next-mdx-remote/rsc";
import fs from "node:fs";
import path from "node:path";
import type { Frontmatter, Post } from "./post.type";
import { sortByDateDescending } from "../lib/utils/time.util";

const postsDirectory = path.join(process.cwd(), "posts");

const readDirectory = (directory: string): Pick<Post, "filePath">[] => {
	return fs
		.readdirSync(directory, { withFileTypes: true })
		.reduce<Pick<Post, "filePath">[]>((posts, file) => {
			const fullPath = path.join(directory, file.name);
			if (file.isDirectory()) {
				return posts.concat(readDirectory(fullPath));
			}
			if (file.isFile() && path.extname(file.name) === ".mdx") {
				const filePath = fullPath
					.replace(postsDirectory, "")
					.replace(/^\/+/, "")
					.replace(/\.mdx$/, "")
					.split("/");
				posts.push({ filePath });
			}
			return posts;
		}, []);
};

const findPostFile = (directory: string, filePath: string[]): Post | null => {
	const fullPath = path.join(directory, ...filePath);
	const fileExtensions = [".md", ".mdx"];
	for (const ext of fileExtensions) {
		const fullFilePath = `${fullPath}${ext}`;
		if (fs.existsSync(fullFilePath)) {
			const content = fs.readFileSync(fullFilePath, "utf8");
			return { content, filePath };
		}
	}
	return null;
};

export const getPost = async (
	filePath: string[],
): Promise<(Post & Frontmatter) | null> => {
	const post = findPostFile(postsDirectory, filePath);

	if (!post) return null;
	const frontmatter = await getFrontmatter(post.content);
	return Object.assign(post, frontmatter);
};

export const getCategoryPosts = async (filePath: string) => {
	const fullPath = path.join(postsDirectory, filePath);

	const posts = await Promise.all(
		readDirectory(fullPath).map((path) => getPost(path.filePath)),
	);

	const validPosts = posts.filter((post) => post !== null) as Array<
		Post & Frontmatter
	>;

	if (validPosts.length > 1) {
		validPosts.sort((a, b) =>
			sortByDateDescending(a.releaseDate, b.releaseDate),
		);
	}

	return validPosts;
};

export const getFrontmatter = async (source: string): Promise<Frontmatter> => {
	const { frontmatter } = await compileMDX<Frontmatter>({
		source,
		options: { parseFrontmatter: true },
	});
	return frontmatter;
};

export const getAllPosts = async () => {
	const posts = await Promise.all(
		readDirectory(postsDirectory).map((path) => getPost(path.filePath)),
	);

	const validPosts = posts.filter((post) => post !== null) as Array<
		Post & Frontmatter
	>;

	if (validPosts.length > 1) {
		validPosts.sort((a, b) =>
			sortByDateDescending(a.releaseDate, b.releaseDate),
		);
	}

	return validPosts;
};

export const getCategories = (): string[] => {
	const directories = fs.readdirSync(postsDirectory, { withFileTypes: true });
	const categories = directories
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);
	return categories;
};
