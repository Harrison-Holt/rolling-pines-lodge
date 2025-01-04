import React from 'react';
import './home.css'; // Adjust the path as necessary
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { Home, MenuBook } from '@mui/icons-material';
import logo from '../assets/Rolling_Pines_Lodge_Logo.png';

function Homepage() {
  return (
    <>
    <Container className="body">
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
            <Button startIcon={<Home />} href="#" className="nav-button">
              Home
            </Button>
            <Button startIcon={<MenuBook />} href="#" className="nav-button">
              Menu
            </Button>
            <Button variant="contained" color="secondary" className="book-now-button">
              Book Now
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Offset to prevent content from being hidden behind the AppBar */}
      <Toolbar />

      {/* Main Content */}
      <Box className="main-content">
        <Typography variant="h4">Welcome to Rolling Pines Lodge</Typography>
        <Typography variant="body1">Experience fine dining amidst nature's beauty.</Typography>
      </Box>
      </Container>
    </>
  );
}

export default Homepage;
