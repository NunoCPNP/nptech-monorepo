import styled from '@emotion/styled'

const Blog = () => {
  return (
    <Wrapper>
      <img src="toolbox.svg" alt="Coming soon" />
    </Wrapper>
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
