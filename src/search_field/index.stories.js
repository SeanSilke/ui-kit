import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SearchField } from './index';
import { muiTheme } from 'storybook-addon-material-ui';
import { themesList } from '../../.storybook/theme';

const vraperProps = {
  style: {
    width: '50%'
  }
};

storiesOf('SearchField', module)
  .addDecorator(muiTheme(themesList))
  .addDecorator(story => <div {...vraperProps}>{story()} </div>)
  .add('Uncontrolled Component', () => (
    <SearchField floatingLabelText="Найти профиль" name="search" onChange={action('onChange')} />
  ))
  .add('Uncontrolled Component with initial value', () => (
    <SearchField
      floatingLabelText="Найти профиль"
      defaultValue="defaultValue"
      name="search"
      onChange={action('onChange')}
    />
  ))
  .add('Controlled component with initial value', () => (
    <SearchField floatingLabelText="Найти профиль" name="search" value={'some value'} onChange={action('onChange')} />
  ));
