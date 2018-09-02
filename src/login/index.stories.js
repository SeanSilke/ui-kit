import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { themesList } from '../ui-themes';
import { LoginInner } from './index';
import { action } from '@storybook/addon-actions';

storiesOf('Login', module)
  .addDecorator(story => {
    const storyKind = story();
    return <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>{storyKind}</div>;
  })
  .addDecorator(muiTheme(themesList))
  .add('login page', () => <LoginInner onSubmit={action('onSubmit')} />);
