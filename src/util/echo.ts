//
//
//  GLOBAL COMMON / UTIL functions   //
// --------------------------------- //
//  DON'T ADD Common or UTIL HERE!   //
// --------------------------------- //
// ADD Common / util folder - screen //
// Scoped for the functions folders  //
// --------------------------------- //

import { getAppConfig } from "@util/config";

export function echo(...params: any): void {
  const isDev: boolean =
    getAppConfig("isDev") === true || getAppConfig("isDev") === "true";

  if (!isDev) {
    if (
      typeof document !== "undefined" &&
      document.cookie.indexOf("__echo=") > -1
    ) {
      console.log(...params);
    }

    return;
  }

  let callerName: string;
  try {
    throw new Error();
  } catch (error) {
    const re: RegExp = /(\w+)@|at (\w+) \(/g;
    const stackTrace: string = error.stack;

    re.exec(stackTrace);

    let stackTraceArr: string[] = re.exec(stackTrace);
    callerName = stackTraceArr[1] ?? stackTraceArr[2];
  }
  console.log(callerName, ...params);
}

export function startLogWithProfile({
  msg = "",
  key,
}: {
  msg?: string | undefined;
  key: string;
}) {
  if (process.env.ENABLE_PROFILING === "1") {
    console.log(`${new Date()} -> START -> ${key} ${msg}`);
    console.time(`${msg} ${key}`);
  }
}

export function endLogWithProfile({
  msg = "",
  key,
}: {
  msg?: string | undefined;
  key: string;
}) {
  if (process.env.ENABLE_PROFILING === "1") {
    console.timeEnd(`${msg} ${key}`);
    console.log(`${new Date()} -> END -> ${key} ${msg}`);
  }
}
