"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { Routes } from "../../routes";

interface BreadcrumbItem {
	label: string;
	url?: string;
	isLast?: boolean;
}

const generateBreadcrumbs = (): BreadcrumbItem[] => {
	const pathname = usePathname();
	const segments = pathname?.split("/").filter((segment) => segment !== "");

	const breadcrumbs = segments?.map((segment, index) => {
		const url = `/${segments.slice(0, index + 1).join("/")}`;
		if (index === segments.length - 1) {
			return { label: segment, isLast: true };
		}
		return { label: segment, url };
	});

	return breadcrumbs || [];
};

export const Breadcrumb = () => {
	const breadcrumbs: BreadcrumbItem[] = generateBreadcrumbs();

	return (
		<div className="flex space-x-1 text-seo-500 text-1618 my-4">
			<Link href={Routes.home.path()} title="home">
				Home
			</Link>
			<span>/</span>
			{breadcrumbs.map(({ label, url, isLast }, index) => (
				<Fragment key={label}>
					{url ? (
						<Link href={url} title={label}>
							{label}
						</Link>
					) : (
						<Link
							href={label}
							onClick={(e) => e.preventDefault()}
							className="font-bold text-seo-600"
						>
							{label}
						</Link>
					)}
					{!isLast && <span>/</span>}
				</Fragment>
			))}
		</div>
	);
};
