"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _unsplashJs = _interopRequireWildcard(require("unsplash-js"));

var _cors = _interopRequireDefault(require("cors"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var config = require('universal-config');

var app = (0, _express["default"])();
global.fetch = _nodeFetch["default"];
var unsplash = new _unsplashJs["default"]({
  applicationId: '48fb49b3c685d0a283242d0b45b169464ffb95f926e305aaf6a5d55ab3caf82d',
  secret: '9060531e26d3989e368dea2d8f43c544ad9382d757223ae7c4fff78656683c9e',
  callbackUrl: 'https://emmanuelnwogbo.github.io/unsplash-gallery'
});
app.use((0, _cors["default"])());
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://emmanuelnwogbo.github.io/unsplash-gallery");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

app.get('/api/photos', function (req, res) {
  unsplash.photos.listPhotos(req.query.start, req.query.count).then(_unsplashJs.toJson).then(function (json) {
    return res.json(json);
  });
});
app.get('/api/photos/search', function (req, res) {
  unsplash.search.photos(req.query.searchterm, req.query.start, req.query.count).then(_unsplashJs.toJson).then(function (json) {
    return res.json(json);
  });
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("listening on port ".concat(PORT));
});
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(app, "app", "C:\\Users\\USER\\Desktop\\MY WORK\\unsplash-gallery\\server\\server.js");
  reactHotLoader.register(unsplash, "unsplash", "C:\\Users\\USER\\Desktop\\MY WORK\\unsplash-gallery\\server\\server.js");
  reactHotLoader.register(PORT, "PORT", "C:\\Users\\USER\\Desktop\\MY WORK\\unsplash-gallery\\server\\server.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();