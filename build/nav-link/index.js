'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavLink = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      props = _objectWithoutProperties(_ref, ['to']);

  return _react2.default.createElement(_reactRouterDom.NavLink, _extends({ to: to, isActive: (0, _helpers.isLinkActive)(to) }, props));
};
exports.NavLink = NavLink;