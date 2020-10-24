import styled from '@emotion/styled'

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.highlight};
  text-transform: uppercase;
  font-size: 1.2rem;
  padding: 0.6rem 3.5rem;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  font-weight: 700;
  background-color: transparent;
  text-decoration: none;
  transition: border 0.4s ease-out;

  &:hover {
    border-top: 1px solid ${({ theme }) => theme.colors.highlight};
    border-bottom: 1px solid ${({ theme }) => theme.colors.highlight};
  }

  &:focus {
    outline: none;
    border-top: 1px solid ${({ theme }) => theme.colors.highlight};
    border-bottom: 1px solid ${({ theme }) => theme.colors.highlight};
  }

  .svg {
    width: 12px;
    fill: ${({ theme }) => theme.colors.highlight};
    margin-right: 0.8rem;
  }
`
