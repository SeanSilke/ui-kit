import React, { Component } from 'react';
import { NotificationsList } from '../index';
import PropTypes from 'prop-types';
import { initialState } from './initial-state';
import { ADD_NOTIFICATION } from './events';

export class Story extends Component {
  constructor(props) {
    super(props);
    this.props.emiter.on(ADD_NOTIFICATION, this.updateQueue);
  }

  componentWillUnmount() {
    this.props.emiter.removeListener(ADD_NOTIFICATION);
  }

  state = initialState;

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
        <NotificationsList hideNotification={this.hideNotification} isVisible queue={this.state.queue} />
      </div>
    );
  }
}

Story.propTypes = {
  emiter: PropTypes.object.isRequired
};
