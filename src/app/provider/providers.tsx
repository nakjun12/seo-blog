"use client";
import type { PropsWithChildren } from "react";

/**
 * 모든 Provider를 취합하여 앱 전체에 대한 설정을 수행합니다.
 * 전역적으로 사용되는 Provider는 모두 여기에서 사용해주시면 됩니다.
 */
export const Providers = ({ children }: PropsWithChildren) => {
	return children;
};
