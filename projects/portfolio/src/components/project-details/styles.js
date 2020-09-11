import styled from '@emotion/styled'

export const Wrapper = styled('div')`
  grid-column: 2 / 5;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .name {
    margin-bottom: 2rem;

    h2 {
      font-size: 2.7vw;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.projectTitle};
    }

    span {
      font-size: 1vw;
      color: white;
      text-transform: uppercase;
      padding-left: 0.2rem;
    }
  }

  h3 {
    font-size: 1vw;
    color: ${({ theme }) => theme.colors.projectText};
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    margin-top: 2rem;

    li {
      font-size: 0.8vw;
      margin-right: 1rem;
      color: ${({ theme }) => theme.colors.projectTechText};
      background-color: ${({ theme }) => theme.colors.projectTechBackground};
      border-radius: 0.8rem;
      padding: 0.1rem 1rem;
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
  }
`
