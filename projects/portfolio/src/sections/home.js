import PropTypes from 'prop-types'
import styled from '@nptech/theme-provider'

import CTA from '../components/cta'

const HomeSection = ({ cta }) => {
  return (
    <Section id="Home">
      <CTA cta={cta} />
    </Section>
  )
}

HomeSection.propTypes = {
  cta: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default HomeSection

const Section = styled.section`
  padding-top: ${({ slot }) => (slot !== 0 ? '0rem' : '5.5rem')};
  padding-bottom: ${({ slot }) => (slot !== 0 ? '5.5rem' : '0rem')};
  min-height: 100vh;
  display: grid;
  align-content: center;
  overflow-x: hidden;
`
