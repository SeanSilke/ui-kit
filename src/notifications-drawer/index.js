import React, { Component } from 'react';
import { Notification } from '../notification';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';

import './style.scss';
import { DrawerButton } from './components/drawer-button';

export class NotificationsDrawer extends Component {
  state = {
    open: false
  };

  toggleDrawer = () => this.setState({ open: !this.state.open });

  render() {
    const { open } = this.state;
    const { queue, deleteNotification } = this.props;
    const containerClassName = classNames('notificationsDrawer', { open });
    return (
      <div>
        <div className={containerClassName}>
          <TransitionGroup>
            {queue.map(item => (
              <CSSTransition key={item.id} classNames="notification-drawer" timeout={{ enter: 300, exit: 300 }}>
                <Notification key={item.id} {...item} clickCallback={deleteNotification} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <DrawerButton queue={queue} toggleDrawer={this.toggleDrawer} />
      </div>
    );
  }
}

NotificationsDrawer.defaultProps = {
  queue: []
};

NotificationsDrawer.propTypes = {
  queue: PropTypes.array,
  deleteNotification: PropTypes.func
};
