// src/components/atoms/Typography.tsx
import React from 'react';
import { Typography as MUITypography } from '@mui/material';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption';
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  return <MUITypography variant={variant}>{children}</MUITypography>;
};

export default Typography;
