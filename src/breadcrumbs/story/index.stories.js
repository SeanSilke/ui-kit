import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { DeferredRender } from '../../../.storybook/deferredRender';
import { muiTheme } from 'storybook-addon-material-ui';
import { BreadCrumbViewport } from './breadcrumb-viewport';

import { longitems, shortItems } from './data';
import { Breadcrumbs } from '../index';
import { BreadcrumbsItem } from './breadcrumbs-item';

import { themesList } from '../../../.storybook/theme';

// import '../../../../default.scss';
// import '../../../../assets/fonts/_fonts.scss';
// import 'normalize.css';

const stories = storiesOf('Breadcrumbs', module);

stories
  .addDecorator(story => <BreadCrumbViewport>{story()}</BreadCrumbViewport>)
  .addDecorator(story => <DeferredRender>{story()}</DeferredRender>)
  .addDecorator(muiTheme(themesList))
  .addDecorator(withKnobs)
  .add('Fit in viewport', () => (
    <Breadcrumbs Item={BreadcrumbsItem} items={shortItems} isLoading={boolean('isLoading', false)} />
  ))
  .add('Larger than viewport', () => (
    <Breadcrumbs Item={BreadcrumbsItem} items={longitems} isLoading={boolean('isLoading', false)} />
  ));
