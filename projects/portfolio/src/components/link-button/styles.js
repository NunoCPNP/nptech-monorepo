import styled from '@emotion/styled'

export const Button = styled('button')`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  width: 15rem;
  height: auto;

  .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: ${({ theme }) => theme.colors.linkButtonBackground};
    border-radius: 1.625rem;
  }

  .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: white;
  }

  .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  .circle .icon.arrow::before {
    position: absolute;
    content: '';
    top: -0.25rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid darkBlue;
    border-right: 0.125rem solid darkBlue;
    transform: rotate(45deg);
  }

  .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.5rem 0;
    margin: 0 0 0 1.85rem;
    color: ${({ theme }) => theme.colors.linkButtonText};
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  :hover .circle {
    width: 100%;
  }

  :hover .circle .icon.arrow {
    background: ${({ theme }) => theme.colors.linkButtonTextHover}
    transform: translate(1rem, 0);
  }

  :hover .button-text {
    color: ${({ theme }) => theme.colors.linkButtonTextHover}
  }
`
