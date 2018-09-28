import React, { Component } from 'react';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Badge from 'material-ui/Badge';
import { PropTypes } from 'prop-types';
import './style.scss';

export class DrawerButton extends Component {
  render() {
    const { history, toggleDrawer } = this.props;
    return (
      <div className={'notification-drawer-button'}>
        <Badge badgeContent={history && history.length} primary={true}>
          <FloatingActionButton onClick={toggleDrawer}>
            <NotificationsIcon />
          </FloatingActionButton>
        </Badge>
      </div>
    );
  }
}

DrawerButton.propTypes = {
  history: PropTypes.array,
  toggleDrawer: PropTypes.func
};
