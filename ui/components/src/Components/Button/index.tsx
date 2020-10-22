import React from "react"

import { Container } from './styles';

export interface Props {
  /**
   * Background Color
   */
  backgroundColor?: string;
  /**
   * Text Color
   */
  color?: string;
  /**
   * Outline Color
   */
  outlined?: boolean;
  /**
   * OnClick Function
   */
  onClick?: () => void;
  /**
   * Button disable
   */
  disabled?: boolean;
}

const ButtonWrapper: React.FC<Props> = ({
  children,
  backgroundColor = '#7159c1',
  color = '#fff',
  outlined = false,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      {...props}
    >
      {children}
    </Container>
  );
};

export { ButtonWrapper as Button };