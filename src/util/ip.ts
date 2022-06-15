//
//
//  GLOBAL COMMON / UTIL functions   //
// --------------------------------- //
//  DON'T ADD Common or UTIL HERE!   //
// --------------------------------- //
// ADD Common / util folder - screen //
// Scoped for the functions folders  //
// --------------------------------- //

import { NextApiRequest } from "next";

interface Request extends NextApiRequest {
  connection: any;
}

export function getIp(req: Request): string {
  if (!req) {
    return null;
  }

  return (
    req.headers["cf-connecting-ip"] ??
    (<string>req.headers["x-forwarded-for"] ?? "").split(",")[0] ??
    req.connection.remoteAddress ??
    req.socket.remoteAddress ??
    req.connection.socket.remoteAddress
  );
}
