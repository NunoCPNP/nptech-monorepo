import styled from '@nptech/theme-provider'

export const CardWrapper = styled.div`
  position: relative;

  overflow: hidden;
  border-radius: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.highlight};
    transform: skewY(345deg);
  }
`
