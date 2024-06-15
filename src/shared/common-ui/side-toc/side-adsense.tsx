import Script from "next/script";

declare global {
	interface Window {
		adsbygoogle: { [key: string]: unknown }[];
	}
}

const GoogleAdsense = () => {
	return (
		<>
			<Script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2439139777355926"
				crossOrigin="anonymous"
				strategy="afterInteractive"
				onError={(e) => {
					console.error("Google AdSense script failed to load:", e);
				}}
				onLoad={() => {
					if (!window.adsbygoogle) {
						window.adsbygoogle = [];
					}
					window.adsbygoogle.push({});
				}}
			/>
			<ins
				className="adsbygoogle"
				style={{ display: "block", textAlign: "center" }}
				data-ad-layout="in-article"
				data-ad-format="fluid"
				data-ad-client="ca-pub-2439139777355926"
				data-ad-slot="5345902155"
			/>
		</>
	);
};

export { GoogleAdsense };
