'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps; /* eslint react/no-deprecated: 0 */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = { fontSize: '14px', color: '#222' };
var hintStyle = { color: '#222' };

var SearchField = exports.SearchField = (_temp = _class = function (_Component) {
  _inherits(SearchField, _Component);

  function SearchField(props) {
    _classCallCheck(this, SearchField);

    var _this = _possibleConstructorReturn(this, (SearchField.__proto__ || Object.getPrototypeOf(SearchField)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value;

    _this.state = { value: value };
    return _this;
  }

  _createClass(SearchField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var value = _ref.value;

      if (value !== this.state.search) {
        this.setState({ value: value });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.state.value === nextState.value) return false;
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var onLocalChange = this.onLocalChange,
          props = this.props,
          value = this.state.value;


      var TextFieldProps = _extends({
        style: style,
        hintStyle: hintStyle,
        name: 'search',
        fullWidth: true
      }, props, {
        value: value,
        onChange: onLocalChange
      });

      return _react2.default.createElement(_TextField2.default, TextFieldProps);
    }
  }]);

  return SearchField;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._sendUpdate = (0, _lodash.debounce)(function () {
    return _this2.props.onChange ? _this2.props.onChange(_this2.state.value) : null;
  }, 200);

  this.onLocalChange = function (e, value) {
    return _this2.setState({ value: value }, _this2._sendUpdate);
  };
}, _temp);