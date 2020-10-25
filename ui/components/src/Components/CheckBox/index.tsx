import React, { forwardRef } from 'react';

import { Label, Box, Mark } from './styles';

interface Props {
  label: string;
  name: string;
  value: any;
  color?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  readOnly?: boolean;
  onChange?: () => void;
}

export interface ILabel {
  color?: string;
}

export interface IBox {
  ref: any;
}

export const CheckBox = forwardRef<HTMLInputElement, Props>(
  ({ label, name, value, color = '#f9bf3b', ...props }, ref) => {
    const { readOnly, onChange } = props;

    return (
      <Label
        onClick={readOnly ? () => {} : onChange}
        htmlFor={name}
        color={color}
      >
        {label}
        <Box {...props} ref={ref} name={name} value={value} />
        <Mark />
      </Label>
    );
  }
);