import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/ko";

interface PostAuthorHeadProps {
	authorName: string;
	authorIcon: string;
	writeDate: string;
}

export const PostAuthorHead = ({
	authorName,
	authorIcon,
	writeDate,
}: PostAuthorHeadProps) => {
	dayjs.locale("ko");
	const date = dayjs(writeDate);

	return (
		<div className="flex h-10 gap-2.5 my-1">
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
