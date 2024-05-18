import { Breadcrumb } from "@/src/shared/common-ui/breadcrumb";

interface PostProps {
	params: {
		slug: string[];
	};
}
export default async function Category({ params: { slug } }: PostProps) {
	return (
		<>
			<Breadcrumb />
			<div>{slug}</div>
		</>
	);
}
