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
            })(window,document,'script','dataLayer','GTM-PRDXHX4C');
          `}
			</Script>
			{/* Google Ads Script */}
			<Script
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1920610574585501"
				strategy="afterInteractive"
				async
			/>

			{/* Google Analytics - Global site tag (gtag.js) */}
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-1MEMCRD60Z"
				strategy="afterInteractive"
				async
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1MEMCRD60Z');
          `}
			</Script>
		</>
	);
}
