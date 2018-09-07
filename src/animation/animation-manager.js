import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import { AnimationPanel } from './animation-panel';

export class AnimationManager extends Component {
  zIndex = 1;

  getTransitionStyles = index => () => {
    return this.props.transitionStyles[this.props.direction][index];
  };

  wrap = (elem, index) => (
    <AnimationPanel
      {...this.props.panelProps}
      {...elem.props}
      key={elem.key}
      getTransitionStyles={this.getTransitionStyles(index)}
      zIndex={this.zIndex++}
    >
      {elem}
    </AnimationPanel>
  );

  render() {
    //React.Children.toArray besides from it main function also removed null and undefined element
    const children = React.Children.toArray(this.props.children);
    return <TransitionGroup component={this.props.component}>{children.map(this.wrap)}</TransitionGroup>;
  }
}

AnimationManager.propTypes = {
  children: PropTypes.node.isRequired,
  // transitionStyles is an object where keys are animation type and values are  arrays of styles for panels
  // panelStyle is an object where keys corresponding to animation stages
  // {
  // ....
  //  animationType : [panelStyle, , ...]
  // ...
  // }
  transitionStyles: PropTypes.object.isRequired,
  //direction is one of the keys of transitionStyles object
  direction: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  panelProps: PropTypes.object
};
