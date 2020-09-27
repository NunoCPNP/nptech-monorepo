import styled from '@emotion/styled'
import { yellow, lightGrey } from '@nptech/styles'

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${yellow};
  text-transform: uppercase;
  font-size: 1.2rem;
  padding: 0.6rem 3.5rem;
  border: none;
  border-top: 1px solid ${lightGrey};
  border-bottom: 1px solid ${lightGrey};
  font-weight: 700;
  background-color: transparent;
  text-decoration: none;
  transition: border 0.4s ease-out;

  &:hover {
    border-top: 1px solid ${yellow};
    border-bottom: 1px solid ${yellow};
  }

  &:focus {
    outline: none;
    border-top: 1px solid ${yellow};
    border-bottom: 1px solid ${yellow};
  }

  .svg {
    width: 12px;
    fill: ${yellow};
    margin-right: 0.8rem;
  }
`
