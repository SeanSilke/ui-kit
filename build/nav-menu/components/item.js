'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _proptypes = require('../proptypes');

var _style = require('./style');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = function MenuItem(_ref) {
  var _ref$item = _ref.item,
      to = _ref$item.to,
      text = _ref$item.text,
      handleToggle = _ref.handleToggle;

  return _react2.default.createElement(
    _reactRouterDom.Route,
    { path: to },
    function (_ref2) {
      var match = _ref2.match,
          history = _ref2.history;

      var onTouchTap = function onTouchTap() {
        history.push(to);
        handleToggle();
      };
      return _react2.default.createElement(_List.ListItem, { primaryText: text, onTouchTap: onTouchTap, innerDivStyle: match ? _style.ActiveInnerDivStyle : null });
    }
  );
};

MenuItem.propTypes = {
  item: _proptypes.itemShape.isRequired,
  handleToggle: _propTypes2.default.func.isRequired
};

exports.MenuItem = MenuItem;