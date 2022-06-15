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

export function getAppData(key: any, defaultValue?: any): any {
  if (!isBrowser) {
    return undefined;
  }
  const appData: any = window?.__NEXT_DATA__?.props?.appData;

  return appData[key] || defaultValue;
}
