const path = require('path');
const fs = require('fs');
const dist = path.join(__dirname, './../', 'public/assets');
const source = dist + '/icon.png';

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

const appName = process.argv[2] || '';
const appDescription = process.argv[3] || '';
const developerName = process.argv[4] || '';
const developerURL = process.argv[5] || '';

const favicons = require('favicons');
const configuration = {
    path: '/assets/favs', // Path for overriding default icons path. `string`
    appName: appName, // Your application's name. `string`
    appDescription: appDescription, // Your application's description. `string`
    developerName: developerName, // Your (or your developer's) name. `string`
    developerURL: developerURL, // Your (or your developer's) URL. `string`
    dir: 'auto', // Primary text direction for name, short_name, and description
    lang: 'en-US', // Primary language for name and short_name
    background: '#fff', // Background colour for flattened icons. `string`
    theme_color: '#181859', // Theme color user for example in Android's task switcher. `string`
    appleStatusBarStyle: 'black-translucent', // Style for Apple status bar: "black-translucent", "default", "black". `string`
    display: 'standalone', // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
    orientation: 'any', // Default orientation: "any", "natural", "portrait" or "landscape". `string`
    scope: '/', // set of URLs that the browser considers within your app
    start_url: '/?homescreen=1', // Start URL when launching the application from a device. `string`
    version: '1.0', // Your application's version string. `string`
    logging: false, // Print logs to console? `boolean`
    pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
    icons: {
      // Platform Options:
      // - offset - offset in percentage
      // - background:
      //   * false - use default
      //   * true - force use default, e.g. set background for Android icons
      //   * color - set background for the specified icons
      //   * mask - apply mask in order to create circle icon (applied by default for firefox). `boolean`
      //   * overlayGlow - apply glow effect after mask has been applied (applied by default for firefox). `boolean`
      //   * overlayShadow - apply drop shadow after mask has been applied .`boolean`
      //
      android: true, // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
      appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
      appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
      coast: true, // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
      favicons: true, // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
      firefox: true, // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
      windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
      yandex: true, // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    },
  },
  callback = function (error, response) {
    if (error) {
      console.log(error.message); // Error description e.g. "An unknown error has occurred"
      return;
    }
    response.images.map((i) => {
      fs.writeFileSync(`${dist}/favs/${i.name}`, i.contents);
    });
    response.files.map((i) => {
      fs.writeFileSync(`${dist}/favs/${i.name}`, i.contents);
    });

    let html = '';
    response.html.map((i) => {
      html = html + i + '\n        ';
    });
    // html = html.replace(/\/favs\//g, '/static/favs/');
    html = html.replace(/">/g, '"/>');

    const rcTemp = `import React, { Component } from 'react';

export function Favicons() {
  return (
    <>
        ${html}
    </>
  );
}
`;
    // not to overwrite the cdnUrl config
    // fs.writeFileSync(`${dist}/../../src/Components/html/Favicons.tsx`, rcTemp);
    fs.writeFileSync(`${dist}/favs/index.html`, html);
  };

favicons(source, configuration, callback);
