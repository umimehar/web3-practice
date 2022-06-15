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

export function getAppConfig(key: any, defaultValue: any = ""): any {
  if (!isBrowser) {
    return undefined;
  }
  const appConfig: any = window?.__NEXT_DATA__?.props?.appConfig || {};

  return appConfig[key] || defaultValue;
}
