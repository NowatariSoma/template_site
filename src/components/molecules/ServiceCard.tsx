// src/components/molecules/ServiceCard.tsx
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

type ServiceCardProps = {
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
