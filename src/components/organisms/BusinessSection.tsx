// src/components/organisms/BusinessSection.tsx
import React from 'react';
import { Box } from '@mui/material';
import ServiceCard from '../molecules/ServiceCard';

const BusinessSection: React.FC = () => {
  const services = [
    { title: 'Web Development', description: 'Creating modern and responsive websites.' },
    { title: 'App Development', description: 'Building scalable mobile applications.' },
    { title: 'SEO Optimization', description: 'Improving website visibility on search engines.' }
  ];

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-between">
      {services.map((service, index) => (
        <Box key={index} width={{ xs: '100%', md: '30%' }} mb={4}>
          <ServiceCard title={service.title} description={service.description} />
        </Box>
      ))}
    </Box>
  );
};

export default BusinessSection;
