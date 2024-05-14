import { ProgrresBar } from "@/src/shared/common-ui/progress-bar";

const TestPage = () => {
	return (
		<>
			<ProgrresBar />
			<p className="text-seo-200 font-regular text-sm w-1/2 xs:bg-sky-300 sm:bg-seo-500 md:bg-red-400 lg:bg-white xl:bg-yellow-200">
				tailwind 설정 테스트
			</p>
			<div className="bg-seo-300 h-screen"> </div>
			<div className="bg-seo-300 h-screen"> </div>
			<div className="bg-seo-300 h-screen"> </div>
		</>
	);
};

export default TestPage;
