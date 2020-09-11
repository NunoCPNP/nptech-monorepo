import { render } from '../../../utils/test-utils'

import Footer from '../index'

describe('<Footer /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<Footer />)

    const test = queryAllByTestId(/footer/i)
    expect(test).toHaveLength(1)
  })

  it('Should match snapshot', () => {
    const { asFragment } = render(<Footer />)

    expect(asFragment(<Footer />)).toMatchSnapshot()
  })
})
