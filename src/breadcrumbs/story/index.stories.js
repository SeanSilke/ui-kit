import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { DeferredRender } from '../../../../../.storybook/deferredRender';
import { MemoryRouter } from 'react-router-dom';
import { MUThemeDecorator } from '../../../../../.storybook/mu-theme-decorator';
import { BreadCrumbViewport } from './breadcrumb-viewport';

import { longitems, shortItems } from './data';
import { Breadcrumbs } from '../index';

import '../../../../default.scss';
import '../../../../assets/fonts/_fonts.scss';
import 'normalize.css';

const stories = storiesOf('Breadcrumbs', module);

stories
  .addDecorator(story => <BreadCrumbViewport>{story()}</BreadCrumbViewport>)
  .addDecorator(MUThemeDecorator)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .addDecorator(story => <DeferredRender>{story()}</DeferredRender>)
  .addDecorator(withKnobs)
  .add('Fit in viewport', () => <Breadcrumbs items={shortItems} isLoading={boolean('isLoading', false)} />)
  .add('Larger than viewport', () => <Breadcrumbs items={longitems} isLoading={boolean('isLoading', false)} />);
