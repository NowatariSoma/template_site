// src/components/pages/BusinessPage.tsx
import React from 'react';
import BusinessTemplate from '../templates/BusinessTemplate';
import BusinessSection from '../organisms/BusinessSection';
import TeamSection from '../organisms/TeamSection';

const BusinessPage: React.FC = () => {
  return (
    <BusinessTemplate>
      <h1>Welcome to Our Business</h1>
      <p>We provide the best solutions for your business needs!</p>
      
      <h2>Our Services</h2>
      <BusinessSection />
      
      <h2>Meet Our Team</h2>
      <TeamSection />
    </BusinessTemplate>
  );
};

export default BusinessPage;
