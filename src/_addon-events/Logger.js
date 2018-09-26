/* eslint-disable react/no-deprecated*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventEmiter from 'eventemitter3';
import json from 'format-json';

import * as EVENTS from './events';

const styles = {
  wrapper: {
    padding: 20,
    fontFamily: 'Areal, sans-serif',
    color: 'rgb(51, 51, 51)',
  },
  item: {
    listStyle: 'none',
    marginBottom: 10,
  },
};

export class Logger extends Component {

  constructor(props) {
    super(props);
    const { emiter } = props;
    emiter.on(EVENTS.TEST_EVENT_1, this.onEventHandler(EVENTS.TEST_EVENT_1));
    emiter.on(EVENTS.TEST_EVENT_2, this.onEventHandler(EVENTS.TEST_EVENT_2));
    emiter.on(EVENTS.TEST_EVENT_3, this.onEventHandler(EVENTS.TEST_EVENT_3));
    emiter.on(EVENTS.TEST_EVENT_4, this.onEventHandler(EVENTS.TEST_EVENT_4));
  }

  state = {
    events: [],
  };

  onEventHandler = name =>
    (payload) => {
      this.setState(({ events }) => ({
        events: [...events, { name, payload }],
      }));
    };

  render() {
    return (
      <div style={styles.wrapper}>
        <h1>Logger</h1>
        <dl>
          {this.state.events.map((event, i) => (
            <div style={styles.item} key={i}>
              <dt><b>Event name:</b> {event.name}</dt>
              <dd><b>Event payload:</b> {json.plain(event.payload)}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }
}

Logger.propTypes = {
  emiter: PropTypes.instanceOf(EventEmiter).isRequired,
};
