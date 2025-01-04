import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import { Home, MenuBook } from '@mui/icons-material';
import 'react-image-gallery/styles/css/image-gallery.css';

import logo from '../assets/Rolling_Pines_Lodge_Logo.png';
import heroSectionImage from '../assets/Hero_Section_Background_Image.png';

const featuredDishes = [
    {
      title: 'Grilled Salmon',
      description: 'Freshly grilled salmon with a side of vegetables.',
    },
    {
      title: 'Steak Frites',
      description: 'Juicy steak served with crispy fries.',
    },
    {
      title: 'Vegan Delight',
      description: 'A delightful mix of fresh vegetables and grains.',
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
              sx={{ height: 100, width: 100, marginLeft: 0 }}
            />
  
            {/* Right Section: Navigation Links and Button */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button startIcon={<Home />} href="#" sx={{ color: '#f5f5f5', textTransform: 'none' }}>
                Home
              </Button>
              <Button startIcon={<MenuBook />} href="#" sx={{ color: '#f5f5f5', textTransform: 'none' }}>
                Menu
              </Button>
              <Button variant="contained" color="secondary" sx={{ textTransform: 'none', fontWeight: 'bold', color: '#f5f5f5' }}>
                Book Now
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
  
        {/* Offset to prevent content from being hidden behind the AppBar */}
        <Toolbar />
  
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            height: '500px',
            width: '100vw',
            backgroundImage: `url(${heroSectionImage})`,
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
  
        {/* Featured Dishes Section */}
        <Box sx={{ padding: 4, backgroundColor: '#967988' }}>
          <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 4 }}>
            Featured Dishes
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {featuredDishes.map((dish, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={dish.image}
                    alt={dish.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {dish.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {dish.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </>
    );
  }
  
  export default Homepage;