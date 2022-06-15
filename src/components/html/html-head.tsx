import { Favicons } from "@components/html/favicons";
import { defaultSEO } from "@util/seo.config";
import { allKeywords } from "@util/static";
import { NextSeo } from "next-seo";
import getConfig from "next/config";
import NextHead from "next/head";
import React from "react";
import { getLang } from "@util/query-param";

const { publicRuntimeConfig } = getConfig();

interface HtmlHeadProps {
  title: string;
  description?: string;
  noindex?: boolean;
  canonical?: string;
  ogUrl?: string;
  ogTitle?: string;
  ogImage?: string;
  keywords?: string;
}

export function HtmlHead(props: HtmlHeadProps) {
  const {
    title,
    description,
    ogUrl,
    ogTitle,
    ogImage,
    keywords,
    noindex = false,
    canonical = "",
  } = props;
  const lang = getLang();
  const SEO = defaultSEO;
  // title template
  SEO["templateTitle"] = "%s | web3";

  // title for pages
  SEO["noindex"] = publicRuntimeConfig.apiEnv !== "prod" ? true : noindex;
  SEO["openGraph"]["url"] = ogUrl || "https://web3.io";

  // @todo add the rest of tags etc..
  SEO["title"] = title || SEO["title"];
  SEO["openGraph"]["title"] = ogTitle || title || SEO["title"];
  SEO["openGraph"]["description"] = description || SEO["description"];

  // if else is needed because on product page it will set product image as preview image
  // and then on other pages it will reset to the default image
  if (ogImage) {
    SEO["openGraph"]["images"][0] = {
      url: ogImage,
      width: 600,
      height: 314,
      alt: ogTitle,
    };
  } else {
    SEO["openGraph"]["images"][0] = {
      url: "",
      width: 600,
      height: 600,
      alt: "Web3 | web3.io",
    };
    SEO["openGraph"]["images"][1] = {
      url: "",
      width: 300,
      height: 300,
      alt: "Web3 | web3.io",
    };
  }
  const nextSeoProps = canonical
    ? {
        ...props,
        canonical: `${publicRuntimeConfig.baseAppUrl}/${lang}${canonical}`,
      }
    : props;

  return (
    <>
      <NextHead>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          property="twitter:image"
          content={SEO["openGraph"]["images"][0]?.url}
        />
        <meta property="og:title" content={SEO["openGraph"]["title"]} />
        <meta
          property="og:description"
          content={SEO["openGraph"]["description"]}
        />
        <meta
          property="og:image"
          content={SEO["openGraph"]["images"][0]?.url}
        />
        <meta property="og:url" content={`https://web3.io`} />
        <meta name="keywords" content={keywords || allKeywords.home} />
        <meta httpEquiv="cleartype" content="on" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="480" />
      </NextHead>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/*@ts-ignore*/}
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={"anonymous"}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <Favicons />
      <NextSeo {...SEO} {...nextSeoProps} />
    </>
  );
}
