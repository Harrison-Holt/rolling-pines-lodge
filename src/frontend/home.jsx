import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { Home, MenuBook } from '@mui/icons-material';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import logo from '../assets/Rolling_Pines_Lodge_Logo.png';

function Homepage() {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#451a61' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Rolling Pines Lodge Logo"
            sx={{ height: '75px', width: 'auto' }}
          />

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button startIcon={<Home />} href="#" sx={{ color: '#f5f5f5', textTransform: 'none' }}>
              Home
            </Button>
            <Button startIcon={<MenuBook />} href="#" sx={{ color: '#f5f5f5', textTransform: 'none' }}>
              Menu
            </Button>
            <Button startIcon={<TableRestaurantIcon />} href="#" sx={{ color: '#f5f5f5', textTransform: 'none' }}>
              Reservations
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
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4">Welcome to Rolling Pines Lodge</Typography>
        <Typography variant="body1">Experience fine dining amidst nature's beauty.</Typography>
      </Box>
    </>
  );
}

export default Homepage;
