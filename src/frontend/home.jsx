import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Home, MenuBook } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views-v18';

// Sample images for demonstration purposes
import logo from './assets/Rolling_Pines_Lodge_Logo.png';
import heroSectionImage from './assets/Hero_Section_Background_Image.png';
import dish1Image from './assets/dish1.jpg';
import dish2Image from './assets/dish2.jpg';
import dish3Image from './assets/dish3.jpg';

const menuItems = [
  {
    name: 'Grilled Salmon',
    description: 'Freshly grilled salmon with a side of vegetables.',
    image: dish1Image,
  },
  {
    name: 'Steak Frites',
    description: 'Juicy steak served with crispy fries.',
    image: dish2Image,
  },
  {
    name: 'Vegan Delight',
    description: 'A delightful mix of fresh vegetables and grains.',
    image: dish3Image,
  },
];

function MenuCard({ item }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt={item.name}
        sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
      />
      <CardContent sx={{ backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          {item.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2, backgroundColor: '#451a61' }}
        >
          Order Now
        </Button>
      </CardContent>
    </Card>
  );
}

function SwipeableMenu() {
  return (
    <SwipeableViews enableMouseEvents>
      {menuItems.map((item, index) => (
        <Box key={index} sx={{ padding: 2 }}>
          <MenuCard item={item} />
        </Box>
      ))}
    </SwipeableViews>
  );
}

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

      {/* Swipeable Menu Section */}
      <Box sx={{ padding: 2, backgroundColor: '#fff' }}>
        <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
          Featured Dishes
        </Typography>
        <SwipeableMenu />
      </Box>
    </>
  );
}

export default Homepage;

  