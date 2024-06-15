import {
	GOOGLE_ANALYTICS_ID,
	GOOGLE_TAG_MANAGER_ID,
} from "@/src/shared/config/constant";
import Script from "next/script";

export default function GoogleAddon() {
	return (
		<>
			{/* Google Tag Manager */}
			<Script id="google-tag-manager" strategy="afterInteractive">
				{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GOOGLE_TAG_MANAGER_ID}');
          `}
			</Script>
			{/* Google Ads Script */}
			<Script
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1920610574585501"
				strategy="afterInteractive"
				async
			/>
			<Script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2439139777355926"
				strategy="afterInteractive"
			/>

			{/* Google Analytics - Global site tag (gtag.js) */}
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}"
				strategy="afterInteractive"
				async
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `}
			</Script>
		</>
	);
}
