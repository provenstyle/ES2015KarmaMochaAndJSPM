System.config({
  transpiler: "babel",
  defaultJSExtensions: true,
  map: {
    "babel": "../node_modules/babel-core/browser.js",
    "messages": "src/message.js",
  },
  babelOptions:{
    stage: 0
  }
});
