import { render } from '../../../utils/test-utils'

import About from '../index'

describe('<About /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<About />)

    const test = queryAllByTestId(/about-component/i)
    expect(test).toHaveLength(1)
  })

  it('Should match snapshot', () => {
    const { asFragment } = render(<About />)

    expect(asFragment(<About />)).toMatchSnapshot()
  })
})
