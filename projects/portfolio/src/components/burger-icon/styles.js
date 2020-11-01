import styled from '@nptech/theme-provider'

export const Icon = styled.div`
  font-size: 50%;
  width: 6em;
  height: 4.5em;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 0.6em;
    width: 50%;
    background: ${({ theme }) => theme.colors.white};
    opacity: 1;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  span:nth-of-type(even) {
    left: 50%;
    border-radius: 0 0.9em 0.9em 0;
  }

  span:nth-of-type(odd) {
    left: 0em;
    border-radius: 0.9em 0 0 0.9em;
  }

  span:nth-of-type(1),
  span:nth-of-type(2) {
    top: 0em;
  }

  span:nth-of-type(3),
  span:nth-of-type(4) {
    top: 1.8em;
  }

  span:nth-of-type(5),
  span:nth-of-type(6) {
    top: 3.6em;
  }

  &.open span:nth-of-type(1),
  &.open span:nth-of-type(6) {
    transform: rotate(45deg);
  }

  &.open span:nth-of-type(2),
  &.open span:nth-of-type(5) {
    transform: rotate(-45deg);
  }

  &.open span:nth-of-type(1) {
    left: 0.5em;
    top: 0.7em;
  }

  &.open span:nth-of-type(2) {
    left: calc(50% - 0.5em);
    top: 0.7em;
  }

  &.open span:nth-of-type(3) {
    left: -50%;
    opacity: 0;
  }

  &.open span:nth-of-type(4) {
    left: 100%;
    opacity: 0;
  }

  &.open span:nth-of-type(5) {
    left: 0.5em;
    top: 2.9em;
  }

  &.open span:nth-of-type(6) {
    left: calc(50% - 0.5em);
    top: 2.9em;
  }

  @media only screen and (min-width: 769px) {
    display: none;
  }
`
