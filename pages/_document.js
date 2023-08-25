import { Html, Head, Main, NextScript } from "next/document";
import { SITEURI, SITENAME } from "@/data";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="utf-8" />
      <title>{`${SITENAME} - Free TikTok Video Downloader Without Watermark`}</title>
      <link rel="canonical" href={SITEURI} />
      <meta
        property="og:title"
        content="Free TikTok Video Downloader Without Watermark"
      />
      <meta
        property="og:site_name"
        content="Free TikTok Video Downloader Without Watermark"
      />
      <meta
        name="description"
        content={`${SITENAME} is a free TikTok Video Downloader without watermark website. It allows users to download their favorite TikTok videos without any watermark or logo.`}
      />
      <meta property="og:url" content={SITEURI} />
      <meta
        property="og:description"
        content={`${SITENAME} is a free TikTok Video Downloader without watermark website. It allows users to download their favorite TikTok videos without any watermark or logo.`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "${SITENAME}",
          "url": "${SITEURI}/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
        `,
        }}
      ></script>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ID}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_ID}');
        `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5KTVL64D');
        `,
        }}
      />
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5KTVL64D"className="hidden"></iframe>`,
        }}
        ></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
