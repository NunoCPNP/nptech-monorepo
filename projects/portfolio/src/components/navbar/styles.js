import styled from '@emotion/styled'

export const Wrapper = styled('nav')`
  z-index: 100;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.navbar};
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.3);
  transition: 0.3s ease background-color;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 120rem;
    margin: auto;
    height: 4.6rem;
    margin: auto;

    @media only screen and (max-width: 1200px) {
      padding: 0 1rem;
    }
  }

  .navbar-items {
    ul {
      display: flex;
    }

    li a {
      text-transform: uppercase;
      margin-left: 1.5rem;
      font-size: 1.4rem;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
    }

    .extra {
      background-color: ${({ theme }) => theme.colors.extraBBackground};
      color: ${({ theme }) => theme.colors.extraText};
      border-radius: 1rem;
      padding: 0.1rem 1.3rem;
      font-weight: 700;
    }

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`
