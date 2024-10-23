// src/components/organisms/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ top: 0, marginBottom: 0 }}> {/* 余計な余白を排除 */}
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Business
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
