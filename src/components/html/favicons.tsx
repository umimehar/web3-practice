import React from "react";
import getConfig from "next/config";
import NextHead from "next/head";

export function Favicons() {
  const { publicRuntimeConfig } = getConfig();
  const cdnUrl = publicRuntimeConfig.cdnUrl;

  return (
    <NextHead>
      <link rel="shortcut icon" href="/assets/favs/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favs/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favs/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href="/assets/favs/favicon-48x48.png"
      />
      <link rel="manifest" href="/assets/favs/manifest.json" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#181859" />
      <meta name="application-name" content="web3.io" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/assets/favs/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/assets/favs/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/assets/favs/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/assets/favs/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/assets/favs/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/assets/favs/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/assets/favs/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/assets/favs/apple-touch-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/assets/favs/apple-touch-icon-167x167.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/favs/apple-touch-icon-180x180.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="1024x1024"
        href="/assets/favs/apple-touch-icon-1024x1024.png"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="web3.io" />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/assets/favs/apple-touch-startup-image-640x1136.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/assets/favs/apple-touch-startup-image-750x1334.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/assets/favs/apple-touch-startup-image-828x1792.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/assets/favs/apple-touch-startup-image-1125x2436.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/assets/favs/apple-touch-startup-image-1242x2208.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/assets/favs/apple-touch-startup-image-1242x2688.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/assets/favs/apple-touch-startup-image-1536x2048.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/assets/favs/apple-touch-startup-image-1668x2224.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/assets/favs/apple-touch-startup-image-1668x2388.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/assets/favs/apple-touch-startup-image-2048x2732.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/assets/favs/apple-touch-startup-image-1620x2160.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/assets/favs/apple-touch-startup-image-1136x640.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/assets/favs/apple-touch-startup-image-1334x750.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/assets/favs/apple-touch-startup-image-1792x828.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="/assets/favs/apple-touch-startup-image-2436x1125.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="/assets/favs/apple-touch-startup-image-2208x1242.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="/assets/favs/apple-touch-startup-image-2688x1242.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/assets/favs/apple-touch-startup-image-2048x1536.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/assets/favs/apple-touch-startup-image-2224x1668.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/assets/favs/apple-touch-startup-image-2388x1668.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/assets/favs/apple-touch-startup-image-2732x2048.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/assets/favs/apple-touch-startup-image-2160x1620.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="228x228"
        href="/assets/favs/coast-228x228.png"
      />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta
        name="msapplication-TileImage"
        content="/assets/favs/mstile-144x144.png"
      />
      <meta
        name="msapplication-config"
        content="/assets/favs/browserconfig.xml"
      />
      <link
        rel="yandex-tableau-widget"
        href="/assets/favs/yandex-browser-manifest.json"
      />
    </NextHead>
  );
}