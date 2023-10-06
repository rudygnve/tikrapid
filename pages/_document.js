import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";
import { SITEURI, SITENAME } from "@/data";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>TikRapid - Free TikTok Video Downloader Without Watermark</title>
      <link rel="canonical" href={SITEURI} />
      <meta
        name="description"
        content={`${SITENAME} is a free TikTok Video Downloader without watermark website. It allows users to download their favorite TikTok videos without any watermark or logo.`}
      />
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
      <script
        src="https://t.usermaven.com/lib.js"
        data-key="UMNBwQv7GV"
        data-tracking-host="https://events.usermaven.com"
        data-autocapture="true"
        defer
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.usermaven = window.usermaven || (function(){(window.usermavenQ = window.usermavenQ || []).push(arguments);})
        `,
        }}
      ></script>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6300896650470274" crossorigin="anonymous"></script>
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
      <body>
        <Main />
        <NextScript />
      </body>
      <Analytics />
    </Html>
  );
}
