// src/components/atoms/InputField.tsx
import React from 'react';
import { TextField } from '@mui/material';

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange }) => {
  return <TextField label={label} name={name} value={value} onChange={onChange} fullWidth />;
};

export default InputField;
