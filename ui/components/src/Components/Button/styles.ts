import styled from '@emotion/styled';

import { Props } from './index';

export const Container = styled.button<Props>`
  background-color: ${(props) => props.outlined ? 'transparent' : props.backgroundColor};
  color: ${(props) => props.outlined ? props.outlinedColor : props.color};
  padding: 18px 45px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 4px;
  border: ${(props) => props.outlined ? `2px solid ${props.backgroundColor}` : 'none'};
  cursor: pointer;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    border-color: transparent;
    background-color: ${(props) => props.outlined ? props.backgroundColor : props.backgroundColor};
  }
  
  :active:not(:disabled) {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    background-color: ${({ backgroundColor }: Props) => backgroundColor};
  }
`;