'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationsDrawer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _notification = require('../notification');

var _notifications = require('material-ui/svg-icons/social/notifications');

var _notifications2 = _interopRequireDefault(_notifications);

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _Badge = require('material-ui/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _propTypes = require('prop-types');

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationsDrawer = exports.NotificationsDrawer = function (_Component) {
  _inherits(NotificationsDrawer, _Component);

  function NotificationsDrawer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NotificationsDrawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotificationsDrawer.__proto__ || Object.getPrototypeOf(NotificationsDrawer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.onClick = function () {
      _this.setState({
        open: !_this.state.open
      }, function () {
        // NOTE: Not clear why this is needed
        _this.props.changeView(false);
      });
    }, _this.renderButton = function () {
      return _react2.default.createElement(
        _Badge2.default,
        {
          badgeContent: _this.props.history && _this.props.history.length,
          primary: true,
          style: { position: 'fixed', bottom: '8px', right: '8px' }
        },
        _react2.default.createElement(
          _FloatingActionButton2.default,
          { onClick: _this.onClick },
          _react2.default.createElement(_notifications2.default, null)
        )
      );
    }, _this.renderHistory = function () {
      return _react2.default.createElement(
        'div',
        null,
        _this.props.history.map(function (item) {
          return _react2.default.createElement(_notification.Notification, _extends({ key: item.id }, item, { clickCallback: _this.props.deleteNotification }));
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NotificationsDrawer, [{
    key: 'render',
    value: function render() {
      var containerClassName = this.state.open ? 'notificationsDrawer open' : 'notificationsDrawer';
      return _react2.default.createElement(
        'div',
        { className: containerClassName },
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            transitionName: 'notificationDrawer',
            transitionAppear: true,
            transitionLeaveTimeout: 600,
            transitionEnterTimeout: 300,
            transitionAppearTimeout: 0
          },
          _react2.default.createElement(
            'div',
            { className: 'notificationsDrawerInner' },
            this.state.open ? this.renderHistory() : null
          )
        ),
        this.renderButton()
      );
    }
  }]);

  return NotificationsDrawer;
}(_react.Component);

NotificationsDrawer.propTypes = {
  type: _propTypes.PropTypes.string
};