import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { SelectMultiple } from './index';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { muiTheme } from 'storybook-addon-material-ui';
import { themesList } from '../ui-themes';

const stories = storiesOf('SelectMultiple', module);
stories.addDecorator(withKnobs);

const onValueClick = action('onValueClick');
const onChange = action('onChange');

const options = [
  {
    label: 'one',
    value: 1
  },
  {
    label: 'two',
    value: 2
  },
  {
    label: 'three',
    value: 3
  }
];

class SelectContainer extends Component {
  state = {};
  onChange = value => {
    this.setState({ value });
    onChange(value);
  };

  render() {
    return (
      <div
        style={{
          width: '50%'
        }}
      >
        <SelectMultiple
          options={options}
          searchable={boolean('searchable', true)}
          value={this.state.value}
          onChange={this.onChange}
          {...this.props}
        />
      </div>
    );
  }
}

stories
  .addDecorator(muiTheme(themesList))
  .add('Single', () => <SelectContainer />)
  .add('Multiple', () => <SelectContainer onValueClick={onValueClick} multi />)
  .add('Multiple with highlighted element', () => {
    const label = 'Highlighted number';
    const defaultValue = 1;
    const value = number(label, defaultValue);

    return <SelectContainer onValueClick={onValueClick} multi highlighted={value} />;
  });
