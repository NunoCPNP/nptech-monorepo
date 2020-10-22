import React from "react"

interface Props {
  backgroundColor?: string;
  color?: string;
}

export const Button: React.FC<Props> = ({
  children,
  backgroundColor = '#7159C1',
  color = '#FFF'
}) => {
  return <button>{children}</button>
};