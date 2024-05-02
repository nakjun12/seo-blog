"use client";
import { useInternalRouter } from "./routes.client";
import {
	type DefaultRouterType,
	createInternalPath,
	type RoutesQueryAndPath,
	type RoutesString,
} from "./routes.util";

export const createRoutes = <T extends DefaultRouterType = DefaultRouterType>(
	basePath: RoutesString,
) => ({
	path: (arg?: RoutesQueryAndPath<T>["arg"]) =>
		createInternalPath(basePath, arg),
	useRouter: () => useInternalRouter<T>(),
});

/**
 * @description typesafe하게 routes를 관리하는 객체입니다. 사용 예시는 다음과 같습니다.
 * @example
 * const router = Routes.home.useRouter()
 * const onClick = () => router.push(Routes.posts.path({pathname:['nakjoon']}))
 */
export const Routes = {
	useRouter: <T extends DefaultRouterType = DefaultRouterType>() =>
		useInternalRouter<T>(),
	home: createRoutes("/"),
	posts: createRoutes<{
		pathname: [["slug", "nakjoon" | "first-post"]];
		catchAll: "slug";
	}>("/posts"),
};
