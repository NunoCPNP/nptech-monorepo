import { addons } from '@storybook/addons';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { addParameters } from '@storybook/react';

import theme from './theme';

addons.setConfig({
  theme: theme,
  previewTabs: {
    'canvas': { title: 'Component Preview'},
    'storybook/docs/panel': { title: 'Component Documentation' },
  }});

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  }
})