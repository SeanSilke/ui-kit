import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { themesList } from '../../.storybook/theme';

import Components from './ComponentsExample';

storiesOf('__Material-UI', module)
  .addDecorator(story => {
    const storyKind = story();
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '60%', maxWidth: 1000, minWidth: 600 }}>{storyKind}</div>
      </div>
    );
  })
  .addDecorator(muiTheme(themesList))
  .add('Components', () => {
    return <Components />;
  });
