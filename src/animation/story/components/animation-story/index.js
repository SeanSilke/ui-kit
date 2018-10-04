import React, { Component } from 'react';
import { AnimationManager } from '../../../animation-manager';
import { transitionStyles, defaultAnimatonPanelStyle as defaultStyle } from './styles';
import { ANIMATION_DURATION } from './constants';
import RaisedButton from 'material-ui/RaisedButton';
import { AnimationWrapper } from '../animation-wrapper';
import { InnerPanel } from '../inner-panel';
import './style.scss';

// The AnimationManager cowers its children in AnimationPanel.
// And then AnimationPanel component applied a particular transition style to itself
// on different lifecycle moments. The styles are listed in the "transition styles" object,
// under the keys of animation type and in order of AnimationManager children.

export class AnimationStory extends Component {
  state = {
    keys: [1, 2],
    direction: 'still'
  };

  animationFactory = (direction) => {
    let _this = this;
    return () => {
    var keys;
    var left = _this.state.keys[0];
    var right = _this.state.keys[1];
    switch(direction) {
      case 'right2':
        keys = [right+1, right+2];
        break;
      case 'right1':
        keys = [right, right+1];
        break;
      case 'left2':
        keys = [left-2, left-1];
        break;
      case 'left1':
        keys = [left-1, left];
        break;
      case 'rightFade':
        keys = [left, right+1];
        break;
      case 'leftFade':
        keys = [left-1, right];
        break;
      case 'leftShiftRightFade':
        keys = [left-1, left];
        break;
      case 'still':
        keys = [1, 2]; 
        break;
      default:
        throw new Error(`unknown animation type '${direction}'`);
    }
    this.setState({ keys, direction });
  }};

  right2 = this.animationFactory('right2');
  leftShiftRightFade = this.animationFactory('leftShiftRightFade');
  right1 = this.animationFactory('right1');
  left1 = this.animationFactory('left1');
  left2 = this.animationFactory('left2');
  rightFade = this.animationFactory('rightFade');
  leftFade = this.animationFactory('leftFade');

  // This button is for resetting pannel keys
  // The animation type is 'still' e.g. no transition
  reset = this.animationFactory('still');

  render() {
    const [left, right] = this.state.keys;
    const resetDisabled = (left === 1) && (right === 2);

    const panelProps = { className: 'animation-panel', duration: ANIMATION_DURATION, defaultStyle };

    const AnimationManagerProps = {
      transitionStyles,
      direction: this.state.direction,
      panelProps,
      component: AnimationWrapper,
      onAnimationEnd: () => {console.log('animation ended')}
    };
    return (
      <div>
        <AnimationManager {...AnimationManagerProps}>
          {this.state.keys.map(key => <InnerPanel id={key} key={key} />)}
        </AnimationManager>
        <div style={{ textAlign: 'center', marginTop: 8, marginBottom: -10 }}>
          Click the button with animation type to start the animation
        </div>
        <div className={'button-layout'}>
          <RaisedButton
            label="2 steps left"
            primary={true}
            className={'action-button'}
            onClick={this.left2}
          />
          <RaisedButton
            label="step left"
            primary={true}
            className={'action-button'}
            onClick={this.left1}
          />
          <RaisedButton
            label="step right"
            primary={true}
            className={'action-button'}
            onClick={this.right1}
          />
          <RaisedButton
            label="2 steps right"
            primary={true}
            className={'action-button'}
            onClick={this.right2}
          />
        </div>
        <div className={'button-layout'}>
          <RaisedButton
            label="left fade"
            primary={true}
            className={'action-button'}
            onClick={this.leftFade}
          />
          <RaisedButton
            label="left Shift and Right Fade"
            primary={true}
            className={'action-button'}
            onClick={this.leftShiftRightFade}
          />
          <RaisedButton
            label="right Fade"
            primary={true}
            className={'action-button'}
            onClick={this.rightFade}
          />
        </div>
        <div style={{ textAlign: 'center', marginBottom: 10 }}>Reset panels keys to try new animation</div>
        <RaisedButton label="reset panels keys" disabled={resetDisabled} onClick={this.reset} fullWidth={true} />
      </div>
    );
  }
}
