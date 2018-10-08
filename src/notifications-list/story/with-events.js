import React from 'react';
import WithEvents from '@storybook/addon-events';
import EventEmiter from 'eventemitter3';
import { ADD_NOTIFICATION } from './events';

export const emiter = new EventEmiter();
const emit = emiter.emit.bind(emiter);

export const WithEventsDecorator = getStory => (
  <WithEvents
    emit={emit}
    events={[
      {
        name: ADD_NOTIFICATION,
        title: 'Add random notification',
        payload: 'text'
      }
    ]}
  >
    {getStory()}
  </WithEvents>
);
