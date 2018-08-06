'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadCrumbViewport = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreadCrumbViewport = exports.BreadCrumbViewport = (0, _muiThemeable2.default)()(function (_ref) {
  var children = _ref.children,
      _ref$muiTheme = _ref.muiTheme,
      _ref$muiTheme$baseThe = _ref$muiTheme.baseTheme,
      backgroundColor = _ref$muiTheme$baseThe.palette.primary1Color,
      fontFamily = _ref$muiTheme$baseThe.fontFamily,
      height = _ref$muiTheme.appBar.height;

  var style = {
    width: '50%',
    backgroundColor: backgroundColor,
    lineHeight: height + 'px',
    fontFamily: fontFamily
  };

  return _react2.default.createElement(
    'div',
    { style: style },
    children
  );
});