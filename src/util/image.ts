import { normalizeUrlSlashes } from "@util/url";
import getConfig from "next/config";
import memoizee from "memoizee";

const { publicRuntimeConfig } = getConfig();
// 2 variables so we can easily control asset cdn link and product image and attachments links
// used by assets such as js / css and image that are bundled in the website
export const assetsCdnUrl = publicRuntimeConfig.cdnUrl;
// product images and user uploaded assets
export const imageCdnUrl = publicRuntimeConfig.imageCdnUrl;

type TOptimizeImageProps = {
  // pim is for catalog upload, www is for main website, media-storage is for file upload and attachments - not siginficantliy we will use it later not
  prefix: "www" | "bo";
  url: string;
  gravity?: "north|northeast|east|southeast|south|southwest|west|northwest|center|centre";
  format?: "jpeg|png|gif|webp";
  width: number; // this value should be slightly bigger than the width of the space the image occupies
  height?: number;
  quality?: number; // this value is for image quality, it is useful for assets. for example quality: 100, default value is 80
  crop?: boolean;
  progressive?: boolean;
};

export const getOptimizedImgUrl: (props: TOptimizeImageProps) => string =
  memoizee((props: TOptimizeImageProps) => {
    // always destruct below the function call.
    const {
      url,
      format = "webp",
      gravity,
      width,
      height,
      prefix,
      quality = 95,
      progressive = true,
      crop = false,
    } = props;
    if (!url) {
      return ""; // placeholder
    }

    if (url.indexOf("/c8n.") > -1) {
      return url;
    }

    if (!imageCdnUrl) {
      // no cdn configured - return same url
      return url;
    }

    if (url.endsWith(".svg")) {
      return assetsCdnUrl + url;
    }

    const urlParams: any = {
      q: quality,
      w: width,
      h: height,
      c: crop,
      p: progressive,
      f: format,
      g: gravity,
    };

    const c8nPath = `web-${prefix}`;
    const qs = Object.keys(urlParams)
      .filter((e) => urlParams[e])
      .map((key) => `${key}=${urlParams[key]}`)
      .join("&");

    // no casing MODULE_CDN = use normal casing please
    //
    let cdnResizedUrl = imageCdnUrl?.toString().replace(`/${c8nPath}`, "");
    cdnResizedUrl += `/${c8nPath}/${url}?${qs}`;

    return normalizeUrlSlashes(cdnResizedUrl);
  });
