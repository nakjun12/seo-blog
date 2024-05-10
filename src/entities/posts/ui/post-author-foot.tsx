import Image from "next/image";

interface PostAuthorFootProps {
	authorName: string;
	authorIcon: string;
	authorIntro: string;
}

export const PostAuthorFoot = ({
	authorName,
	authorIcon,
	authorIntro,
}: PostAuthorFootProps) => {
	return (
		<div className="flex flex-col gap-3 my-1 sm:flex-row sm:items-center sm:gap-4">
			<div className="relative size-20 sm:size-32">
				<Image
					fill
					alt={`${authorName}의 아이콘`}
					crossOrigin="anonymous"
					src={authorIcon}
					className="rounded-full"
				/>
			</div>

			<div className="flex flex-col gap-3 text-1218 text-seo-400 py-0.5 sm:gap-2">
				<span className="text-seo-600 text-1618 font-semibold sm:text-1818">
					{authorName}
				</span>
				<p className="text-1418 sm:text-1618">{authorIntro}</p>
			</div>
		</div>
	);
};
