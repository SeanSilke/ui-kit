import React, { Component } from 'react';
import { NotificationsList } from '../index';
import PropTypes from 'prop-types';
import { ADD_NOTIFICATION } from './events';

export class Story extends Component {
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
        viewed: false
      },
      {
        message: ' 3',
        id: '3',
        viewed: false
      },
      {
        message: ' 2',
        id: '2',
        viewed: false
      },
      {
        message: ' 1',
        id: '1',
        viewed: false
      },
      {
        message: ' 0',
        id: '0',
        viewed: false
      }
    ]
  };

  id = this.state.queue.length;

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

  render() {
    return (
      <div>
        <NotificationsList hideNotification={this.hideNotification} queue={this.state.queue} />
      </div>
    );
  }
}

Story.propTypes = {
  emiter: PropTypes.object.isRequired
};
