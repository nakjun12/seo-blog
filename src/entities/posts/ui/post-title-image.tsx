import Image from "next/image";

interface PostTitleImageProps {
	image: string;
	title: string;
}

export const PostTitleImage = ({ image, title }: PostTitleImageProps) => {
	return (
		<div className="pt-2.5 border-t border-seo-300">
			<div className="relative w-full aspect-[2/1]">
				<Image
					src={image}
					alt={title}
					title={title}
					placeholder="empty"
					fill
					loading="lazy"
					sizes="(max-width: 1300px) calc(100vw - 32px), 1300px"
					style={{ objectFit: "cover" }}
				/>
			</div>
		</div>
	);
};
