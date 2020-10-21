import styled from '@emotion/styled'

export const Burger = styled.div`
  .burger {
    height: 3em;
    width: 3em;
    position: relative;
    font-size: 1rem;
    cursor: pointer;
  }

  .burger .burger-lines:after {
    left: 0;
    top: -1em;
  }

  .burger .burger-lines:before {
    left: 1em;
    top: 1em;
  }

  .burger:after {
    content: '';
    display: block;
    position: absolute;
    height: 150%;
    width: 150%;
    top: -25%;
    left: -25%;
  }

  .burger .burger-lines {
    top: 50%;
    margin-top: -0.125em;
  }

  .burger .burger-lines,
  .burger .burger-lines:after,
  .burger .burger-lines:before {
    pointer-events: none;
    display: block;
    content: '';
    width: 100%;
    border-radius: 0.25em;
    background-color: ${({ theme }) => theme.colors.white};
    height: 0.25em;
    position: absolute;
    transform: rotate(0);
  }

  .burger .burger-lines:after {
    left: 0;
    top: -1em;
  }

  .burger .burger-lines:before {
    left: 1em;
    top: 1em;
  }

  .burger.burger-squeeze .burger-lines,
  .burger.burger-squeeze .burger-lines:after,
  .burger.burger-squeeze .burger-lines:before {
    transition: 0.2s top 0.2s, 0.1s left, 0.2s transform, 0.4s background-color 0.2s;
  }

  .burger.burger-squeeze .burger-lines:after,
  .burger.burger-squeeze .burger-lines:before {
    width: 2em;
  }

  .burger.burger-squeeze.open .burger-lines,
  .burger.burger-squeeze.open .burger-lines:after,
  .burger.burger-squeeze.open .burger-lines:before {
    transition: 0.2s background-color, 0.2s top, 0.2s left, 0.2s transform 0.15s;
  }

  .burger.burger-squeeze.open .burger-lines {
    background-color: transparent;
  }

  .burger.burger-squeeze.open .burger-lines:before,
  .burger.burger-squeeze.open .burger-lines:after {
    left: 0.5em;
    top: 0px;
  }

  .burger.burger-squeeze.open .burger-lines:before {
    transform: rotate(-45deg);
  }

  .burger.burger-squeeze.open .burger-lines:after {
    transform: rotate(45deg);
  }

  @media only screen and (min-width: 769px) {
    display: none;
  }
`
