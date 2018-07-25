import React from 'react';
import PropTypes from 'prop-types';
import DrawerUI from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const Drawer = ({ open, handleToggle, children }) => (
  <DrawerUI open={open}>
    <AppBar
      iconElementLeft={
        <IconButton>
          <NavigationClose />
        </IconButton>
      }
      onLeftIconButtonTouchTap={handleToggle}
    />
    {children}
  </DrawerUI>
);

Drawer.propTypes = {
  handleToggle: PropTypes.func.isRequired
};

export { Drawer };
