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

export const Routes = {
	useRouter: <T extends DefaultRouterType = DefaultRouterType>() =>
		useInternalRouter<T>(),
	home: createRoutes("/"),
	posts: createRoutes<{ catchAll: "slug" }>("/posts"),
};
