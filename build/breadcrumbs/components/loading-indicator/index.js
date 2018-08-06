'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingIndicator = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CircularProgress = require('material-ui/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = { lineHeight: '20px' };

var LoadingIndicator = exports.LoadingIndicator = function LoadingIndicator() {
  return _react2.default.createElement(
    'div',
    { className: 'breadcrumbs--item' },
    _react2.default.createElement(_CircularProgress2.default, { color: 'white', size: 20, thickness: 2, style: style })
  );
};