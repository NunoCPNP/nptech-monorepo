import styled from '@emotion/styled'

export const Wrapper = styled.div`
  grid-column: 1 /4;
  display: flex;
  line-height: 3rem;

  p {
    color: white;
    font-size: 2rem;
    padding-bottom: 1.6rem;
  }

  .styled {
    position: relative;
    text-shadow: 0px 2px 2px ${({ theme }) => theme.colors.dark};
    padding: 0 0.2rem;
    z-index: 1;
  }

  .styled::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    height: 1.1rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.highlight};
    z-index: -1;
    border-radius: 0.2rem;
  }
`
