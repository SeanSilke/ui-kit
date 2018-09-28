import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { themesList } from '../ui-themes';
import { NotificationsDrawer } from './index';

const history = [
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
];

storiesOf('NotificationsDrawer', module)
  .addDecorator(story => {
    const storyKind = story();
    return <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>{storyKind}</div>;
  })
  .addDecorator(muiTheme(themesList))
  .add('NotificationsDrawer', () => <NotificationsDrawer history={history} />);
