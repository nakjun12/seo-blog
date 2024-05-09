interface PostTitleProps {
	title: string;
}

export const PostTitle = ({ title }: PostTitleProps) => {
	return <h1 className="text-2640 font-semibold w-full">{title}</h1>;
};
