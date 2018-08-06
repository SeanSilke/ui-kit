"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isLinkActive = exports.isLinkActive = function isLinkActive(url) {
  return function (match, _ref) {
    var pathname = _ref.pathname,
        search = _ref.search;
    return url === pathname + decodeURIComponent(search);
  };
};