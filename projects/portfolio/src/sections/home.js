import styled from '@emotion/styled'

import CTA from '../components/cta'

const HomeSection = () => {
  return (
    <Wrapper id="Home">
      <CTA />
    </Wrapper>
  )
}

export default HomeSection

const Wrapper = styled('section')`
  padding-top: 5.5rem;
  min-height: 100vh;
  display: grid;
  align-content: center;
`
