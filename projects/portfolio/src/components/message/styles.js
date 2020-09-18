import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;

  h3 {
    text-align: center;
    color: ${({ theme }) => theme.colors.messageColor};
    font-size: 3vw;
    font-weight: 700;
    display: block;

    span {
      background: ${({ theme }) => theme.colors.messageBackground};
      padding: 0 1rem;
    }
  }
`
