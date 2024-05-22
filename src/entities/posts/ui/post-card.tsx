import Image from "next/image";

const data = {
	title: "타이틀",
	src: "",
	description:
		"타인의 범죄행위로 인하여 생명·신체에 대한 피해를 받은 국민은 법률이 정하는 바에 의하여 국가로부터 ...",
	author: "김명진",
	time: "2024-05-09T16:28:45Z",
};

export const PostCard = () => {
	return (
		<article className="">
			<header className="">
				<Image src="/test_bg.webp" alt="test" width={288} height={150} />
				<h2 className="">{data.title}</h2>
			</header>
			<section className="">
				<p>{data.description}</p>
			</section>
			<footer className="">
				<time dateTime={data.time} className="">
					{data.time}
				</time>
				<span className="">{data.author}</span>
			</footer>
		</article>
	);
};
