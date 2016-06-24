/* eslint-env node*/

module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",

    proxies: {
      "/node_modules": "/base/node_modules",
       "/base/cards": "/base/src/cards"
    },

    jspm: {
      config: "config.js",
      packages: "bower_components/system.js/dist",
      //stripExtension: false,
      serveFiles: [
        "src/**/*.js",
        "node_modules/babel-core/browser.js"
      ],
      loadFiles: [
        "tests/*.js"
      ]
    },

    autoWatch: true,

    frameworks: ["jspm", "mocha", "chai"],

    browsers: ["Chrome"],

    plugins: [
      "karma-jspm",
      "karma-mocha",
      "karma-mocha-reporter",
      "karma-chrome-launcher",
      "karma-chai"
    ],

    reporters: ["mocha"]

  });
};
