import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

const forseReflow = HtmlElement => HtmlElement.scrollTop;

export class AnimationPanel extends Component {
  render() {
    const { getTransitionStyles, zIndex, children, className, duration, defaultStyle, ...otherProps } = this.props;
    return (
      <Transition mountOnEnter unmountOnExit timeout={duration} onEnter={forseReflow} {...otherProps}>
        {state => {
          const transitionStyles = getTransitionStyles();
          return (
            <div
              className={className}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
                zIndex: zIndex
              }}
            >
              {children}
            </div>
          );
        }}
      </Transition>
    );
  }
}

AnimationPanel.propTypes = {
  getTransitionStyles: PropTypes.func.isRequired,
  zIndex: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  duration: PropTypes.number.isRequired,
  defaultStyle: PropTypes.object
};
