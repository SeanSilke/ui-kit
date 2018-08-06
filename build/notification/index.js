'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _info = require('material-ui/svg-icons/action/info');

var _info2 = _interopRequireDefault(_info);

var _checkCircle = require('material-ui/svg-icons/action/check-circle');

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _reportProblem = require('material-ui/svg-icons/action/report-problem');

var _reportProblem2 = _interopRequireDefault(_reportProblem);

var _error = require('material-ui/svg-icons/alert/error');

var _error2 = _interopRequireDefault(_error);

var _propTypes = require('prop-types');

require('./style.scss');

var _clear = require('material-ui/svg-icons/content/clear');

var _clear2 = _interopRequireDefault(_clear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notification = exports.Notification = function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.getIcon = function () {
      switch (_this.props.type) {
        case 'warning':
          return _react2.default.createElement(_reportProblem2.default, { color: '#ffcc00' });
        case 'error':
          return _react2.default.createElement(_error2.default, { color: '#ff0000' });
        case 'done':
          return _react2.default.createElement(_checkCircle2.default, { color: '#33cc33' });
        case 'info':
          return _react2.default.createElement(_info2.default, { color: '#fff' });
        default:
          return _react2.default.createElement(_info2.default, { color: '#fff' });
      }
    }, _this.onClose = function () {
      var _this$props = _this.props,
          clickCallback = _this$props.clickCallback,
          id = _this$props.id;

      if (clickCallback) clickCallback(id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Notification, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'notification' },
        _react2.default.createElement(
          'div',
          { className: 'notificationIcon' },
          this.getIcon()
        ),
        this.props.message,
        _react2.default.createElement(
          'div',
          { className: 'notificationClose', onClick: this.onClose },
          this.props.closeIcon
        )
      );
    }
  }]);

  return Notification;
}(_react.Component);

Notification.defaultProps = {
  closeIcon: _react2.default.createElement(_clear2.default, { color: '#fff', style: { height: '16px', width: '16px' } })
};

Notification.propTypes = {
  closeIcon: _propTypes.PropTypes.node,
  id: _propTypes.PropTypes.string,
  type: _propTypes.PropTypes.string,
  clickCallback: _propTypes.PropTypes.func,
  message: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.node])
};