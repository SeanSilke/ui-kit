/* eslint-disable max-len */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { withInfo } from '@storybook/addon-info';
import results from '../../jest-test-results.json';

// NOTE: We use the old version of storybook the documentation is here
//https://github.com/storybooks/storybook/tree/release/3.4/addons/jest
storiesOf('__Stories tests', module)
  .addDecorator(withTests({ results })('storyshots', 'image-snapshot'))
  .add(
    'Tests',
    withInfo(`

      The purpose of this story is to show a result of snapshot tests for the storybook.
      ## Generating the test results

      You need to make sure the generated test-restuls file exists before you start storybook.
      During development you will likely start jest in watch-mode
      and so the json file will be re-generated every time code or tests change.

      ~~~sh
      npm run test:generate-output -- --watch
      ~~~


      `)(() => <spam>{' Please select the test tab. For move infor select info tab'}</spam>)
  );
