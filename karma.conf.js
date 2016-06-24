/* eslint-env node*/

module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",

    files: [
    ],

    proxies: {
      "/node_modules": "/base/node_modules",
      "/base/cards": "/base/app/cards"
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

    frameworks: ["jspm", "jasmine", "chai"],

    browsers: ["Chrome"],

    plugins: [
      "karma-jspm",
      "karma-chrome-launcher",
      "karma-jasmine",
      "karma-junit-reporter",
      "karma-chai"
    ],

    junitReporter: {
      outputFile: "test_out/unit.xml",
      suite: "unit"
    }

  });
};
