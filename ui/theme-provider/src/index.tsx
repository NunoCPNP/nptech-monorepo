import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import { dark, light } from './themes'

interface Props {
  children: any
  darkmode: boolean
}

const Provider: React.FC<Props> = ({ children, darkmode }) => {
  return <ThemeProvider theme={darkmode ? dark : light}>{children}</ThemeProvider>
}

export { Provider }