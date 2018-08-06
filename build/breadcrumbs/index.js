'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breadcrumbs = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps; /* eslint react/no-deprecated: 0 */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _components = require('./components');

var _helpers = require('./helpers');

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var onResizeThrottleDelay = 500;

var Breadcrumbs = exports.Breadcrumbs = (_temp = _class = function (_PureComponent) {
  _inherits(Breadcrumbs, _PureComponent);

  function Breadcrumbs(props) {
    _classCallCheck(this, Breadcrumbs);

    var _this = _possibleConstructorReturn(this, (Breadcrumbs.__proto__ || Object.getPrototypeOf(Breadcrumbs)).call(this, props));

    _initialiseProps.call(_this);

    var refItemID = props.items.length - 1;
    if (props.isLoading) refItemID++;

    _this.state = {
      transition: 0,
      moveDirection: 'right',
      refItemID: refItemID,
      shiftCount: 0
    };
    return _this;
  }

  _createClass(Breadcrumbs, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateWidth();
      this.move();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var refItemID = nextProps.items.length - 1;
      if (nextProps.isLoading) refItemID++;
      this.setShiftCount(0);
      this.setRefItemID(refItemID);
      this.setMoveDirection('right');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWidth();
      this.move();
      window.addEventListener('resize', this.onResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          isLoading = _props.isLoading;
      var transition = this.state.transition;

      var BreadcrumbsItem = this.props.Item;
      var itemsCount = items.length + (isLoading ? 1 : 0);
      return _react2.default.createElement(
        'div',
        { className: 'breadcrumbs' },
        _react2.default.createElement(_components.BreadcrumbsControl, {
          left: true,
          faded: !this.isleftControlVisible(),
          onClick: this.moveLeft2Right,
          getWidth: this._getControlWidth
        }),
        _react2.default.createElement(
          'div',
          { className: 'breadcrumbs--track', style: { transform: 'translateX(' + transition + 'px)' }, ref: this._getTrack },
          items.map(function (props, id) {
            var href = props.href || null;
            return _react2.default.createElement(BreadcrumbsItem, _extends({}, props, { href: href, key: id, hasSeparator: id < itemsCount - 1 }));
          }),
          isLoading ? _react2.default.createElement(_components.LoadingIndicator, null) : null
        ),
        _react2.default.createElement(_components.BreadcrumbsControl, { right: true, faded: !this.isRightControlVisible(), onClick: this.moveRight2Left })
      );
    }
  }]);

  return Breadcrumbs;
}(_react.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.track = null;
  this.widthArr = [];
  this.totalWidth = 0;
  this.controlWidth = 0;

  this._getTrack = function (elem) {
    _this2.track = elem;
  };

  this._getControlWidth = function (elem) {
    _this2.controlWidth = elem ? elem.offsetWidth : 0;
  };

  this.moveX = function (transition) {
    return _this2.setState({ transition: transition });
  };

  this.setRefItemID = function (refItemID) {
    return _this2.setState({ refItemID: refItemID });
  };

  this.setMoveDirection = function (moveDirection) {
    return _this2.setState({ moveDirection: moveDirection });
  };

  this.setShiftCount = function (shiftCount) {
    return _this2.setState({ shiftCount: shiftCount });
  };

  this.updateWidth = function () {
    var breadCr = _this2.track.getElementsByClassName('breadcrumbs--item');
    _this2.widthArr = Array.from(breadCr, function (e) {
      return e.offsetWidth;
    });
    _this2.totalWidth = _this2.widthArr.reduce(function (p, c) {
      return p + c;
    }, 0);
  };

  this.getVisibleWidth = function () {
    if (_this2.track) return _this2.track.parentElement.offsetWidth;
    return 0;
  };

  this._moveRight = function () {
    var lastBRid = _this2.props.items.length - 1;
    if (_this2.props.isLoading) lastBRid++;
    var vpWidth = _this2.getVisibleWidth();
    var refItemID = _this2.state.refItemID;
    var elemWidth = _this2.widthArr[refItemID];

    var widthToRightBorder = (0, _helpers.getWidthToRightBorder)(refItemID, _this2.widthArr);
    var diff = vpWidth - widthToRightBorder;
    // обработка сдвига в случае если крошка бльше вюпорта
    var shift = (vpWidth - _this2.controlWidth * 2) * _this2.state.shiftCount;
    if (shift && shift + vpWidth >= elemWidth) {
      diff = -(0, _helpers.getWidthToLeftBorder)(refItemID, _this2.widthArr);
      if (refItemID === lastBRid) {
        diff += _this2.controlWidth;
      } else {
        diff += _this2.controlWidth * 2;
      }
    } else {
      diff = diff + shift;
    }

    // проверка на выход за границы
    if (diff > 0) diff = 0;

    if (refItemID === lastBRid || diff === 0) {
      _this2.moveX(diff);
    } else {
      _this2.moveX(diff - _this2.controlWidth);
    }
  };

  this._moveLeft = function () {
    var refItemID = _this2.state.refItemID;
    var widthToLeftBorder = (0, _helpers.getWidthToLeftBorder)(refItemID, _this2.widthArr);
    var vpWidth = _this2.getVisibleWidth();
    var diff = void 0;
    diff = -widthToLeftBorder;
    // обработка сдвига в случае если крошка бльше вюпорта
    var shift = (vpWidth - _this2.controlWidth * 2) * _this2.state.shiftCount;
    diff = diff - shift;

    // проверка на выход за границы
    if (diff <= vpWidth - _this2.totalWidth) {
      diff = vpWidth - _this2.totalWidth;
    }

    // NOTE: diff > 0 can occur after resizing
    if (diff > 0) diff = 0;

    if (refItemID === 0 || diff === vpWidth - _this2.totalWidth) {
      _this2.moveX(diff);
    } else {
      _this2.moveX(diff + _this2.controlWidth);
    }
  };

  this.move = function () {
    if (_this2.state.moveDirection === 'right') {
      _this2._moveRight();
    } else {
      _this2._moveLeft();
    }
  };

  this.onResize = (0, _lodash.throttle)(function () {
    return _this2.forceUpdate();
  }, onResizeThrottleDelay, { trailing: true });

  this.moveLeft2Right = function () {
    var direction = 'right';
    var changeDirection = _this2.state.moveDirection !== direction;
    var shiftCount = _this2.state.shiftCount;
    if (changeDirection) {
      shiftCount = 0;
    }

    var hiddenLeftPart = _this2.state.transition;
    if (_this2.isleftControlVisible()) {
      hiddenLeftPart -= _this2.controlWidth;
    }

    var id = (0, _helpers.getRightCornerElement)(hiddenLeftPart, _this2.widthArr);
    if (id === _this2.state.refItemID && !changeDirection) {
      shiftCount += 1;
    } else if (id === _this2.props.items.length - 1) {
      shiftCount += 1;
    } else {
      shiftCount = 0;
    }

    _this2.setShiftCount(shiftCount);
    _this2.setMoveDirection(direction);
    _this2.setRefItemID(id);
  };

  this.moveRight2Left = function () {
    var direction = 'left';
    var changeDirection = _this2.state.moveDirection !== direction;
    var shiftCount = _this2.state.shiftCount;
    if (changeDirection) {
      shiftCount = 0;
    }

    var visibleWidth = _this2.getVisibleWidth();
    if (_this2.isRightControlVisible()) {
      visibleWidth -= _this2.controlWidth;
    }
    var id = (0, _helpers.getLeftCornerElement)(_this2.state.transition, _this2.widthArr, visibleWidth);
    if (id === _this2.state.refItemID) {
      shiftCount += 1;
    } else if (id === 0) {
      shiftCount += 1;
    } else {
      shiftCount = 0;
    }

    _this2.setShiftCount(shiftCount);
    _this2.setMoveDirection(direction);
    _this2.setRefItemID(id);
  };

  this.isRightControlVisible = function () {
    return _this2.getVisibleWidth() - _this2.state.transition < _this2.totalWidth;
  };

  this.isleftControlVisible = function () {
    return _this2.state.transition < 0;
  };
}, _temp);


Breadcrumbs.propTypes = {
  isLoading: _propTypes2.default.bool,
  items: _propTypes2.default.arrayOf(_propTypes2.default.object)
};