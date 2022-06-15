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
import Router from "next/router";

// activate on-router changes routeChangeStart, routeChangeComplete
Router.events.on("routeChangeStart", (url) => {
  dataLayerEvent({ eventName: "optimize.activate" });
});

Router.events.on("routeChangeComplete", (url) => {
  trackPageView({ url });
});

export function trackPageView({
  url,
  gaId,
  opt,
}: {
  url?: string;
  gaId?: string;
  opt?: any;
}): void {
  const lastPageUrl: string | null = sessionStorage.getItem("last_ga_page_url");

  const currentUrl = url ?? window.location.pathname + window.location.search;

  if (lastPageUrl === currentUrl) {
    return;
  }
  try {
    // @ts-ignore
    if (window.gtag) {
      if (gaId) {
        // @ts-ignore
        window.gtag("config", gaId);
      } else {
        // @ts-ignore
        window.gtag("event", "page_view", opt);
      }
    }
  } catch (error) {
    console.error(error);
    // Silences the error in dev mode
    // and/or if gtag fails to load
  }
  sessionStorage.setItem("last_ga_page_url", currentUrl);
}

type DataLayerTrackPageViewType = {
  url?: string;
  // gaId?: string
};

export async function dataLayerTrackPageView(
  props?: DataLayerTrackPageViewType
): Promise<void> {
  // only fire on client side
  if (!isBrowser) {
    return;
  }

  // if no ga found
  const { url } = props || {};
  const lastPageUrl: string | null = sessionStorage.getItem("last_page_url");
  const currentUrl = url ?? window.location.pathname + window.location.search;

  if (lastPageUrl === currentUrl) {
    return;
  }
  sessionStorage.setItem("last_page_url", currentUrl);
  // push to datalayer
  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  // @ts-ignore
  window.dataLayer.push({
    event: "pageview",
    page: {
      path: url,
    },
  });
}

export type DataLayerEventType = {
  eventName: string;
  data?: Record<
    string,
    | string
    | number
    | boolean
    | null
    | string[]
    | Record<string, any>
    | Record<string, any>[]
  >;
};

export async function dataLayerEvent(props: DataLayerEventType): Promise<void> {
  // only fire on client side
  if (!isBrowser) {
    return;
  }
  // if no ga found
  // if (!window.gtag) {
  //   return;
  // }

  const { eventName, data } = props;
  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  // @ts-ignore
  window.dataLayer.push({
    ...data,
    event: eventName,
  });
}

type DataLayerPushType = Record<
  string,
  string | number | boolean | null | string[]
>;

export async function dataLayerPush(data: DataLayerPushType): Promise<void> {
  // only fire on client side
  if (!isBrowser) {
    return;
  }
  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  // @ts-ignore
  window.dataLayer.push({
    ...data,
  });
}
