# Guide

해당 마크다운 문서에서는 코드베이스를 활용하는 방법을 다룹니다.

# 코드 읽는법

1. 폴더를 차근차근 흝어보면 다음과 같은 컴포넌트들을 발견할 수 있습니다.

```tsx
export const PostAuthor = () => {
	return null;
};

```
이렇게 null을 리턴하는 컴포넌트들의 경우 위치에 대한 고민 없이 세부사항을 구현만 하면 되는 경우입니다.

해당 컴포넌트들을 구현하면서 추가적으로 필요한 컴포넌트들은 자유롭게 생성하면 되겠습니다.

2. barrel export

배럴 익스포트는 단점이 있는 방법입니다.

하지만 FSD의 경우 배럴 익스포트를 통하여 각 계층간의 의존할 수 있는 관계를 표현하다보니 배럴 익스포트를 사용하는 것이 필연적입니다.

따라서 다음과 같은 형태로 외부에 노출시키고 싶은 컴포넌트만 index.ts에서 export 해주면 되겠습니다.

src/shared/routes/index.ts

```tsx
import { Routes } from "./routes";
export { Routes };
```

실제로 해당 폴더에서는 내부적으로 많은 import, export가 이루어지지만 외부로 노출시키고 싶은 코드는 Routes 하나이기에 이것만 export 합니다.


# fsd 가이드

Feature-Sliced Design 이라고해서 코드를 다루는 관점이 크게 다르지 않습니다.

다만 해당 규칙을 준수하는 과정을 통해 기존에 작성했던 코드들을 배치하는 방식이 달라질 뿐입니다.

## shared 계층

일반적으로 생각할 수 있는 대부분의 코드들은 해당 계층에 포함됩니다.

또한 자신이 뭔가 새로운 코드를 작성해야하는데 어디에 작성해야할지를 모르겠다면 shared 계층에 작성하는 것을 권장합니다.

shared는 모든 계층이 공유해서 사용하는 코드들이 포함되는 곳으로 어느 곳에서나 해당 코드를 알아야한다면 shared 계층에 배치하세요

대표적으로 shared 계층에 배치하는 코드는 다음과 같습니다.

1. 디자인 공통 컴포넌트

2. 유틸함수

3. 유틸커스텀훅

4. 공통 상수

5. 공통 타입

## app 계층

app 계층은 애플리케이션의 시작점 역할을 수행하는 코드들이 배치됩니다.

즉 전역적으로 영향을 끼치는 코드들이 배치되는 곳이라고 할 수 있습니다.

해당 계층에 배치되는 대표적인 코드들은 다음과 같습니다.

1. Provider

2. css style

## entities

entities 계층은 주로 도메인 모델을 표현하는 데에 사용하는 계층입니다.

우리 프로젝트에서만 사용되는 비즈니스에 관련한 코드들을 담는다고 생각하면 쉽습니다.

예컨대 현재 저희의 블로그 프로젝트의 경우 entities 계층에 배치되는 대표적인 것은 posts의 구조입니다.


src/entities/posts/model/post.type.ts
```tsx
export type Post = {
	content: string;
	filePath: string[];
};

export const CategiriesList = ["react"] as const;
export type Categories = (typeof CategiriesList)[number];

export interface Frontmatter {
	title: string;
	description: string;
	categories: Categories[];
	writeDate: string;
	releaseDate: string;
	authorName: string;
	authorIcon:string;
	authorIntro:string;
}
```

이렇듯 도메인 모델을 표현하는 코드들이 포함됩니다.

entities는 크게 세개의 슬라이스로 쪼개지게됩니다.

model | ui | api 로 쪼개질 수 있으나 현재 우리의 프로젝트는 api 콜이 필요없기에 api 폴더는 필요해지기 전까지 만들지 않습니다.

model에는 타입정의, 해당 비즈니스 로직의 핵심적인 코드들을 포함하고

ui에는 해당 비즈니스로직만을 특별히 표현하는 ui 들을 포함하도록 합니다.

## pages

말그대로 페이지입니다.

## features | widgets

features의 경우 블로그 프로젝트에서는 크게 사용할일이 많지 않습니다.

widgets의 경우 대표적으로 headers , footer 등이 포함될 수 있습니다.


# routing 방법

src/shared/routes/routes.ts 파일을 확인하세요

```tsx
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

```

해당 객체를 활용하여 타입세이프한 라우팅, path 생성을 수행합니다.

새로운 path의 추가가 필요할 경우 다음 api 스펙을 참고하여 생성하세요

```tsx

type DefaultQuery = Record<string, any>;
type DefaultPathname = Array<[string, any]>;

export type DefaultRouterType = {
	query?: DefaultQuery;
	pathname?: DefaultPathname;
	catchAll?: string;
};

export const createRoutes = <T extends DefaultRouterType = DefaultRouterType>(
	basePath: RoutesString,
) => ({
	path: (arg?: RoutesQueryAndPath<T>["arg"]) =>
		createInternalPath(basePath, arg),
	useRouter: () => useInternalRouter<T>(),
});
```

해당 Routes 객체는 다음과 같이 활용할 수 있습니다.

```tsx
const router = Routes.useRouter<{query:{hello:'world'|'string'}}>()
```

```tsx
const router = Routes.posts.useRouter()
router.push(Routes.home.path())
```

실제로 들어올 수 있는 쿼리스트링, path에 대한 타입 인텔리센스 처리를 수행하며 쿼리스트링, 라우트 관리에 추상화를 더한 코드입니다.

