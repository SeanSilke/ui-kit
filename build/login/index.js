'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactGridSystem = require('react-grid-system');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/no-deprecated: 0 */


var style = {
  height: 'auto',
  width: 350,
  margin: '50px auto',
  padding: 24
};

var Login = exports.Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.login = null, _this.password = null, _this.onSubmit = function (event) {
      event.preventDefault();
      _this.props.onSubmit(_this.login.input.value, _this.password.input.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isAuthenticated) {
        nextProps.history.push('/');
      }

      if (nextProps.errorMessage) {
        this.props.onError(nextProps.errorMessage);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactGridSystem.Col,
        { sm: 12 },
        _react2.default.createElement(
          _Paper2.default,
          { style: style, zDepth: 5 },
          _react2.default.createElement(
            'form',
            { onSubmit: this.onSubmit },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_TextField2.default, { hintText: '\u041B\u043E\u0433\u0438\u043D', floatingLabelText: '\u041B\u043E\u0433\u0438\u043D', type: 'text', ref: function ref(c) {
                  return _this2.login = c;
                } })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_TextField2.default, { hintText: '\u041F\u0430\u0440\u043E\u043B\u044C', floatingLabelText: '\u041F\u0430\u0440\u043E\u043B\u044C', type: 'password', ref: function ref(c) {
                  return _this2.password = c;
                } })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _RaisedButton2.default,
                { type: 'submit' },
                '\u0412\u043E\u0439\u0442\u0438'
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);