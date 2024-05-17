interface PostTitleProps {
	title: string;
}

export const PostTitle = ({ title }: PostTitleProps) => {
	return (
		<h1 className="text-2640 font-semibold w-full text-seo-600">{title}</h1>
	);
};
