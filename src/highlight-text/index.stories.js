import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { themesList } from '../../.storybook/theme';
import { HighlightText } from './index';

storiesOf('HighlightText', module)
  .addDecorator(muiTheme(themesList))
  .add('highlighted text', () => (
    <div>
      <div>Simple text</div>
      <div>
        <HighlightText>Highlighted text</HighlightText>
      </div>
    </div>
  ));
