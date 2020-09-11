import { render } from '../../../utils/test-utils'

import ProjectDetails from '../index'

describe('<ProjectDetails /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<ProjectDetails />)

    const header = queryAllByTestId(/project-details/i)
    expect(header).toHaveLength(0)
  })
})
