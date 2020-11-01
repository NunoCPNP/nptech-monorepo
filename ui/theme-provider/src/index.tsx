import React from 'react'
import styled, { CreateStyled } from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'

import { dark, light, Theme } from './themes'

interface Props {
  children: any
  darkmode: boolean
}

// eslint-disable-next-line react/prop-types
export const Provider: React.FC<Props> = ({ children, darkmode }) => {
  return <ThemeProvider theme={darkmode ? dark : light}>{children}</ThemeProvider>
}
export default styled as CreateStyled<Theme>
