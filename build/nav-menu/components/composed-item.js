'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComposedMenuItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _List = require('material-ui/List');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _item = require('./item');

var _proptypes = require('../proptypes');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComposedMenuItem = function ComposedMenuItem(_ref) {
  var handleToggle = _ref.handleToggle,
      _ref$item = _ref.item,
      children = _ref$item.children,
      text = _ref$item.text,
      to = _ref$item.to;
  return _react2.default.createElement(
    _reactRouterDom.Route,
    { path: to },
    function (_ref2) {
      var match = _ref2.match;
      return _react2.default.createElement(_List.ListItem, {
        primaryText: text,
        primaryTogglesNestedList: true,
        nestedItems: children.map(function (itemChild) {
          return _react2.default.createElement(_item.MenuItem, { key: itemChild.to, item: itemChild, handleToggle: handleToggle });
        }),
        innerDivStyle: match ? _style.ActiveInnerDivStyle : null
      });
    }
  );
};

ComposedMenuItem.propTypes = {
  item: _propTypes2.default.shape(_extends({}, _proptypes.itemShape.isRequired, { children: _proptypes.itemShape.isRequired })).isRequired,
  handleToggle: _propTypes2.default.func.isRequired
};

exports.ComposedMenuItem = ComposedMenuItem;