import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import { Home, MenuBook } from '@mui/icons-material';
import 'react-image-gallery/styles/css/image-gallery.css';
import logo from '../assets/Rolling_Pines_Lodge_Logo.png';
import heroSectionImage from '../assets/Hero_Section_Background_Image.png';
import pizzaImage from '../assets/pizza.png';
import chickenWafflesImage from '../assets/fried-chicken-waffles.png';
import birdDogsImage from '../assets/bird-dog.png';
import UpcomingEvents from './event_section'; 
import PhoneIcon from '@mui/icons-material/Phone';
import InfoIcon from '@mui/icons-material/Info';
import './home.css'; 

const featuredDishes = [
    {
      image: chickenWafflesImage,
      title: 'Chicken & Waffles',
      description: 'Crispy fried chicken served atop fluffy waffles, drizzled with maple syrup for a perfect blend of sweet and savory.',
    },
    {
      image: birdDogsImage,
      title: 'Bird Dogs',
      description: 'Juicy chicken tenders nestled in a soft bun, topped with cheese and honey mustard, offering a delightful twist on the classic hot dog.',
    },
    {
      image: pizzaImage,
      title: 'Meatball Pizza',
      description: 'A hearty pizza topped with savory meatballs, marinara sauce, and a blend of mozzarella and parmesan cheeses.',
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
            <Button variant="contained" color="secondary" sx={{ color: '#f5f5f5', marginTop: '25px' }}>
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
                <Card sx={{ maxWidth: 345, margin: 'auto'}} className='card'>
                  <CardMedia
                    component="img"
                    height="200"
                    image={dish.image}
                    alt={dish.title}
                  />
                  <CardContent sx={{display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
                    <Typography gutterBottom variant="h6" component="div">
                      {dish.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {dish.description}
                    </Typography>
                    <Button variant="contained" color="secondary" sx={{ color: '#f5f5f5', marginTop: '25px' }}>
                        Add To Cart
                     </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <UpcomingEvents />
        <AppBar sx={{ backgroundColor: '#231F20', paddingLeft: 0, paddingRight: 0 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 0, paddingRight: 0 }}>
  
            {/* Right Section: Navigation Links and Button */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button startIcon={<PhoneIcon />} href="#" sx={{ color: '#f5f5f5', textTransform: 'none' }}>
                Contact Us
              </Button>
              <Button startIcon={<InfoIcon />} href="#" sx={{ color: '#f5f5f5', textTransform: 'none' }}>
                About Us
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </>
    );
  }
  
  export default Homepage;