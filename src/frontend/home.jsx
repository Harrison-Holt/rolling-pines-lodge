import React from 'react';
import { Card, CardContent, CardMedia, AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { Home, MenuBook } from '@mui/icons-material';
import { SwipeableViews } from 'react-swipeable-views-v18';
import logo from '../assets/Rolling_Pines_Lodge_Logo.png';
import hero_section_image from '../assets/Hero_Section_Background_Image.png';
import './home.css';

const menuItems = [
    {
      name: 'Grilled Salmon',
      description: 'Freshly grilled salmon with a side of vegetables.',
      image: 'path_to_grilled_salmon_image.jpg',
    },
    {
      name: 'Steak Frites',
      description: 'Juicy steak served with crispy fries.',
      image: 'path_to_steak_frites_image.jpg',
    },
  ];
  

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
              <Button startIcon={<Home />} href="#" className="nav-button" sx={{ color: '#f5f5f5' }}>
                Home
              </Button>
              <Button startIcon={<MenuBook />} href="#" className="nav-button" sx={{ color: '#f5f5f5' }}>
                Menu
              </Button>
              <Button variant="contained" color="secondary" className="book-now-button" sx={{ color: '#f5f5f5' }}>
                Book Now
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
  
        {/* Offset to prevent content from being hidden behind the AppBar */}
        <Toolbar />
  
        {/* Hero Section */}
        <Box
          className="hero-section"
          sx={{
            position: 'relative',
            height: '500px',
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
            <Button variant="contained" sx={{ backgroundColor: '#451a61', color: '#f5f5f5', marginTop: '25px' }}>
              Book A Table
            </Button>
          </Box>
        </Box>
  
        {/* Menu Carousel */}
        <Box sx={{ marginTop: '20px', padding: '0 20px' }}>
          <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '20px' }}>
            Featured Menu Items
          </Typography>
          <SwipeableViews enableMouseEvents>
            {menuItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '20px',
                  color: '#00000',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <Typography variant="h6" sx={{ marginTop: '10px' }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '5px', color: '#00000', }}>
                  {item.description}
                </Typography>
              </Box>
            ))}
          </SwipeableViews>
        </Box>
      </>
    );
  }
  
  export default Homepage;
  