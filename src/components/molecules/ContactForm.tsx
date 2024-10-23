// src/components/molecules/ContactForm.tsx
import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import Button from '../atoms/Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted: ', formData);
  };

  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Name" name="name" value={formData.name} onChange={handleChange} />
      <TextField label="Email" name="email" value={formData.email} onChange={handleChange} />
      <TextField label="Message" name="message" multiline rows={4} value={formData.message} onChange={handleChange} />
      <Button label="Submit" onClick={handleSubmit} />
    </Box>
  );
};

export default ContactForm;
