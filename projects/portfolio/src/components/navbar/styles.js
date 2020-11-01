import styled from '@nptech/theme-provider'

export const Wrapper = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
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
      color: ${({ theme }) => theme.colors.white};
      transition: 0.2s ease-out color;

      :hover {
        color: ${({ theme }) => theme.colors.highlight};
      }
    }

    .extra {
      background-color: ${({ theme }) => theme.colors.highlight};
      color: ${({ theme }) => theme.colors.dark};
      border-radius: 1rem;
      padding: 0.1rem 1.3rem;
      font-weight: 700;

      :hover {
        color: ${({ theme }) => theme.colors.dark};
      }
    }

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`

export const Logo = styled.div`
  width: 4rem;
`
