import React from 'react';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const LinkAway = ({ text, style = {}, ...props }) => {
  props = {
    activeStyle: { color: 'black' },
    ...props,
    style: { display: 'flex', alignItems: 'center', ...style }
  };
  return (
    <NavLink {...props}>
      {text}
      <ArrowForward style={{ height: 19 }} />
    </NavLink>
  );
};

LinkAway.propTypes = {
  text: PropTypes.string.isRequired
};
