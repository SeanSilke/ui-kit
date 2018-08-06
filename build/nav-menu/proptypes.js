'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemShape = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var itemShape = exports.itemShape = _propTypes2.default.shape({
  text: _propTypes2.default.string.isRequired,
  to: _propTypes2.default.string.isRequired
});