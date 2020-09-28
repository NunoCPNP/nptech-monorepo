import styled from '@emotion/styled'

export const StyledAnchor = styled('a')`
  display: inline-block;
  text-decoration: none;
  padding: 0.4rem 1rem;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.highlight};
  border-radius: 1rem;
`

export const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 1.2rem;
    margin-right: 0.5rem;
  }
`
