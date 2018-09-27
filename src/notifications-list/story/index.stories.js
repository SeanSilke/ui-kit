import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { themesList } from '../../ui-themes';
import WithEvents from '@storybook/addon-events';
import EventEmiter from 'eventemitter3';
import { ADD_NOTIFICATION } from './events';
import { Story } from './index';

const emiter = new EventEmiter();
const emit = emiter.emit.bind(emiter);

storiesOf('NotificationsList', module)
  .addDecorator(getStory => (
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
  ))
  .addDecorator(story => {
    const storyKind = story();
    return <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>{storyKind}</div>;
  })
  .addDecorator(muiTheme(themesList))
  .add('NotificationsList', () => <Story emiter={emiter} />);
