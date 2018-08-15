import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

// plugin to add onTouchTap to react components
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'Model Viewer',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: 'https://github.com/SirenaTravel/modelViewer',
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: true,
  /**
   * show horizontal addons panel as a vertical panel on the right
   * @type {Boolean}
   */
  downPanelInRight: true
});

// const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  // req.keys().forEach(filename => req(filename));
  require('../src/highlight-text/index.stories');
  require('../src/breadcrumbs/story/index.stories');
}

configure(loadStories, module);
