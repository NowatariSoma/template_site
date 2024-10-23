// src/components/organisms/TeamSection.tsx
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const teamMembers = [
  { name: 'John Doe', position: 'CEO' },
  { name: 'Jane Smith', position: 'CTO' },
  { name: 'Tom Brown', position: 'Lead Developer' }
];

const TeamSection: React.FC = () => {
  return (
    <Grid container spacing={4}>
      {teamMembers.map((member, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5">{member.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {member.position}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamSection;
