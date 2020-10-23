import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'

import { dark, light } from '../themes'

export const Provider = ({ children, darkMode }) => {
  return <ThemeProvider theme={darkMode ? dark : light}>{children}</ThemeProvider>
}

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  darkMode: PropTypes.bool.isRequired,
}
