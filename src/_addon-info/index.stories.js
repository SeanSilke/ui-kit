import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

storiesOf('__Info', module).add(
  'withInfo',
  withInfo(`
      description or documentation about component, supports markdown

      ~~~js
      <Button>Click Here</Button>
      ~~~

    `)(() => <h1>This is a simple header component.</h1>)
);
