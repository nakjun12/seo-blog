"use client";
import {
	useParams,
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";
import { useMemo } from "react";
import {
	type RoutesQueryAndPath,
	parseSearchParams,
	type DefaultRouterType,
} from "./routes.util";

export const useInternalRouter = <
	T extends DefaultRouterType = DefaultRouterType,
>() => {
	type hi = RoutesQueryAndPath<T>["pathname"];

	const router = useRouter();
	const pathname = usePathname();
	const serachParams = useSearchParams();
	const params = useParams<RoutesQueryAndPath<T>["pathname"]>();
	const href = typeof window !== "undefined" ? window?.location?.href : "";
	const hostname =
		typeof window !== "undefined" ? window?.location?.hostname : "";
	const protocol =
		typeof window !== "undefined" ? window?.location?.protocol : "";
	const host = typeof window !== "undefined" ? window?.location?.host : "";
	const slash = typeof window !== "undefined" ? "//" : "";
	const basePath = `${protocol}${slash}${host}`;
	return useMemo(
		() => ({
			push: (href: string, option?: { scroll?: boolean }) =>
				router.push(href, option),
			replace: (href: string, option?: { scroll?: boolean }) =>
				router.replace(href, option),
			back: () => router.back(),
			refresh: () => router.refresh(),
			prefetch: (href: string) => router.prefetch(href),
			pathname: pathname,
			searchParams: serachParams ? serachParams.toString() : "",
			query: parseSearchParams<RoutesQueryAndPath<T>["query"]>(
				serachParams ? serachParams.toString() : "",
			),
			get: (qs: string) => (serachParams ? serachParams.get(qs) : ""),
			params: params,
			href: href,
			hostname: hostname,
			protocol: protocol,
			host: host,
			basePath: basePath,
		}),
		[
			basePath,
			host,
			hostname,
			href,
			params,
			pathname,
			protocol,
			router,
			serachParams,
		],
	);
};
