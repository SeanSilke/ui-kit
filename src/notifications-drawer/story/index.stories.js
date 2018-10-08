import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { themesList } from '../../ui-themes';
import { DrawerStory } from './index';
import { WithEventsDecorator, emiter } from '../../notifications-list/story/with-events';

storiesOf('NotificationsDrawer', module)
  .addDecorator(WithEventsDecorator)
  .addDecorator(story => {
    const storyKind = story();
    return <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>{storyKind}</div>;
  })
  .addDecorator(muiTheme(themesList))
  .add('NotificationsDrawer', () => <DrawerStory emiter={emiter} />);
