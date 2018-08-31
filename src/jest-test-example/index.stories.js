import React from 'react';
import results from '../../jest-test-results.json';
import { storiesOf } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';

// NOTE: We use the old version of storybook the documentation is here
//https://github.com/storybooks/storybook/tree/release/3.4/addons/jest
storiesOf('__Jest', module)
  .addDecorator(withTests({ results })('sum'))
  .add('withTests', () => <div>Jest results fri sum function in storybook</div>);
