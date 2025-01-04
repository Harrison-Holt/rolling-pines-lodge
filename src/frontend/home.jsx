import React from 'react';
import { AppBar, Container, Box, Typography, Toolbar, Button, IconButton } from '@mui/material';
import logo from '../assets/Rolling_Pines_Lodge_Logo.png';
import { Home, MenuBook } from '@mui/icons-material';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';

function Homepage() {
  return (
    <Container disableGutters maxWidth="xl" className='body'>
      {/* Top Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#451a61' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo Section */}
          <Box
            sx={{
              height: '75px',
              width: '75px',
              backgroundImage: `url(${logo})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />

          {/* Navigation Links */}
          <Box sx={{
            display: 'flex',
            gap: 3,
            alignItems: 'center'
          }}>
            <Button
              startIcon={<Home />}
              href="#"
              sx={{ color: '#f5f5f5', textTransform: 'none', fontSize: '1rem' }}
            >
              Home
            </Button>

            <Button
              startIcon={<MenuBook />}
              href="#"
              sx={{ color: '#f5f5f5', textTransform: 'none', fontSize: '1rem' }}
            >
              Menu
            </Button>

            <Button
              startIcon={<TableRestaurantIcon />}
              href="#"
              sx={{ color: '#f5f5f5', textTransform: 'none', fontSize: '1rem' }}
            >
              Reservations
            </Button>
          </Box>

          {/* Call-to-Action Button */}
          <Button
            variant="contained"
            color="secondary"
            sx={{
              textTransform: 'none',
              fontWeight: 'bold'
            }}
          >
            Book Now
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Homepage;
