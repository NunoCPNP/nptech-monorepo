import styled from '@emotion/styled'

export const StyledAnchor = styled('a')`
  display: inline-block;
  text-decoration: none;
  padding: 0.2rem 1rem;
  color: ${({ theme }) => theme.colors.anchorButtonText};
  font-size: 1.2rem;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.anchorButtonBackground};
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
