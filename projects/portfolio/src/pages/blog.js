import styled from '@emotion/styled'

import Page from '../components/page'

const Blog = () => {
  return (
    <Page>
      <Wrapper>
        <img src="toolbox.svg" alt="Coming soon" />
      </Wrapper>
    </Page>
  )
}

export default Blog

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 25rem;
  }
`
