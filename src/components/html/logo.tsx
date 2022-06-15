import React from "react";
import { chakra } from "@chakra-ui/react";

type Props = any;

export function Logo(props: Props) {
  return <SvgLogo {...props} />;
}

function SvgLogo(props: any) {
  return (
    <chakra.svg
      width="512.000000pt"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M4602 3436 c-60 -20 -111 -62 -133 -110 -26 -57 -24 -64 19 -75 52
-15 82 -14 82 3 0 8 14 26 31 40 24 20 41 26 80 26 82 0 115 -55 64 -105 -19
-20 -34 -25 -75 -25 l-50 0 0 -59 0 -58 56 -7 c119 -14 157 -68 96 -137 -53
-59 -165 -47 -206 22 -17 28 -20 30 -64 23 -62 -9 -65 -11 -58 -47 9 -44 49
-92 104 -124 41 -25 57 -28 132 -28 75 0 91 3 133 28 26 15 60 47 75 69 23 36
27 52 27 114 0 66 -3 75 -32 112 l-32 40 20 38 c29 55 23 139 -14 187 -51 68
-168 101 -255 73z"
        />
        <path
          d="M3256 3164 c-11 -29 -7 -891 5 -967 54 -350 379 -581 720 -513 247
49 421 217 485 466 22 84 14 240 -15 323 -69 196 -214 339 -406 400 -106 33
-261 31 -370 -7 -44 -15 -104 -43 -132 -62 l-53 -34 -2 203 -3 202 -111 3
c-95 2 -113 0 -118 -14z m772 -540 c73 -36 146 -109 180 -182 24 -50 27 -69
27 -157 0 -93 -2 -105 -33 -167 -38 -78 -100 -138 -182 -177 -47 -22 -68 -26
-150 -26 -84 0 -103 3 -157 29 -77 35 -153 113 -191 193 -23 49 -27 71 -27
148 0 76 4 99 27 147 46 100 137 180 241 214 69 23 195 12 265 -22z"
        />
        <path
          d="M218 3069 c-17 -9 -18 -43 -18 -489 0 -316 4 -497 11 -532 57 -268
320 -431 584 -363 81 21 135 48 188 95 25 22 48 40 52 40 4 0 26 -16 48 -36
91 -83 247 -127 375 -107 187 30 312 130 383 308 l24 60 3 505 c3 469 2 506
-14 517 -27 20 -188 17 -208 -3 -14 -14 -16 -72 -16 -486 0 -328 -4 -482 -12
-509 -16 -57 -69 -113 -130 -139 -42 -18 -64 -21 -116 -17 -86 7 -144 43 -186
117 l-31 55 -5 390 -5 390 -104 3 c-66 2 -108 -1 -115 -8 -8 -8 -11 -130 -11
-388 0 -372 0 -378 -23 -427 -30 -65 -47 -83 -107 -111 -94 -44 -211 -27 -278
42 -64 64 -62 42 -67 587 -4 428 -7 499 -20 507 -20 13 -180 12 -202 -1z"
        />
        <path
          d="M2430 2885 c-224 -51 -403 -226 -461 -453 -85 -334 130 -676 471
-748 147 -31 336 5 459 87 108 72 233 231 204 260 -7 7 -59 21 -115 31 l-102
18 -56 -54 c-30 -30 -80 -67 -110 -83 -49 -25 -65 -28 -155 -28 -93 0 -105 2
-167 33 -96 47 -168 134 -196 235 l-10 37 483 0 484 0 12 21 c7 15 9 46 5 91
-32 315 -277 550 -591 564 -57 2 -114 -2 -155 -11z m288 -260 c44 -20 79 -46
117 -87 30 -33 55 -63 55 -69 0 -5 -130 -9 -331 -9 -261 0 -329 3 -323 13 42
72 125 139 209 170 75 27 191 19 273 -18z"
        />
      </g>
    </chakra.svg>
  );
}