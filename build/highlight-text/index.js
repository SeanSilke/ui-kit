'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HighlightText = exports.HighlightTextInner = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var HighlightTextInner = function HighlightTextInner(_ref) {
  var accent3Color = _ref.muiTheme.palette.accent3Color,
      rest = _objectWithoutProperties(_ref, ['muiTheme']);

  return _react2.default.createElement('span', _extends({}, rest, { style: { color: accent3Color } }));
};

exports.HighlightTextInner = HighlightTextInner;
HighlightTextInner.propTypes = {
  children: _propTypes.PropTypes.string.isRequired
};

var HighlightText = exports.HighlightText = (0, _muiThemeable2.default)()(HighlightTextInner);