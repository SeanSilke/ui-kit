import React, { Component } from 'react';
import { NotificationsList } from '../index';
import { NotificationsDrawer } from '../../notifications-drawer';
import PropTypes from 'prop-types';
import { initialState } from './initial-state';
import { ADD_NOTIFICATION } from './events';

export class DrawerAndList extends Component {
  constructor(props) {
    super(props);
    this.props.emiter.on(ADD_NOTIFICATION, this.updateQueue);
  }

  componentWillUnmount() {
    this.props.emiter.removeListener(ADD_NOTIFICATION);
  }

  state = { ...initialState, isVisible: true };

  id = this.state.queue.length;

  deleteNotification = targetId => this.setState({ queue: this.state.queue.filter(({ id }) => targetId !== id) });

  updateQueue = e => {
    const queue = [
      {
        type: 'done',
        message: `${e}. id: ${this.id}`,
        id: String(this.id),
        viewed: false
      },
      ...this.state.queue
    ];
    this.setState({ queue });
    this.id++;
  };

  hideNotification = targetId => {
    const maper = elem => {
      if (elem.id === targetId) {
        elem.viewed = true;
      }
      return elem;
    };
    const queue = this.state.queue.map(maper);
    this.setState({ queue });
  };

  toggleList = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        <NotificationsList
          hideNotification={this.hideNotification}
          queue={this.state.queue}
          isVisible={this.state.isVisible}
        />
        <NotificationsDrawer
          hideNotification={this.hideNotification}
          deleteNotification={this.deleteNotification}
          queue={this.state.queue}
          onToggle={this.toggleList}
        />
      </div>
    );
  }
}

DrawerAndList.propTypes = {
  emiter: PropTypes.object.isRequired
};
