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

  toggleDrawer = () => {
    const { onToggle } = this.props;
    this.setState({ open: !this.state.open });
    if (onToggle) onToggle();
  };

  shouldComponentUpdate({ queue }, { open }) {
    if (this.state.open !== open) return true;
    if (this.props.queue.length !== queue.length) return true;

    const idsSet = new Set(this.props.queue.map(elem => elem.id));
    return queue.some(({ id }) => !idsSet.has(id));
  }

  componentDidUpdate() {
    if (this.state.open) {
      this.props.queue.forEach(elem => this.props.hideNotification(elem.id));
    }
  }

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
  onToggle: PropTypes.func,
  queue: PropTypes.array,
  deleteNotification: PropTypes.func
};
