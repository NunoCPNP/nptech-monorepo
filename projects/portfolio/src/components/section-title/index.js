import PropTypes from 'prop-types'
import { Wrapper } from './styles'

const SectionTitle = ({ title, subTitle, uppercase }) => {
  return (
    <Wrapper>
      <span>
        <h2>{uppercase ? title.toUpperCase() : uppercase}</h2>
      </span>
      <h4>{subTitle}</h4>
    </Wrapper>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  uppercase: PropTypes.bool,
}

export default SectionTitle
