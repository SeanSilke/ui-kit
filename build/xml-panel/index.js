'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XmlPanel = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('./helpers');

var _light = require('react-syntax-highlighter/dist/light');

var _light2 = _interopRequireDefault(_light);

var _foundation = require('react-syntax-highlighter/styles/hljs/foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _xml = require('react-syntax-highlighter/languages/hljs/xml');

var _xml2 = _interopRequireDefault(_xml);

require('./_xml-panel.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _light.registerLanguage)('xml', _xml2.default);

var XmlPanel = exports.XmlPanel = function XmlPanel(_ref) {
  var xml = _ref.xml;

  return _react2.default.createElement(
    _light2.default,
    { language: 'xml', style: _foundation2.default },
    (0, _helpers.formatXml)(xml)
  );
};