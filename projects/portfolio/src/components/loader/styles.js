import styled from '@emotion/styled'

export const Section = styled('section')`
  background-color: blue;
  height: 100vh;
  width: 100vw;
`

export const Wrapper = styled('div')`
  position: absolute;
  top: calc(50% - 2rem);
  left: calc(50% - 2rem);
  color: black;
`

const Shadow = styled('div')`
  width: 5rem;
  height: 5rem;
  background: #000;
  opacity: 0.1;
  position: absolute;
  top: 5.9rem;
  left: 0;
  border-radius: 50%;
  animation: shadow 0.5s linear infinite;

  @keyframes shadow {
    50% {
      transform: scale(1.2, 1);
    }
  }
`

const Box = styled('div')`
  width: 5rem;
  height: 5rem;
  background: yellow;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.3rem;
  animation: animate 0.5s linear infinite;

  @keyframes animate {
    17% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(9px) rotate(22.5deg);
    }
    50% {
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
    75% {
      transform: translateY(9px) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }
`
