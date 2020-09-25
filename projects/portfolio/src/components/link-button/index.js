import PropTypes from 'prop-types'
import { Button } from './styles'

const LinkButton = ({ label }) => {
  return (
    <Button>
      <span>{label}</span>
    </Button>
  )
}

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
}

export default LinkButton
