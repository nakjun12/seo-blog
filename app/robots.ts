import type { MetadataRoute } from "next";
import { BASE_URL } from "../src/shared/config/constant";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${BASE_URL}/sitemap.xml`,
	};
}
