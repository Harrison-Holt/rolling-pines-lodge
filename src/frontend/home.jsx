import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { Home, MenuBook } from '@mui/icons-material';
import logo from '../assets/Rolling_Pines_Lodge_Logo.png';

function Homepage() {
  return (
    <>
    <Container sx={{ backgroundColor: '967988'}}>
      <AppBar position="fixed" sx={{ backgroundColor: '#451a61' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Rolling Pines Lodge Logo"
            sx={{ height: '100px', width: '100px' }}
          />

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 3 }}>
            <Button startIcon={<Home />} href="#" sx={{ color: '#f5f5f5', textTransform: 'none' }}>
              Home
            </Button>
            <Button startIcon={<MenuBook />} href="#" sx={{ color: '#f5f5f5', textTransform: 'none' }}>
              Menu
            </Button>
          </Box>

          {/* Call-to-Action Button */}
          <Button variant="contained" color="secondary" sx={{ textTransform: 'none', fontWeight: 'bold' }}>
            Book Now
          </Button>
        </Toolbar>
      </AppBar>

      {/* Offset to prevent content from being hidden behind the AppBar */}
      <Toolbar />

      {/* Main Content */}
      <Box sx={{ textAlign: 'center', mt: 4, minHeight: '100vh'}}>
        <Typography variant="h4">Welcome to Rolling Pines Lodge</Typography>
        <Typography variant="body1">Experience fine dining amidst nature's beauty.</Typography>
      </Box>
      <AppBar position="fixed" sx={{ backgroundColor: '#451a61' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Rolling Pines Lodge Logo"
            sx={{ height: '100px', width: '100px' }}
          />

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 3 }}>
            <Button startIcon={<Home />} href="#" sx={{ color: '#f5f5f5', textTransform: 'none' }}>
              Home
            </Button>
            <Button startIcon={<MenuBook />} href="#" sx={{ color: '#f5f5f5', textTransform: 'none' }}>
              Menu
            </Button>
          </Box>

          {/* Call-to-Action Button */}
          <Button variant="contained" color="secondary" sx={{ textTransform: 'none', fontWeight: 'bold' }}>
            Book Now
          </Button>
        </Toolbar>
      </AppBar>
      </Container>
    </>
  );
}

export default Homepage;
