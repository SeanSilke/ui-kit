import React, { Component } from 'react';
import { NotificationsList } from '../index';
import PropTypes from 'prop-types';
import { ADD_NOTIFICATION } from './events';

export class Story extends Component {
  constructor(props) {
    super(props);
    this.props.emiter.on(ADD_NOTIFICATION, this.updateQueue);
  }

  id = 3;

  state = {
    queue: [
      {
        message: ' 2',
        id: '2'
      },
      {
        message: ' 1',
        id: '1'
      },
      {
        message: ' 0',
        id: '0'
      }
    ]
  };

  updateQueue = e => {
    const queue = [
      {
        type: 'done',
        message: `${e}. id: ${this.id}`,
        id: String(this.id)
      },
      ...this.state.queue
    ];
    this.setState({ queue });
    this.id++;
  };

  render() {
    return (
      <div>
        <NotificationsList showList queue={this.state.queue} />
      </div>
    );
  }
}

Story.propTypes = {
  emiter: PropTypes.object.isRequired
};
