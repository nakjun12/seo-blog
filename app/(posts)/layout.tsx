export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="px-4 mx-auto lg:max-w-screen-xl">{children}</main>;
}
