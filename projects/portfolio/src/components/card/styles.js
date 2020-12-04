import styled from '@nptech/theme-provider'

export const CardWrapper = styled.div`
  position: relative;

  overflow: hidden;
  border-radius: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${(props) => `url(${props.background})`};
    background-position: center 0%;
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(0.4);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 13%;
    left: 0;
    width: 100%;
    height: 15%;
    background: ${({ theme }) => theme.colors.highlight};
    transform: skewY(170deg);
    filter: brightness(0.8);
  }

  span {
    content: '';
    position: absolute;
    bottom: 16%;
    left: 0;
    width: 100%;
    transform: skewY(169.5deg);
    color: '#2c2f33';
    font-size: 3rem;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    z-index: 10;
  }
`
