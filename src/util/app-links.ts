//
//
//  GLOBAL COMMON / UTIL functions   //
// --------------------------------- //
//  DON'T ADD Common or UTIL HERE!   //
// --------------------------------- //
// ADD Common / util folder - screen //
// Scoped for the functions folders  //
// --------------------------------- //
import getConfig from "next/config";
import { getCountry, getLang } from "@util/query-param";

const { publicRuntimeConfig } = getConfig();

export type AppName = "www";
type AppEnv = "prod" | "local" | "dev";
export type AppLinkType = Record<AppEnv, { [key in AppName]: string }>;

export function appLinks(application: AppName) {
  const lang = getLang();
  const country = getCountry();
  const appLinks: AppLinkType = {
    local: {
      www: `http://localhost:3063`,
    },
    dev: {
      www: `https://web3.io`,
    },
    prod: {
      www: `https://web3.io`,
    },
  };
  const env: AppEnv = publicRuntimeConfig.apiEnv ?? "prod";

  return appLinks[env][application] ?? appLinks[env]["www"];
}

export const appName: string = "www";
