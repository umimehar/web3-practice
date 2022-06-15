//
//
//  GLOBAL COMMON / UTIL functions   //
// --------------------------------- //
//  DON'T ADD Common or UTIL HERE!   //
// --------------------------------- //
// ADD Common / util folder - screen //
// Scoped for the functions folders  //
// --------------------------------- //

import { getLang } from "@util/query-param";

const txtSeoAlt = "Seo Alt Text for Web3";
const txtBrandDescription = "SEO brand description for Web3";

type Image = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export interface SeoConfig {
  title: string;
  noindex?: boolean;
  description: string;
  templateTitle?: string;
  titleTemplate: string;
  openGraph: {
    url: string;
    type: string;
    title: string;
    locale: string;
    siteName: string;
    images: Image[];
    description: string;
    defaultImageWidth: number;
    defaultImageHeight: number;
  };
  twitter: {
    site: string;
    handle: string;
    cardType: string;
  };
}

export const defaultSEO: SeoConfig = {
  title: txtBrandDescription,
  titleTemplate: `%s | Web3`,
  description: txtBrandDescription,
  openGraph: {
    type: "website",
    locale: getLang(),
    url: "https://web3.io",
    title: txtSeoAlt,
    description: txtBrandDescription,
    defaultImageWidth: 1200,
    defaultImageHeight: 1200,
    // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next (see note top of README.md)
    images: [
      // {
      //   url: '',
      //   width: 1240,
      //   height: 480,
      //   alt: txtSeoAlt,
      // },
      // {
      //   url: '',
      //   width: 800,
      //   height: 600,
      //   alt: txtSeoAlt,
      // },
    ],
    siteName: txtSeoAlt,
  },
  twitter: {
    handle: "@web3",
    site: "@web3",
    cardType: "summary_large_image",
  },
};
