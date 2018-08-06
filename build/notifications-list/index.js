'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationsList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _notification = require('../notification');

var _visibilityOff = require('material-ui/svg-icons/action/visibility-off');

var _visibilityOff2 = _interopRequireDefault(_visibilityOff);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _propTypes = require('prop-types');

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationsList = exports.NotificationsList = function (_Component) {
  _inherits(NotificationsList, _Component);

  function NotificationsList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NotificationsList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotificationsList.__proto__ || Object.getPrototypeOf(NotificationsList)).call.apply(_ref, [this].concat(args))), _this), _this.renderQue = function () {
      return _this.props.queue && _this.props.queue.slice(0, 3).map(function (item) {
        return _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            transitionName: 'notification',
            transitionAppear: true,
            transitionLeaveTimeout: 600,
            transitionEnterTimeout: 300,
            transitionAppearTimeout: 0,
            key: 'transition_' + item.id
          },
          _react2.default.createElement(_notification.Notification, _extends({
            clickCallback: _this.props.hideNotification,
            closeIcon: _react2.default.createElement(_visibilityOff2.default, { color: '#fff', style: { height: '16px', width: '16px' } }),
            key: item.id
          }, item))
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NotificationsList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'notificationsList' },
        this.props.showList ? this.renderQue() : null
      );
    }
  }]);

  return NotificationsList;
}(_react.Component);

NotificationsList.propTypes = {
  showList: _propTypes.PropTypes.bool,
  type: _propTypes.PropTypes.string,
  message: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.node])
};