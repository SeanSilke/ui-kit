'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationManager = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

var _animationPanel = require('./animation-panel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnimationManager = exports.AnimationManager = function (_Component) {
  _inherits(AnimationManager, _Component);

  function AnimationManager() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AnimationManager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AnimationManager.__proto__ || Object.getPrototypeOf(AnimationManager)).call.apply(_ref, [this].concat(args))), _this), _this.zIndex = 1, _this.getTransitionStyles = function (index) {
      return function () {
        return _this.props.transitionStyles[_this.props.direction][index];
      };
    }, _this.wrap = function (elem, index) {
      return _react2.default.createElement(
        _animationPanel.AnimationPanel,
        _extends({}, _this.props.panelProps, elem.props, {
          key: elem.key,
          getTransitionStyles: _this.getTransitionStyles(index),
          zIndex: _this.zIndex++
        }),
        elem
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AnimationManager, [{
    key: 'render',
    value: function render() {
      //React.Children.toArray besides from it main function also removed null and undefined element
      var children = _react2.default.Children.toArray(this.props.children);
      return _react2.default.createElement(
        _reactTransitionGroup.TransitionGroup,
        { component: this.props.component },
        children.map(this.wrap)
      );
    }
  }]);

  return AnimationManager;
}(_react.Component);

AnimationManager.propTypes = {
  children: _propTypes2.default.node.isRequired,
  // transitionStyles is an object where keys are animation type and values are  arrays of styles for panels
  // panelStyle is an object where keys corresponding to animation stages
  // {
  // ....
  //  animationType : [panelStyle, , ...]
  // ...
  // }
  transitionStyles: _propTypes2.default.object.isRequired,
  //direction is one of the keys of transitionStyles object
  direction: _propTypes2.default.string.isRequired,
  component: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]).isRequired
};