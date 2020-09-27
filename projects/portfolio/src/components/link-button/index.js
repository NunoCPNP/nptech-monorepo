import PropTypes from 'prop-types'
import Back from '../../../public/arrow.svg'
import Message from '../../../public/message.svg'
import { Button } from './styles'

const LinkButton = ({ label, icon }) => {
  return (
    <Button>
      {icon === 'projects' && <Back className="svg" />}
      {icon === 'email' && <Message className="svg" />}
      <span>{label}</span>
    </Button>
  )
}

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

export default LinkButton
