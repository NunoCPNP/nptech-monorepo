import styled from '@nptech/theme-provider'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-self: center;
  text-align: end;

  h3 {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 3rem;
    font-weight: 700;
    display: block;

    span {
      background: ${({ theme }) => theme.colors.highlight};
      padding: 0.3rem 0.5rem;
      line-height: 1.7;
      white-space: break-spaces;
    }
  }

  h4 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    padding-top: 2rem;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`
