'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuDrawer = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _close = require('material-ui/svg-icons/navigation/close');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuDrawer = function MenuDrawer(_ref) {
  var open = _ref.open,
      handleToggle = _ref.handleToggle,
      children = _ref.children;
  return _react2.default.createElement(
    _Drawer2.default,
    { open: open, docked: false },
    _react2.default.createElement(_AppBar2.default, {
      iconElementLeft: _react2.default.createElement(
        _IconButton2.default,
        null,
        _react2.default.createElement(_close2.default, null)
      ),
      onLeftIconButtonTouchTap: handleToggle
    }),
    children
  );
};

MenuDrawer.propTypes = {
  handleToggle: _propTypes2.default.func.isRequired
};

exports.MenuDrawer = MenuDrawer;