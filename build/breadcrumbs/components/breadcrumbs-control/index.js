'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbsControl = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moreHoriz = require('material-ui/svg-icons/navigation/more-horiz');

var _moreHoriz2 = _interopRequireDefault(_moreHoriz);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var style = { color: '#fff' };

var BreadcrumbsControl = function BreadcrumbsControl(_ref) {
  var faded = _ref.faded,
      left = _ref.left,
      right = _ref.right,
      getWidth = _ref.getWidth,
      props = _objectWithoutProperties(_ref, ['faded', 'left', 'right', 'getWidth']);

  var ctrClass = (0, _classnames2.default)({
    'breadcrumbs--control': true,
    'breadcrumbs--control-right': right,
    'breadcrumbs--control-left': left,
    'breadcrumbs--control-faded': faded
  });
  return _react2.default.createElement(
    'span',
    _extends({ ref: getWidth }, props, { className: ctrClass }),
    _react2.default.createElement(_moreHoriz2.default, { className: 'breadcrumbs--contrlIcon', style: style })
  );
};
exports.BreadcrumbsControl = BreadcrumbsControl;