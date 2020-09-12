import PropTypes from 'prop-types'

import Navbar from '../navbar'

const Header = ({ navbar }) => (
  <header data-testid="header">
    <Navbar navbar={navbar} />
  </header>
)

Header.propTypes = {
  navbar: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Header
