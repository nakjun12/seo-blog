import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/ko";

interface PostAuthorHeadProps {
	authorName: string;
	authorIcon: string;
	releaseDate: string;
}

export const PostAuthorHead = ({
	authorName,
	authorIcon,
	releaseDate,
}: PostAuthorHeadProps) => {
	dayjs.locale("ko");
	const date = dayjs(releaseDate);

	return (
		<div className="flex h-10 gap-2.5 mt-1 mb-2">
			<Image
				width={40}
				height={40}
				alt={`${authorName}의 아이콘`}
				title={`${authorName}의 아이콘`}
				crossOrigin="anonymous"
				src={authorIcon}
				className="rounded-full"
			/>
			<div className="flex flex-col text-1218 text-seo-500 py-0.5">
				<span>{authorName}</span>
				<time>{date.format("YYYY.MM.DD")}</time>
			</div>
		</div>
	);
};
