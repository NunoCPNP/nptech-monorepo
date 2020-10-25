import { render } from '../../../utils/test-utils'

import Alert from '../index'

describe('<Alert /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<Alert />)

    const test = queryAllByTestId(/alert-component/i)
    expect(test).toHaveLength(1)
  })

  it('Should match snapshot', () => {
    const { asFragment } = render(<Alert />)

    expect(asFragment(<Alert />)).toMatchSnapshot()
  })
})
