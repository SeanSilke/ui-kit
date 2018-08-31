import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const MenuDrawer = ({ open, handleToggle, children }) => (
  <Drawer open={open} docked={false}>
    <AppBar
      iconElementLeft={
        <IconButton>
          <NavigationClose />
        </IconButton>
      }
      onLeftIconButtonTouchTap={handleToggle}
    />
    {children}
  </Drawer>
);

MenuDrawer.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  open: PropTypes.bool,
  children: PropTypes.node,
};

export { MenuDrawer };
