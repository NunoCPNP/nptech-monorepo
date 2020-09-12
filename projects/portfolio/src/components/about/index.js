import PropTypes from 'prop-types'
import { Wrapper } from './styles'

const About = ({ about }) => {
  return (
    <Wrapper data-testid="about-component">
      <div>
        {about &&
          about.map((paragraph, index) => (
            <p key={index}>
              {paragraph.map((item) => (
                <span key={item.id}>
                  {item.styled ? <span className="styled">{item.data}</span> : <span>{item.data}</span>}
                </span>
              ))}
            </p>
          ))}
      </div>
    </Wrapper>
  )
}

About.propTypes = {
  about: PropTypes.arrayOf(PropTypes.array).isRequired,
}

export default About
