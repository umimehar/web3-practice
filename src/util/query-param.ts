//
//
//  GLOBAL COMMON / UTIL functions   //
// --------------------------------- //
//  DON'T ADD Common or UTIL HERE!   //
// --------------------------------- //
// ADD Common / util folder - screen //
// Scoped for the functions folders  //
// --------------------------------- //

import { isBrowser } from "@util/browser";

export function getQueryByName(name: string, serverQueryParams?: any): string {
  if (!isBrowser) {
    return serverQueryParams?.[name];
    // return getQueryParamFromNextData(name);
  }
  name = name.replace(/[[]]/g, "\\$&");

  const regex: RegExp = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const url: string = window?.location?.href;
  const results = regex.exec(url);

  if (!results || !results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export function getQueryParamFromNextData(key: string, defaultValue: any): any {
  if (!isBrowser) {
    return;
  }

  const reqData: any = window?.__NEXT_DATA__?.query;

  return reqData[key] || defaultValue;
}

export function getLang(defaultValue: string = "en"): string {
  if (!isBrowser) {
    return process?.env?.lang || defaultValue;
  }

  return (
    window?.__NEXT_DATA__?.query?.lang ||
    window?.__NEXT_DATA__?.props?.lang ||
    defaultValue
  );
}

export function getCountry(defaultValue: string = "ca"): string {
  if (!isBrowser) {
    return process?.env?.country || defaultValue;
  }

  return (
    window?.__NEXT_DATA__?.query?.country ||
    window?.__NEXT_DATA__?.props?.country ||
    defaultValue
  );
}

export function getLocale(): string {
  return getCountry() + "-" + getLang();
}

export function scrollToTargetAdjusted(id: string) {
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.scrollY;
  window.scroll({
    top: y,
    behavior: "smooth",
  });
}
