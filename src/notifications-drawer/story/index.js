import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NotificationsDrawer } from '../index';
import { ADD_NOTIFICATION } from '../../notifications-list/story/events';

export class DrawerStory extends Component {
  constructor(props) {
    super(props);
    this.props.emiter.on(ADD_NOTIFICATION, this.updateQueue);
  }

  componentWillUnmount() {
    this.props.emiter.removeListener(ADD_NOTIFICATION);
  }
  state = {
    queue: [
      {
        message: ' 4',
        id: '4',
        reviewed: false
      },
      {
        message: ' 3',
        id: '3',
        reviewed: false
      },
      {
        message: ' 2',
        id: '2',
        reviewed: false
      },
      {
        message: ' 1',
        id: '1',
        reviewed: false
      },
      {
        message: ' 0',
        id: '0',
        reviewed: false
      }
    ]
  };

  deleteNotification = targetId => this.setState({ queue: this.state.queue.filter(({ id }) => targetId !== id) });

  id = this.state.queue.length;

  updateQueue = e => {
    const queue = [
      {
        type: 'done',
        message: `${e}. id: ${this.id}`,
        id: String(this.id),
        reviewed: false
      },
      ...this.state.queue
    ];
    this.setState({ queue });
    this.id++;
  };

  render() {
    return <NotificationsDrawer deleteNotification={this.deleteNotification} queue={this.state.queue} />;
  }
}

DrawerStory.propTypes = {
  emiter: PropTypes.object.isRequired
};
