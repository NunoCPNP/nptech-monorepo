import PropTypes from 'prop-types'
import { render } from '@testing-library/react'

import { ThemeProvider } from 'emotion-theming'
import { dark } from '../styles/themes'
import { ControllersProvider } from '../context/controllers'

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={dark}>
      <ControllersProvider>{children}</ControllersProvider>
    </ThemeProvider>
  )
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
