'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationPanel = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var forseReflow = function forseReflow(HtmlElement) {
  return HtmlElement.scrollTop;
};

var AnimationPanel = exports.AnimationPanel = function (_Component) {
  _inherits(AnimationPanel, _Component);

  function AnimationPanel() {
    _classCallCheck(this, AnimationPanel);

    return _possibleConstructorReturn(this, (AnimationPanel.__proto__ || Object.getPrototypeOf(AnimationPanel)).apply(this, arguments));
  }

  _createClass(AnimationPanel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          getTransitionStyles = _props.getTransitionStyles,
          zIndex = _props.zIndex,
          children = _props.children,
          className = _props.className,
          duration = _props.duration,
          defaultStyle = _props.defaultStyle,
          otherProps = _objectWithoutProperties(_props, ['getTransitionStyles', 'zIndex', 'children', 'className', 'duration', 'defaultStyle']);

      return _react2.default.createElement(
        _reactTransitionGroup.Transition,
        _extends({ mountOnEnter: true, unmountOnExit: true, timeout: duration, onEnter: forseReflow }, otherProps),
        function (state) {
          var transitionStyles = getTransitionStyles();
          return _react2.default.createElement(
            'div',
            {
              className: className,
              style: _extends({}, defaultStyle, transitionStyles[state], {
                zIndex: zIndex
              })
            },
            children
          );
        }
      );
    }
  }]);

  return AnimationPanel;
}(_react.Component);

AnimationPanel.propTypes = {
  getTransitionStyles: _propTypes2.default.func.isRequired,
  zIndex: _propTypes2.default.number.isRequired,
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  duration: _propTypes2.default.number.isRequired,
  defaultStyle: _propTypes2.default.object
};