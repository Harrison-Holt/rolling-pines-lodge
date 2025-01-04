import React from 'react';
import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';
import logo from '../assets/Rolling_Pines_Lodge_Logo.png';
import { Home, MenuBook } from '@mui/icons-material';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';

function Homepage() {
  return (
    <>
      {/* Full-Width Navbar */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#451a61',
          top: 0,
          width: '100%', // Ensure full width
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 4, // Padding for left/right
          }}
        >
          {/* Logo */}
          <Box
            component="div"
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
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              alignItems: 'center',
            }}
          >
            <Button
              startIcon={<Home />}
              href="#"
              sx={{
                color: '#f5f5f5',
                textTransform: 'none',
                fontSize: '1rem',
              }}
            >
              Home
            </Button>
            <Button
              startIcon={<MenuBook />}
              href="#"
              sx={{
                color: '#f5f5f5',
                textTransform: 'none',
                fontSize: '1rem',
              }}
            >
              Menu
            </Button>
            <Button
              startIcon={<TableRestaurantIcon />}
              href="#"
              sx={{
                color: '#f5f5f5',
                textTransform: 'none',
                fontSize: '1rem',
              }}
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
              fontWeight: 'bold',
            }}
          >
            Book Now
          </Button>
        </Toolbar>
      </AppBar>

      {/* Body Content */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4">Welcome to Rolling Pines Lodge</Typography>
        <Typography variant="body1">
          Experience fine dining amidst nature's beauty.
        </Typography>
      </Box>
    </>
  );
}

export default Homepage;
