import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const AnimationWrapper = ({ children }) => <div className="animation-wrapper">{children}</div>;

AnimationWrapper.propTypes = {
  children: PropTypes.node
};
