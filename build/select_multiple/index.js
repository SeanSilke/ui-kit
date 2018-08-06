'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectMultiple = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _Value = require('react-select/lib/Value');

var _Value2 = _interopRequireDefault(_Value);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

require('react-select/dist/react-select.css');

require('./select_multiple.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectMultiple = exports.SelectMultiple = (_dec = (0, _muiThemeable2.default)(), _dec(_class = function (_Component) {
  _inherits(SelectMultiple, _Component);

  function SelectMultiple() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectMultiple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectMultiple.__proto__ || Object.getPrototypeOf(SelectMultiple)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focus: false
    }, _this.onFocus = function () {
      _this.setState({ focus: true });
    }, _this.onBlur = function () {
      _this.setState({ focus: false });
    }, _this.ValueComponent = function (props) {
      props.value.className = '';
      if (props.value.value === _this.props.highlighted) {
        props.value.className = 'Select-value-highlighted';
      }
      return _react2.default.createElement(_Value2.default, props);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectMultiple, [{
    key: 'isPlaceholderActive',
    value: function isPlaceholderActive() {
      var _props = this.props,
          multi = _props.multi,
          value = _props.value;
      var focus = this.state.focus;

      if (multi) return focus || value && value.length;
      return focus || value;
    }
  }, {
    key: 'placeholderColor',
    value: function placeholderColor() {
      var _props$muiTheme$palet = this.props.muiTheme.palette,
          primary1Color = _props$muiTheme$palet.primary1Color,
          disabledColor = _props$muiTheme$palet.disabledColor;

      if (this.isPlaceholderActive()) return primary1Color;
      return disabledColor;
    }
  }, {
    key: 'render',
    value: function render() {
      var placeholder = this.props.placeholder || 'Выберите значение';
      var classnames = (0, _classnames2.default)('Select-placeholder-custom', { active: this.isPlaceholderActive() });

      return _react2.default.createElement(
        'div',
        { className: 'selectContainer', style: this.props.style },
        _react2.default.createElement(
          'div',
          { style: { width: '100%' } },
          _react2.default.createElement(
            'div',
            { style: { color: this.placeholderColor() }, className: classnames },
            placeholder
          ),
          _react2.default.createElement(_reactSelect2.default, _extends({
            placeholder: placeholder,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            valueComponent: this.ValueComponent
          }, this.props))
        )
      );
    }
  }]);

  return SelectMultiple;
}(_react.Component)) || _class);