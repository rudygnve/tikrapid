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
      <script type="application/ld+json">
        {"{"}
        "@context": "https://schema.org/", "@type": "WebSite", "name": "
        {SITENAME}", "url": {SITEURI}, "potentialAction": {"{"}
        "@type": "SearchAction", "target": "{"{"}search_term_string{"}"}",
        "query-input": "required name=search_term_string"
        {"}"}
        {"}"}
      </script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-3V0X5N6NW4"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-3V0X5N6NW4');
      </script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
