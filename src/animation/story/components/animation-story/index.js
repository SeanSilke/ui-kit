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

  animationFactory = (keys, direction) => () => {
    this.setState({ keys, direction });
  };

  right2 = this.animationFactory([-1, 0], 'right2');
  leftShiftRightFade = this.animationFactory([4, 1], 'leftShiftRightFade');
  right1 = this.animationFactory([0, 1], 'right1');
  left1 = this.animationFactory([2, 3], 'left1');
  left2 = this.animationFactory([3, 4], 'left2');
  rightFade = this.animationFactory([0, 2], 'rightFade');

  // This button is for resetting pannel keys
  // The animation type is 'still' e.g. no transition
  reset = this.animationFactory([1, 2], 'still');

  render() {
    const disabled = this.state.direction !== 'still';

    const panelProps = { className: 'animation-panel', duration: ANIMATION_DURATION, defaultStyle };

    const AnimationManagerProps = {
      transitionStyles,
      direction: this.state.direction,
      panelProps,
      component: AnimationWrapper
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
            label="left2"
            disabled={disabled}
            primary={true}
            className={'action-button'}
            onClick={this.left2}
          />
          <RaisedButton
            label="left1"
            disabled={disabled}
            primary={true}
            className={'action-button'}
            onClick={this.left1}
          />
          <RaisedButton
            label="right1"
            disabled={disabled}
            primary={true}
            className={'action-button'}
            onClick={this.right1}
          />
          <RaisedButton
            label="right2"
            disabled={disabled}
            primary={true}
            className={'action-button'}
            onClick={this.right2}
          />
          <RaisedButton
            label="rightFade"
            disabled={disabled}
            primary={true}
            className={'action-button'}
            onClick={this.rightFade}
          />
          <RaisedButton
            label="leftShiftRightFade"
            disabled={disabled}
            primary={true}
            className={'action-button'}
            onClick={this.leftShiftRightFade}
          />
        </div>
        <div style={{ textAlign: 'center', marginBottom: 10 }}>Reset panels keys to try new animation</div>
        <RaisedButton label="reset panels keys" disabled={!disabled} onClick={this.reset} fullWidth={true} />
      </div>
    );
  }
}
