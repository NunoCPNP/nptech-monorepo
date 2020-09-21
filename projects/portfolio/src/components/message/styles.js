import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;

  h3 {
    text-align: center;
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
`
