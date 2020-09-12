import PropTypes from 'prop-types'
import { Wrapper } from './styles'

const Alert = ({ message }) => {
  return (
    <Wrapper data-testid="alert-component">
      <div className="text">{message}</div>
    </Wrapper>
  )
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Alert
