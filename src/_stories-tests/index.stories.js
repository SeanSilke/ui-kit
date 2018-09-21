/* eslint-disable max-len */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../../jest-test-results.json';

// NOTE: We use the old version of storybook the documentation is here
//https://github.com/storybooks/storybook/tree/release/3.4/addons/jest
storiesOf('__Stories tests', module)
  .addDecorator(withTests({ results })('storyshots', 'image-snapshot'))
  .add('Tests', () => (
    <spam>
      {'The purpose of this story is to show a result of snapshot tests for the storybook. Please select the test tab.'}
    </spam>
  ));
