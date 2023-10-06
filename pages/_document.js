import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>TikRapid - Free TikTok Video Downloader Without Watermark</title>
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
      <body>
        <Main />
        <NextScript />
      </body>
      <Analytics />
    </Html>
  );
}
