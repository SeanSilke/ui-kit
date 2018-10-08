import React, { Component } from 'react';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Badge from 'material-ui/Badge';
import { PropTypes } from 'prop-types';
import './style.scss';

export class DrawerButton extends Component {
  render() {
    const { queue, toggleDrawer } = this.props;
    return (
      <div className={'notification-drawer-button'}>
        <Badge badgeContent={queue.length} primary={true}>
          <FloatingActionButton onClick={toggleDrawer}>
            <NotificationsIcon />
          </FloatingActionButton>
        </Badge>
      </div>
    );
  }
}

DrawerButton.propTypes = {
  queue: PropTypes.array,
  toggleDrawer: PropTypes.func
};
