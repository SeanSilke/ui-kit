import React from 'react';
import { List } from 'material-ui/List';
import { MenuItem } from './components/item';
import { ComposedMenuItem } from './components/composed-item';
import { itemShape } from './proptypes';
import PropTypes from 'prop-types';

export const NavMenu = ({ items, handleToggle }) => (
  <List>
    {items.map(
      item =>
        item.children ? (
          <ComposedMenuItem key={item.to} item={item} handleToggle={handleToggle} />
        ) : (
          <MenuItem key={item.to} item={item} handleToggle={handleToggle} />
        )
    )}
  </List>
);

NavMenu.propTypes = {
  items: PropTypes.arrayOf(itemShape).isRequired,
  handleToggle: PropTypes.func.isRequired
};
