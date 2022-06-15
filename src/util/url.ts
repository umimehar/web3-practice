// todo common package -- LOOK here PLEASE!
//
//  GLOBAL COMMON / UTIL functions   //
// --------------------------------- //
//  DON'T ADD Common or UTIL HERE!   //
// --------------------------------- //
// ADD Common / util folder - screen //
// Scoped for the functions folders  //
// --------------------------------- //

import { isBrowser } from "@util/browser";
import { useRouter } from "next/router";

/**
 * Replaces https://something///url/item  ——> https://something/url/item
 * @param url string
 */
export function normalizeUrlSlashes(url: string) {
  return url.replace(/([^:])(\/{2,})/g, "$1/");
}

export function getUA(): string {
  if (isBrowser) {
    return window.navigator.userAgent;
  }

  if (!isBrowser) {
    return `${process.env.X_UA}`;
  }
  return "";
}

// return url which the application is running on for calling internal ajax
// or return current API URL in SSR to it proxy calls to the api server
export function getWindowBaseUrl(): string {
  if (isBrowser) {
    return `${window.location.protocol}//${window.location.hostname}${
      window.location.port ? `:${window.location.port}` : ""
    }`;
  }

  if (!isBrowser) {
    // todo get from env
    // todo check echo with this.
    return `${process.env.X_HOST}`;
  }
  return "";
}

export function getHostname(): string {
  if (isBrowser) {
    return `${window.location.hostname}`;
  }

  if (!isBrowser) {
    return `${process.env.X_HOSTNAME}`;
  }
  return "";
}

type goToUrlType = {
  path: string;
  params?: {
    [key: string]: string | string[] | number | number[];
  };
  opt?: { shallow?: boolean; locale?: string | false; scroll?: boolean };
  replace?: boolean;
  disableAutoScroll?: boolean;
};

const autoScrollToTop =
  (disableAutoScroll: boolean = false) =>
  () =>
    !disableAutoScroll && window && window.scrollTo(0, 0);

export function goToUrl(props: goToUrlType): void {
  const router = useRouter();
  const {
    path = "",
    params = {},
    opt = {},
    replace = false,
    disableAutoScroll = false,
  } = props;

  // else sdk side redirect
  if (!router) {
    return;
  }

  if (replace) {
    router.replace(path, params ? { query: params } : undefined, opt).then();
  } else {
    router.push(path, params ? { query: params } : undefined, opt).then();
  }
}

export function getDomainTld() {
  return window.location.hostname.split(".").slice(-2).join(".");
}
