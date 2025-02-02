import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, Typography, Card, CardMedia, CardContent, Grid, Stack } from '@mui/material';
import { Home, MenuBook } from '@mui/icons-material';
import 'react-image-gallery/styles/css/image-gallery.css';
import logo from '../assets/Rolling_Pines_Lodge_Logo.png';
import heroSectionImage from '../assets/Hero_Section_Background_Image.png';
import pizzaImage from '../assets/pizza.png';
import chickenWafflesImage from '../assets/fried-chicken-waffles.png';
import birdDogsImage from '../assets/bird-dog.png';
import UpcomingEvents from './event_section'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Testimonials from './Review.jsx'; 

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
        <AppBar position="fixed" sx={{ backgroundColor: '#451a61'}}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            {/* Left Section: Logo */}
            <Box
              component="img"
              src={logo}
              alt="Rolling Pines Lodge Logo"
              sx={{ height: 100, width: 100, }}
            />
  
            {/* Right Section: Navigation Links and Button */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button startIcon={<Home />} component={RouterLink} to="/" sx={{ color: '#f5f5f5', textTransform: 'none' }}>
                Home
              </Button>
              <Button startIcon={<MenuBook />} component={RouterLink} to="/Menu" sx={{ color: '#f5f5f5', textTransform: 'none' }}>
                Menu
              </Button>
              <Button startIcon={<ShoppingCartIcon />} component={RouterLink} to="/Cart" sx={{ color: '#f5f5f5', textTransform: 'none' }}>
                Your Cart
              </Button>
              <Button startIcon={<AccountCircleIcon />} component={RouterLink} to="/Cart" sx={{ color: '#f5f5f5', textTransform: 'none' }}>
                Sign In
              </Button>
              <Button variant="contained" color="secondary" sx={{ textTransform: 'none', fontWeight: 'bold', color: '#f5f5f5' }}>
                Book Now
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
  
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
          <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 4, marginTop: 5}}>
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
          
        <Testimonials/>
          
        <AppBar position="static" sx={{ backgroundColor: '#231F20' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ color: '#f5f5f5', padding: 2, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
            
      {/* Address Section */}
      <Stack spacing={1} sx={{ marginBottom: 4, marginRight: 5 }}>
        <Typography variant="h5">Address</Typography>
        <Typography variant="body1" component="a" href="#">1234 Woodland Retreat Drive, Whispering Pines, CA 90210</Typography>
        <Typography variant="body1">(555) 123-4567</Typography>
        <Typography variant="body1" component="a" href="mailto:info@rollingpineslodge.com">info@rollingpineslodge.com</Typography>
      </Stack>

      {/* Operating Hours Section */}
      <Stack spacing={1} sx={{ marginBottom: 4, marginRight: 5}}>
        <Typography variant="h5">Operating Hours</Typography>
        <Typography variant="body1">Monday to Friday: 11:00 AM - 10:00 PM</Typography>
        <Typography variant="body1">Saturday and Sunday: 11:00 AM - 11:00 PM</Typography>
      </Stack>

      {/* Social Media Section */}
      <Stack spacing={1}>
        <Typography variant="h5">Social Media</Typography>
        <Typography variant="body1" component="a" href="https://www.facebook.com/">Facebook: @rollpineslodge</Typography>
        <Typography variant="body1" component="a" href="https://www.instagram.com/">Instagram: @rollingpineslodge</Typography>
        <Typography variant="body1" component="a" href="https://www.twitter.com/">Twitter: @rollpineslodge</Typography>
      </Stack>
    </Box>
        </Toolbar>
      </AppBar>
      </>
    );
  }
  
  export default Homepage;
