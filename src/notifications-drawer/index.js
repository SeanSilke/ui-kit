import React, { Component } from 'react';
import { Notification } from '../notification';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Badge from 'material-ui/Badge';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { PropTypes } from 'prop-types';
import './style.scss';

export class NotificationsDrawer extends Component {
  state = {
    open: false
  };

  onClick = () => {
    this.setState(
      {
        open: !this.state.open
      },
      () => {
        // NOTE: Not clear why this is needed
        this.props.changeView(false);
      }
    );
  };

  renderButton = () => {
    return (
      <Badge
        badgeContent={this.props.history && this.props.history.length}
        primary={true}
        style={{ position: 'fixed', bottom: '8px', right: '8px' }}
      >
        <FloatingActionButton onClick={this.onClick}>
          <NotificationsIcon />
        </FloatingActionButton>
      </Badge>
    );
  };

  renderHistory = () => {
    return (
      <div>
        {this.props.history.map(item => (
          <Notification key={item.id} {...item} clickCallback={this.props.deleteNotification} />
        ))}
      </div>
    );
  };

  render() {
    const containerClassName = this.state.open ? 'notificationsDrawer open' : 'notificationsDrawer';
    return (
      <div className={containerClassName}>
        <ReactCSSTransitionGroup
          transitionName="notificationDrawer"
          transitionAppear={true}
          transitionLeaveTimeout={600}
          transitionEnterTimeout={300}
          transitionAppearTimeout={0}
        >
          <div className="notificationsDrawerInner">{this.state.open ? this.renderHistory() : null}</div>
        </ReactCSSTransitionGroup>
        {this.renderButton()}
      </div>
    );
  }
}

NotificationsDrawer.propTypes = {
  type: PropTypes.string
};
