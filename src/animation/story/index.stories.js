import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { themesList } from '../../ui-themes';

import { AnimationStory } from './components/animation-story';

const stories = storiesOf('AnimationManager', module)
  .addDecorator(story => {
    const storyKind = story();
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ width: '80%', maxWidth: 1000, minWidth: 200 }}>{storyKind}</div>
      </div>
    );
  })
  .addDecorator(muiTheme(themesList));
stories.add('Component', () => <AnimationStory />);
