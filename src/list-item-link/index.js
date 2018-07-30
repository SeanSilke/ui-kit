import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import { NavLink } from '../nav-link';
import { defaultStyle, defaultActiveStyle } from './style';

export const ListItemLink = ({ style = {}, activeStyle = {}, to, listItemStyle, className, children }) => (
  <ListItem style={listItemStyle} className={className}>
    <NavLink activeStyle={{ ...defaultActiveStyle, ...activeStyle }} style={{ ...defaultStyle, ...style }} to={to}>
      {children}
    </NavLink>
  </ListItem>
);

ListItemLink.propTypes = {
  style: PropTypes.object,
  activeStyle: PropTypes.object,
  to: PropTypes.string,
  listItemStyle: PropTypes.object,
  className: PropTypes.string
};
