//
//
//  GLOBAL COMMON / UTIL functions   //
// --------------------------------- //
//  DON'T ADD Common or UTIL HERE!   //
// --------------------------------- //
// ADD Common / util folder - screen //
// Scoped for the functions folders  //
// --------------------------------- //

import { NextPageContext } from "next";
import cookie, { CookieParseOptions, CookieSerializeOptions } from "cookie";
import { isBrowser } from "@util/browser";

export function parseCookies(
  ctx: NextPageContext = <NextPageContext>{},
  options: CookieParseOptions = {}
): any {
  if (ctx.req && ctx.req.headers.cookie) {
    return cookie.parse(ctx.req.headers.cookie, options);
  }
  if (process.browser) {
    return cookie.parse(document.cookie, options);
  }
}

export function setCookie(
  ctx: NextPageContext,
  name: string,
  value: string,
  options: CookieSerializeOptions = {}
): void {
  if (ctx && ctx.res) {
    ctx.res.setHeader("Set-Cookie", cookie.serialize(name, value, options));
  }

  if (isBrowser) {
    document.cookie = cookie.serialize(name, value, options);
  }
}

export function destroyCookie(
  ctx: NextPageContext,
  name: string,
  domain: string
): void {
  if (ctx && ctx.res) {
    ctx.res.setHeader(
      "Set-Cookie",
      cookie.serialize(name, "", {
        maxAge: 0,
        path: "/",
        domain,
        expires: new Date(1970, 1, 1),
      })
    );
  }

  if (isBrowser) {
    document.cookie = cookie.serialize(name, "", {
      maxAge: 0,
      path: "/",
      domain,
      expires: new Date(1970, 1, 1),
    });
  }
}
