import React from "react"

import { Container } from './styles';

export interface Props {
  backgroundColor?: string;
  color?: string;
  outlinedColor?: string;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  backgroundColor = '#f9bf3b',
  color = '#2c2f33',
  outlinedColor = '#fefffc',
  outlined = false,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      outlinedColor={outlinedColor}
      {...props}
    >
      {children}
    </Container>
  );
};