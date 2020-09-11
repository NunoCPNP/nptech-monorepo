import PropTypes from 'prop-types'
import { Button } from './styles'

const LinkButton = ({ label }) => {
  return (
    <Button>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{label}</span>
    </Button>
  )
}

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
}

export default LinkButton
