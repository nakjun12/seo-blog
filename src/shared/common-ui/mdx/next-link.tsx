import Link from "next/link";
import type { HTMLProps } from "react";

export const NextLink = (props: HTMLProps<HTMLAnchorElement>) => {
	const { href, ...rest } = props;
	if (!href) return null;
	const isAnchorLink = href.startsWith("#");

	if (isAnchorLink) {
		return <a aria-label={props["aria-label"]} href={href} {...rest} />;
	}
	return (
		<Link
			href={href}
			className={props.className}
			target={props.target}
			rel={props.rel}
		>
			{props.children}
		</Link>
	);
};
