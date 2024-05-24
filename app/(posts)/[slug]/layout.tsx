export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="px-4 mx-auto lg:max-w-6xl">{children}</div>;
}
