export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="px-4 md:max-w-3xl md:mx-auto">{children}</div>;
}
