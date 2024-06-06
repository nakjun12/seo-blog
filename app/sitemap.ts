import type { MetadataRoute } from "next";
import { getAllPosts } from "../src/entities/posts/model/post";
import { BASE_URL } from "../src/shared/config/constant";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = BASE_URL;
	const posts = await getAllPosts();
	const postUrls = posts.map((post) => ({
		url: `${baseUrl}/${post.filePath.join("/")}`,
		lastModified: new Date().toISOString(),
	}));
	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		...postUrls,
	];
}
