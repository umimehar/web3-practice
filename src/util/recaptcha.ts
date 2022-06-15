import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const reCaptchaKey = publicRuntimeConfig?.reCaptchaKey;

interface ReCaptchaInstance {
  ready: (cb: () => any) => void;
  execute: (key: string, options: ReCaptchaExecuteOptions) => Promise<string>;
  render: (id: string, options: ReCaptchaRenderOptions) => any;
}

interface ReCaptchaExecuteOptions {
  action: string;
}

interface ReCaptchaRenderOptions {
  sitekey: string;
  size: "invisible";
}

interface IExecuteCaptcha {
  action: string;
  successCb?: (token: string) => any;
  failCb?: (errorMessage: string) => any;
}

export async function executeRecaptcha({
  action,
  successCb,
  failCb,
}: IExecuteCaptcha): Promise<string> {
  if (!reCaptchaKey) {
    return undefined;
  }
  return new Promise((resolve, reject) => {
    // @ts-ignore
    (window.grecaptcha as ReCaptchaInstance).ready(() => {
      // @ts-ignore
      (window.grecaptcha as ReCaptchaInstance)
        .execute(reCaptchaKey, { action })
        .then((token: string) => {
          successCb && successCb(token);
          resolve(token);
        })
        .catch((e) => {
          failCb && failCb(e.message);
          reject(e.message);
        });
    });
  });
}
