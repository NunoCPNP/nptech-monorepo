import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-self: center;
  text-align: end;

  h3 {
    color: ${({ theme }) => theme.colors.messageColor};
    font-size: 3vw;
    font-weight: 700;
    display: block;

    span {
      background: ${({ theme }) => theme.colors.messageBackground};
      padding: 0.3rem 0.5rem;
      line-height: 1.7;
      white-space: break-spaces;
    }
  }

  h4 {
    font-size: 1vw;
    color: white;
    text-transform: uppercase;
    padding-top: 2rem;
  }
`
