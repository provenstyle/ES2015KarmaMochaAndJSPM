/* eslint-env node*/

module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",

    proxies: {
      "/node_modules": "/base/node_modules"
    },

    jspm: {
      config: "app/config.js",
      packages: "app/bower_components/system.js/dist",
      serveFiles: [
        "app/**/*.js",
        "node_modules/babel-core/browser.js"
      ],
      loadFiles: [
        "tests/testSetup.js"
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
