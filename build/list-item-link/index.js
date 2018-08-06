'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemLink = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = require('material-ui/List');

var _navLink = require('../nav-link');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItemLink = exports.ListItemLink = function ListItemLink(_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      _ref$activeStyle = _ref.activeStyle,
      activeStyle = _ref$activeStyle === undefined ? {} : _ref$activeStyle,
      to = _ref.to,
      listItemStyle = _ref.listItemStyle,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    _List.ListItem,
    { style: listItemStyle, className: className },
    _react2.default.createElement(
      _navLink.NavLink,
      { activeStyle: _extends({}, _style.defaultActiveStyle, activeStyle), style: _extends({}, _style.defaultStyle, style), to: to },
      children
    )
  );
};

ListItemLink.propTypes = {
  style: _propTypes2.default.object,
  activeStyle: _propTypes2.default.object,
  to: _propTypes2.default.string,
  listItemStyle: _propTypes2.default.object,
  className: _propTypes2.default.string
};