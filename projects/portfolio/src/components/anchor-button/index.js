import PropTypes from 'prop-types'
import { StyledAnchor, Container } from './styles'

const AnchorButton = ({ label, icon, linkTo, blankTarget }) => {
  return (
    <StyledAnchor rel={blankTarget ? 'noreferrer' : ''} href={linkTo} target={blankTarget ? '_blank' : ''}>
      <Container>
        {icon === 'github' && <img src="/ghlogo.svg" alt="GitHub Profile" />}
        <div>{label.toUpperCase()}</div>
      </Container>
    </StyledAnchor>
  )
}

AnchorButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  linkTo: PropTypes.string,
  blankTarget: PropTypes.bool,
}

export default AnchorButton
