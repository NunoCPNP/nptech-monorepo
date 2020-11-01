import styled from '@nptech/theme-provider'

export const Wrapper = styled.div`
  display: grid;
  padding: 0 3rem;

  h2 {
    position: relative;
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.2rem;
    text-shadow: 0px 2px 2px black;
    letter-spacing: 1px;
    padding: 0 0.5rem;
    z-index: 2;
  }

  span {
    position: relative;
  }

  span::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0.1rem;
    left: 0;
    height: 1.1rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.highlight};
    z-index: 1;
    border-radius: 0.2rem;
  }

  h4 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.8rem;
    padding-top: 0.2rem;
    padding-left: 0.5rem;
  }
`
