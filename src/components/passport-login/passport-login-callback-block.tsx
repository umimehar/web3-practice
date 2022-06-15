import { useEffect } from "react";
import { useRouter } from "next/router";
import { getDomainTld, goToUrl } from "@util/url";
import { destroyCookie, parseCookies } from "@util/cookie";

type Props = {
  provider: "facebook" | "google" | "github" | "twitter";
  cta?: string;
};

export function PassportLoginCallbackBlock(props: Props) {
  const { query } = useRouter();
  const { provider } = props;
  const { code, oauth_verifier, oauth_token } = query;

  if (!code && (!oauth_verifier || !oauth_token)) {
    setTimeout(() => {
      goToUrl({ path: "home", opt: { shallow: true } });
    }, 3000);
    return (
      <div
        style={{
          width: "100%",
          margin: "10px auto",
          textAlign: "center",
          fontSize: "16px",
        }}
      >
        Invalid Login Details, Redirecting to Home Page...
      </div>
    );
  }

  const loginWithPassportCallback = async () => {
    let userData: any = undefined;
    if (userData) {
      const {
        jwt: { token, expire },
        ...rest
      } = userData;
      const obj = { appUser: rest, jwtToken: token, expire };

      // todo store obj in context

      const { __slrd } = parseCookies() || {};
      destroyCookie(undefined, "__slrd", getDomainTld());
      if (window.opener) {
        // send them to the opening window
        window.opener.postMessage(
          { source: "social-login", payload: obj },
          "*"
        );
        // close the popup
        window.close();
      } else {
        if (__slrd) {
          window.location.href = __slrd;
          return;
        }
        goToUrl({ path: "home", opt: { shallow: true } });
      }
    }
  };

  useEffect(() => {
    loginWithPassportCallback()
      .then()
      .catch((error) => {
        // todo show error
        if (window.opener) {
          // send them to the opening window
          window.opener.postMessage(
            { source: "social-login", payload: undefined, error },
            "*"
          );
          // close the popup
          window.close();
        } else {
          goToUrl({ path: "home", opt: { shallow: true } });
        }
      });
  }, [code, oauth_token, oauth_verifier]);

  return (
    <div
      style={{
        width: "100%",
        margin: "10px auto",
        textAlign: "center",
        fontSize: "16px",
      }}
    >
      Please wait while logging in with {provider}.
    </div>
  );
}
