'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavMenu = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List');

var _item = require('./components/item');

var _composedItem = require('./components/composed-item');

var _proptypes = require('./proptypes');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavMenu = exports.NavMenu = function NavMenu(_ref) {
  var items = _ref.items,
      handleToggle = _ref.handleToggle;
  return _react2.default.createElement(
    _List.List,
    null,
    items.map(function (item) {
      return item.children ? _react2.default.createElement(_composedItem.ComposedMenuItem, { key: item.to, item: item, handleToggle: handleToggle }) : _react2.default.createElement(_item.MenuItem, { key: item.to, item: item, handleToggle: handleToggle });
    })
  );
};

NavMenu.propTypes = {
  items: _propTypes2.default.arrayOf(_proptypes.itemShape).isRequired,
  handleToggle: _propTypes2.default.func.isRequired
};