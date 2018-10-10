import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { themesList } from '../../ui-themes';
import { Story } from './index';
import { DrawerAndList } from './drawer-list-story';
import { WithEventsDecorator, emiter } from './with-events';

storiesOf('NotificationsList', module)
  .addDecorator(WithEventsDecorator)
  .addDecorator(story => {
    const storyKind = story();
    return <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>{storyKind}</div>;
  })
  .addDecorator(muiTheme(themesList))
  .add('NotificationsList', () => <Story emiter={emiter} />)
  .add('NotificationsLisAndDrawer', () => <DrawerAndList emiter={emiter} />);
