import PropTypes from 'prop-types'
import { Container } from './styles'

import Navbar from '../navbar'

const Header = ({ navbar }) => (
  <Container data-testid="header">
    <Navbar navbar={navbar} />
  </Container>
)

Header.propTypes = {
  navbar: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Header
