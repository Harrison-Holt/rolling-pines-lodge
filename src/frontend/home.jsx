import React from 'react';
import './home.css';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { Home, MenuBook } from '@mui/icons-material';
import logo from '../assets/Rolling_Pines_Lodge_Logo.png';
import hero_section_image from '../assets/Hero_Section_Background_Image.png'; 

function Homepage() {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#451a61', paddingLeft: 0, paddingRight: 0 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 0, paddingRight: 0 }}>
          {/* Left Section: Logo */}
          <Box
            component="img"
            src={logo}
            alt="Rolling Pines Lodge Logo"
            className="logo"
          />

          {/* Right Section: Navigation Links and Button */}
          <Box className="nav-links">
            <Button startIcon={<Home />} href="#" className="nav-button" sx={{ color: '#f5f5f5'}}>
              Home
            </Button>
            <Button startIcon={<MenuBook />} href="#" className="nav-button" sx={{ color: '#f5f5f5'}}>
              Menu
            </Button>
            <Button variant="contained" color="secondary" className="book-now-button" sx={{ color: '#f5f5f5'}}>
              Book Now
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Offset to prevent content from being hidden behind the AppBar */}
      <Toolbar />

      <Box
        className="hero-section"
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
          backgroundImage: `url(${hero_section_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h4">Welcome to Rolling Pines Lodge</Typography>
          <Typography variant="body1">Experience fine dining amidst nature's beauty.</Typography>
          <Button variant="contained"  sx={{ color: '#451a61'}}>
            Book A Table
          </Button>        
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds a dark overlay for better text readability
            zIndex: 0,
          }}
        />
      </Box>
    </>
  );
}

export default Homepage;
