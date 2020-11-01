import { render } from '@testing-library/react'

import { ControllersProvider } from '../context/controllers'
import { Provider } from '@nptech/theme-provider'

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => {
  return (
    <Provider darkmode={true}>
      <ControllersProvider>{children}</ControllersProvider>
    </Provider>
  )
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
