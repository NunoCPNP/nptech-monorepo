import { configure } from '@storybook/react'

import theme from './theme';

import './reset.css'

export const parameters = {
  docs: {
    theme: theme
  },
};

configure(require.context('../stories', true, /\.stories\.tsx$/), module)