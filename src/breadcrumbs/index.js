/* eslint react/no-deprecated: 0 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import { BreadcrumbsControl, LoadingIndicator } from './components';
import { getWidthToRightBorder, getWidthToLeftBorder, getRightCornerElement, getLeftCornerElement } from './helpers';
import './_breadcrumbs.scss';

const onResizeThrottleDelay = 500;

export class Breadcrumbs extends PureComponent {
  constructor(props) {
    super(props);

    let refItemID = props.items.length - 1;
    if (props.isLoading) refItemID++;

    this.state = {
      transition: 0,
      moveDirection: 'right',
      refItemID,
      shiftCount: 0
    };
  }

  track = null;
  widthArr = [];
  totalWidth = 0;
  controlWidth = 0;

  _getTrack = elem => {
    this.track = elem;
  };

  _getControlWidth = elem => {
    this.controlWidth = elem ? elem.offsetWidth : 0;
  };

  moveX = transition => this.setState({ transition });

  setRefItemID = refItemID => this.setState({ refItemID });

  setMoveDirection = moveDirection => this.setState({ moveDirection });

  setShiftCount = shiftCount => this.setState({ shiftCount });

  updateWidth = () => {
    const breadCr = this.track.getElementsByClassName('breadcrumbs--item');
    this.widthArr = Array.from(breadCr, e => e.offsetWidth);
    this.totalWidth = this.widthArr.reduce((p, c) => p + c, 0);
  };

  componentDidUpdate() {
    this.updateWidth();
    this.move();
  }

  componentWillReceiveProps(nextProps) {
    let refItemID = nextProps.items.length - 1;
    if (nextProps.isLoading) refItemID++;
    this.setShiftCount(0);
    this.setRefItemID(refItemID);
    this.setMoveDirection('right');
  }

  componentDidMount() {
    this.updateWidth();
    this.move();
    window.addEventListener('resize', this.onResize);
  }

  getVisibleWidth = () => {
    if (this.track) return this.track.parentElement.offsetWidth;
    return 0;
  };

  _moveRight = () => {
    let lastBRid = this.props.items.length - 1;
    if (this.props.isLoading) lastBRid++;
    const vpWidth = this.getVisibleWidth();
    const refItemID = this.state.refItemID;
    const elemWidth = this.widthArr[refItemID];

    const widthToRightBorder = getWidthToRightBorder(refItemID, this.widthArr);
    let diff = vpWidth - widthToRightBorder;
    // обработка сдвига в случае если крошка бльше вюпорта
    const shift = (vpWidth - this.controlWidth * 2) * this.state.shiftCount;
    if (shift && shift + vpWidth >= elemWidth) {
      diff = -getWidthToLeftBorder(refItemID, this.widthArr);
      if (refItemID === lastBRid) {
        diff += this.controlWidth;
      } else {
        diff += this.controlWidth * 2;
      }
    } else {
      diff = diff + shift;
    }

    // проверка на выход за границы
    if (diff > 0) diff = 0;

    if (refItemID === lastBRid || diff === 0) {
      this.moveX(diff);
    } else {
      this.moveX(diff - this.controlWidth);
    }
  };

  _moveLeft = () => {
    const refItemID = this.state.refItemID;
    const widthToLeftBorder = getWidthToLeftBorder(refItemID, this.widthArr);
    const vpWidth = this.getVisibleWidth();
    let diff;
    diff = -widthToLeftBorder;
    // обработка сдвига в случае если крошка бльше вюпорта
    const shift = (vpWidth - this.controlWidth * 2) * this.state.shiftCount;
    diff = diff - shift;

    // проверка на выход за границы
    if (diff <= vpWidth - this.totalWidth) {
      diff = vpWidth - this.totalWidth;
    }

    // NOTE: diff > 0 can occur after resizing
    if (diff > 0) diff = 0;

    if (refItemID === 0 || diff === vpWidth - this.totalWidth) {
      this.moveX(diff);
    } else {
      this.moveX(diff + this.controlWidth);
    }
  };

  move = () => {
    if (this.state.moveDirection === 'right') {
      this._moveRight();
    } else {
      this._moveLeft();
    }
  };

  onResize = throttle(() => this.forceUpdate(), onResizeThrottleDelay, { trailing: true });

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  moveLeft2Right = () => {
    const direction = 'right';
    const changeDirection = this.state.moveDirection !== direction;
    let shiftCount = this.state.shiftCount;
    if (changeDirection) {
      shiftCount = 0;
    }

    let hiddenLeftPart = this.state.transition;
    if (this.isleftControlVisible()) {
      hiddenLeftPart -= this.controlWidth;
    }

    const id = getRightCornerElement(hiddenLeftPart, this.widthArr);
    if (id === this.state.refItemID && !changeDirection) {
      shiftCount += 1;
    } else if (id === this.props.items.length - 1) {
      shiftCount += 1;
    } else {
      shiftCount = 0;
    }

    this.setShiftCount(shiftCount);
    this.setMoveDirection(direction);
    this.setRefItemID(id);
  };

  moveRight2Left = () => {
    const direction = 'left';
    const changeDirection = this.state.moveDirection !== direction;
    let shiftCount = this.state.shiftCount;
    if (changeDirection) {
      shiftCount = 0;
    }

    let visibleWidth = this.getVisibleWidth();
    if (this.isRightControlVisible()) {
      visibleWidth -= this.controlWidth;
    }
    const id = getLeftCornerElement(this.state.transition, this.widthArr, visibleWidth);
    if (id === this.state.refItemID) {
      shiftCount += 1;
    } else if (id === 0) {
      shiftCount += 1;
    } else {
      shiftCount = 0;
    }

    this.setShiftCount(shiftCount);
    this.setMoveDirection(direction);
    this.setRefItemID(id);
  };

  isRightControlVisible = () => this.getVisibleWidth() - this.state.transition < this.totalWidth;

  isleftControlVisible = () => this.state.transition < 0;

  render() {
    const { items, isLoading } = this.props;
    const { transition } = this.state;
    const BreadcrumbsItem2 = this.props.Item;
    const itemsCount = items.length + (isLoading ? 1 : 0);
    return (
      <div className="breadcrumbs">
        <BreadcrumbsControl
          left
          faded={!this.isleftControlVisible()}
          onClick={this.moveLeft2Right}
          getWidth={this._getControlWidth}
        />
        <div className="breadcrumbs--track" style={{ transform: `translateX(${transition}px)` }} ref={this._getTrack}>
          {items.map((props, id) => {
            const href = props.href || null;
            return <BreadcrumbsItem2 {...props} href={href} key={id} hasSeparator={id < itemsCount - 1} />;
          })}
          {isLoading ? <LoadingIndicator /> : null}
        </div>
        <BreadcrumbsControl right faded={!this.isRightControlVisible()} onClick={this.moveRight2Left} />
      </div>
    );
  }
}

Breadcrumbs.propTypes = {
  isLoading: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object)
};
