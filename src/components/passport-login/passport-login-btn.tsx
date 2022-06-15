import { Box, Button } from "@chakra-ui/react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import React, { useState } from "react";
import { setCookie } from "@util/cookie";
import { getDomainTld } from "@util/url";

type Props = {
  provider: "facebook" | "google" | "github" | "twitter";
  iconOnly?: boolean;
  cta?: string;
};

export function PassportLoginBtn(props: Props) {
  const { provider, cta, iconOnly = true } = props;
  let windowObjectReference: Window = null;
  const [previousUrl, setPreviousUrl] = useState<string>();

  const receiveMessage = (event: MessageEvent<any>) => {
    // Do we trust the sender of this message? (might be
    // different from what we originally opened, for example).
    // if (event.origin !== BASE_URL) {
    //   return;
    // }
    const { data } = event;
    // if we trust the sender and the source is our popup
    if (data.source === "social-login") {
      // get the URL params and redirect to our server to use Passport to auth/login
      const { payload } = data;

      // todo handle
    }
  };

  const openSignInWindow = (url: string, name: string, __xtts?: string) => {
    // remove any existing event listeners
    window.removeEventListener("message", receiveMessage);

    // window features
    const strWindowFeatures =
      "toolbar=no, menubar=no, width=600, height=700, top=100, left=100";

    const opnerWindowUrl: string = windowObjectReference?.opener?.location.href;
    if (!windowObjectReference || windowObjectReference?.closed) {
      /* if the pointer to the window object in memory does not exist
      or if such pointer exists but the window was closed */
      windowObjectReference = window.open(url, name, strWindowFeatures);
    } else if (previousUrl !== url) {
      /* if the resource to load is different,
      then we load it in the already opened secondary window and then
      we bring such window back on top/in front of its parent window. */
      windowObjectReference = window.open(url, name, strWindowFeatures);
      windowObjectReference.focus();
    } else if (previousUrl !== opnerWindowUrl) {
      windowObjectReference = window.open(url, name, strWindowFeatures);
      windowObjectReference.focus();
    } else {
      /* else the window reference must exist and the window
      is not closed; therefore, we can bring it back on top of any other
      window with the focus() method. There would be no need to re-create
      the window or to reload the referenced resource. */
      windowObjectReference.focus();
    }
    windowObjectReference.opener.sessionStorage.setItem("__xtts", __xtts);

    // add the listener for receiving a message from the popup
    window.addEventListener("message", (event) => receiveMessage(event), false);
    // assign the previous URL
    setPreviousUrl(url);
  };

  const loginWithPassport = async () => {
    let redirectUrl: string;
    let __xtts: string;

    // todo backend call

    if (!redirectUrl) {
      return; // todo handle error toast
    }
    if (__xtts) {
      sessionStorage.setItem("__xtts", __xtts);
    }
    try {
      openSignInWindow(redirectUrl, `Login with ${provider}`, __xtts);
    } catch (e) {
      if (!window.location.href.includes("/auth/")) {
        // todo no in auth pages
        setCookie(undefined, "__slrd", window.location.href, {
          path: "/",
          domain: getDomainTld(),
          expires: new Date(Date.now() + Number(86400000)),
        });
      }
      window.location.href = redirectUrl;
    }
  };

  const leftIcon = {
    google: <Box as={FaGoogle} color="google.500" />,
    facebook: <Box as={FaFacebook} color={"facebook.500"} />,
    twitter: <Box as={FaTwitter} color="twitter.500" />,
  };

  return (
    <>
      <Button
        variant="outline"
        leftIcon={leftIcon[provider]}
        onClick={loginWithPassport}
      >
        {iconOnly ? "" : cta || `Sign up with ${provider}`}
      </Button>
    </>
  );
}
