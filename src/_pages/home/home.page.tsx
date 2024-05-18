import Link from "next/link";

const HomePage = () => {
	return (
		<div>
			<Link href="/react" title="react 카테고리" className="text-2640">
				react 카테고리
			</Link>
			<br />
			<Link href="/next" title="next 카테고리" className="text-2640">
				next 카테고리
			</Link>
		</div>
	);
};

export default HomePage;
