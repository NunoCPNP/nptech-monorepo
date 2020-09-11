import { render } from '../../../utils/test-utils'

import CTA from '../index'

describe('<CTA /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<CTA />)

    const test = queryAllByTestId(/cta-component/i)
    expect(test).toHaveLength(1)
  })
})
