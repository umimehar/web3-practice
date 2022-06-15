//
//
//  GLOBAL COMMON / UTIL functions   //
// --------------------------------- //
//  DON'T ADD Common or UTIL HERE!   //
// --------------------------------- //
// ADD Common / util folder - screen //
// Scoped for the functions folders  //
// --------------------------------- //

import { goToUrl } from "@util/url";

export function goToHomeErr(): void {
  if (!window) {
    return;
  }

  goToUrl({ path: "home" });
}
