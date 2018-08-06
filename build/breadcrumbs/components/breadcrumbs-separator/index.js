'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbsSeparator = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chevronRight = require('material-ui/svg-icons/navigation/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreadcrumbsSeparator = exports.BreadcrumbsSeparator = function BreadcrumbsSeparator() {
  return _react2.default.createElement(
    'span',
    { className: 'breadcrumbs--separator' },
    _react2.default.createElement(_chevronRight2.default, { className: 'breadcrumbs--separatorIcon', color: '#fff' })
  );
};