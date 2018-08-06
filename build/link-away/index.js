'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkAway = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _arrowForward = require('material-ui/svg-icons/navigation/arrow-forward');

var _arrowForward2 = _interopRequireDefault(_arrowForward);

var _reactRouterDom = require('react-router-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LinkAway = function LinkAway(_ref) {
  var text = _ref.text,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      props = _objectWithoutProperties(_ref, ['text', 'style']);

  props = _extends({
    activeStyle: { color: 'black' }
  }, props, {
    style: _extends({ display: 'flex', alignItems: 'center' }, style)
  });
  return _react2.default.createElement(
    _reactRouterDom.NavLink,
    props,
    text,
    _react2.default.createElement(_arrowForward2.default, { style: { height: 19 } })
  );
};

exports.LinkAway = LinkAway;
LinkAway.propTypes = {
  text: _propTypes2.default.string.isRequired
};