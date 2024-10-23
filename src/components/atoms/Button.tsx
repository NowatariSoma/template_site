// src/components/atoms/Button.tsx
import { Button as MUIButton } from '@mui/material';
import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <MUIButton variant="contained" onClick={onClick}>
      {label}
    </MUIButton>
  );
};

export default Button;
