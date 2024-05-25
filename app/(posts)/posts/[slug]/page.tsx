import CategoryPage from "@/src/_pages/category/category.page";
import {
	createPostUrl,
	createPostsMetaData,
} from "@/src/entities/posts/lib/utils/post.util";
import { getCategoryPosts } from "@/src/entities/posts/model/post";
import { redirect } from "next/navigation";
import type { Metadata } from "next/types";

interface PostProps {
	params: {
		slug: string;
	};
}

export default async function Category({ params: { slug } }: PostProps) {
	const posts = await getCategoryPosts(slug);
	if (!posts) return redirect("/");

	return <CategoryPage posts={posts} slug={slug} />;
}

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> => {
	const filePath = [params.slug];
	const url = createPostUrl(filePath);
	const metaData = createPostsMetaData({ url, category: params.slug });
	return metaData;
};
