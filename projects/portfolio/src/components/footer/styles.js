import styled from '@emotion/styled'

export const Wrapper = styled('footer')`
  color: ${({ theme }) => theme.colors.footerColor};
  background-color: ${({ theme }) => theme.colors.footerBackground};
  text-align: center;
  text-transform: uppercase;
  padding: 2rem;

  span {
    font-size: 1.2rem;
    padding: 0.8rem;
  }
`
