import React from 'react';
import './home.css';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { Home, MenuBook } from '@mui/icons-material';
import logo from '../assets/Rolling_Pines_Lodge_Logo.png';
import hero_section_image from '../assets/Hero_Section_Background_Image.png'; 

function Homepage() {
  return (
    <>
      <AppBar position="fixed" className="app-bar">
        <Toolbar className="toolbar">
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

      {/* Main Content */}
      <Box className="main-content"
      component="img"
      src={hero_section_image}
      backgroundSize= 'cover'
      backgroundPosition='center'
      >
        <Typography variant="h4">Welcome to Rolling Pines Lodge</Typography>
        <Typography variant="body1">Experience fine dining amidst nature's beauty.</Typography>
      </Box>
    </>
  );
}

export default Homepage;
