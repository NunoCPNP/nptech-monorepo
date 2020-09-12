import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import CTA from '../components/cta'

const HomeSection = ({ cta }) => {
  return (
    <Wrapper id="Home">
      <CTA cta={cta} />
    </Wrapper>
  )
}

HomeSection.propTypes = {
  cta: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default HomeSection

const Wrapper = styled('section')`
  padding-top: 5.5rem;
  min-height: 100vh;
  display: grid;
  align-content: center;
`
