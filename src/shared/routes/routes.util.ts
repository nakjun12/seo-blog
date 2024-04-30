import * as qs from "qs";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type DefaultQuery = Record<string, any>;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type DefaultPathname = Array<[string, any]>;
export type DefaultRouterType = {
	query?: DefaultQuery;
	pathname?: DefaultPathname;
	catchAll?: string;
};
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type TupleArrayToRecord<T extends Array<[string, any]>> = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[K in T[number][0]]: Extract<T[number], [K, any]>[1];
};
type ExtractPathnameValue<T extends DefaultPathname> = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[K in keyof T]: T[K] extends [any, infer V] ? V : never;
};

export type RoutesString = `/${string}`;
export type RoutesQueryAndPath<
	T extends DefaultRouterType = DefaultRouterType,
> = {
	query: T["query"] extends DefaultQuery ? Partial<T["query"]> : DefaultQuery;
	pathname: T["pathname"] extends DefaultPathname
		? TupleArrayToRecord<T["pathname"]>
		: // biome-ignore lint/suspicious/noExplicitAny: <explanation>
			Record<string, any>;
	pathnameValue: T["pathname"] extends DefaultPathname
		? ExtractPathnameValue<T["pathname"]>
		: string[];
	pathnameTuple: T["pathname"] extends DefaultPathname
		? T["pathname"]
		: DefaultPathname;
	pathnameCatchAll: T["catchAll"] extends string
		? Record<T["catchAll"], string[]>
		: Record<string, string[]>;
	arg: {
		query?: T["query"] extends DefaultQuery
			? Partial<T["query"]>
			: DefaultQuery;
		pathname?: T["pathname"] extends DefaultPathname
			? ExtractPathnameValue<T["pathname"]>
			: string[];
	};
};

export const parseSearchParams = <T extends Record<string, unknown>>(
	param?: string,
): T => {
	return qs.parse(param ? param.replace(/^\?/, "") : "") as T;
};

export const stringfySearchParams = (obj?: Record<string, unknown>): string => {
	return qs.stringify(obj ?? {}, { arrayFormat: "repeat" });
};

export const stringfyPathname = (str?: string[]) => {
	return str?.join("/") ?? "";
};

export const createInternalPath = <
	E extends Pick<RoutesQueryAndPath, "pathnameValue" | "query">,
	T extends RoutesString = RoutesString,
>(
	basePath: T,
	option?: { query?: E["query"]; pathname?: E["pathnameValue"] },
) => {
	const path = stringfyPathname(option?.pathname);
	const query = stringfySearchParams(option?.query);
	const pathSlash = path.length > 0 ? "/" : "";
	const questionmark = query.length > 0 ? "?" : "";
	return `${basePath}${pathSlash}${path}${questionmark}${query}`;
};
