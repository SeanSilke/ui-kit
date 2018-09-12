import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { themesList } from '../ui-themes';
import { Notification } from './index';
import { action } from '@storybook/addon-actions';

storiesOf('Notification', module)
  .addDecorator(story => {
    const storyKind = story();
    return <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>{storyKind}</div>;
  })
  .addDecorator(muiTheme(themesList))
  .add('Notification', () => (
    <div>
      <Notification id={'1'} type="warning" message="warning" clickCallback={action('clickCallback')} />
      <Notification id={'2'} type="error" message="error" clickCallback={action('clickCallback')} />
      <Notification id={'3'} type="done" message="done" clickCallback={action('clickCallback')} />
      <Notification id={'4'} type="info" message="info" clickCallback={action('clickCallback')} />
      <Notification id={'5'} type="" message="default" clickCallback={action('clickCallback')} />
      <Notification
        id={'6'}
        type=""
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Suspendisse ut libero urna. Ut quis massa felis. Nam eros nisl,
         scelerisque sit amet congue in, dictum et libero. Donec mauris odio"
        clickCallback={action('clickCallback')}
      />
    </div>
  ));
