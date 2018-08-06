"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getWidthToRightBorder = exports.getWidthToRightBorder = function getWidthToRightBorder(elemID, widthArr) {
  var res = 0;
  for (var i = 0; i <= elemID; i++) {
    res += widthArr[i];
  }
  return res;
};

var getWidthToLeftBorder = exports.getWidthToLeftBorder = function getWidthToLeftBorder(elemID, widthArr) {
  var res = 0;
  for (var i = 0; i <= elemID - 1; i++) {
    res += widthArr[i];
  }
  return res;
};

var getRightCornerElement = exports.getRightCornerElement = function getRightCornerElement(diff, widthArr) {
  for (var i = 0; i < widthArr.length; i++) {
    diff = diff + widthArr[i];
    if (diff >= 0) return i;
  }
  return -1;
};

var getLeftCornerElement = exports.getLeftCornerElement = function getLeftCornerElement(diff, widthArr, visibleWidth) {
  for (var i = 0; i < widthArr.length; i++) {
    diff = diff + widthArr[i];
    if (diff >= visibleWidth) {
      return i;
    }
  }
  return -1;
};