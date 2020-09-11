import { render, cleanup } from '../../../utils/test-utils'

import Header from '../index'

afterEach(cleanup)

describe('<Header /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<Header />)

    const header = queryAllByTestId(/header/i)
    expect(header).toHaveLength(1)
  })

  it('Should render children navbar component', () => {
    const { queryAllByTestId } = render(<Header />)

    const navbar = queryAllByTestId(/navbar/i)
    expect(navbar).toHaveLength(1)
  })

  it('Should match snapshot', () => {
    const { asFragment } = render(<Header />)

    expect(asFragment(<Header />)).toMatchSnapshot()
  })
})
