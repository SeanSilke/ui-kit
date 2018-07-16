import React from 'react';
import { storiesOf } from '@storybook/react';
import { MUThemeDecorator } from '../../../.storybook/mu-theme-decorator';
import { HighlightText } from './index';

storiesOf('HighlightText', module)
  .addDecorator(MUThemeDecorator)
  .add('highlighted text', () => (
    <div>
      <div>Simple text</div>
      <div>
        <HighlightText>Highlighted text</HighlightText>
      </div>
    </div>
  ));
