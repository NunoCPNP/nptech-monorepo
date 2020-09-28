import styled from '@emotion/styled'

export const Wrapper = styled.div`
  grid-column: 2 / 5;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .name {
    margin-bottom: 1.5rem;

    h2 {
      font-size: 4rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.highlight};
      font-weight: 700;
    }

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.highlight};
      text-transform: uppercase;
      padding: 0 0.2rem;
    }
  }

  h3 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    margin-top: 2rem;

    li {
      font-size: 1.3rem;
      margin-right: 1rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.dark};
      background-color: ${({ theme }) => theme.colors.highlight};
      border-radius: 0.8rem;
      padding: 0.3rem 1.2rem;
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: flex-start;
    margin-top: 4rem;
  }
`
