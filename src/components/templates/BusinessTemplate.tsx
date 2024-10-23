// src/components/templates/BusinessTemplate.tsx
import React from 'react';
import Header from '../organisms/Header';
import { Container, Box } from '@mui/material';

type BusinessTemplateProps = {
  children: React.ReactNode;
};

const BusinessTemplate: React.FC<BusinessTemplateProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg"> {/* display: block に変更 */}
        <Box sx={{ my: 4 }}>{children}</Box>
      </Container>
    </>
  );
};

export default BusinessTemplate;
