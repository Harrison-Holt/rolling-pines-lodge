import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, Typography, Card, CardMedia, CardContent, Grid, Stack, Link } from '@mui/material';
import { Home, MenuBook } from '@mui/icons-material';
import 'react-image-gallery/styles/css/image-gallery.css';
import logo from '../assets/Rolling_Pines_Lodge_Logo.png';
import pizzaImage from '../assets/pizza.png';
import chickenWafflesImage from '../assets/fried-chicken-waffles.png';
import birdDogsImage from '../assets/bird-dog.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './home.css'; 

const menuItems = {
    Burgers: [
      { name: 'Cheeseburger', price: 7.99 },
      { name: 'Bacon Burger', price: 8.99 },
      { name: 'Mushroom Burger', price: 8.99 },
      { name: 'Turkey Burger', price: 7.99 },
      { name: 'Veggie Burger', price: 9.99 }
    ],
    Pasta: [
      { name: 'Spaghetti', price: 10.99 },
      { name: 'Lasagna', price: 9.99 },
      { name: 'Ravioli', price: 8.99 },
      { name: 'Rigatoni', price: 10.99 }
    ],
    Sides: [
      { name: 'Mac & Cheese', price: 3.99 },
      { name: 'French Fries', price: 2.99 },
      { name: 'Baked Potato', price: 3.99 },
      { name: 'Corn on the Cob', price: 1.99 },
      { name: 'Baked Beans', price: 2.99 },
      { name: 'Bread', price: 1.99 }
    ],
    Pizza: [
      { name: 'Cheese', price: 7.99 },
      { name: 'Pepperoni', price: 8.99 },
      { name: 'Sausage', price: 8.99 },
      { name: 'Meatball', price: 8.99 },
      { name: 'Ham', price: 8.99 },
      { name: 'Two Topping', price: 12.99 },
      { name: 'Three Topping', price: 14.99 }
    ],
    Drinks: [
      { name: 'Sodas', price: 1.99 },
      { name: 'Milkshake', price: 3.99 }
    ],
    Chicken: [
      { name: 'Chicken Tenders', price: 8.99 },
      { name: 'Chicken & Waffles', price: 10.99 },
      { name: 'Crispy Chicken Sandwich', price: 7.99 },
      { name: 'Grilled Chicken Sandwich', price: 8.99 }
    ],
    'Bird Dogs': [
      { name: 'Single', price: 7.99 },
      { name: 'Double', price: 10.99 },
      { name: 'Triple', price: 14.99 }
    ]
  };
  
  
  
  function Menu() {
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
  
      {/* Offset to prevent content from being hidden behind the AppBar */}
          <Toolbar />

              {/* Menu Sections */}
      <Box sx={{ padding: 4, backgroundColor: '#967988', color: '#f5f5f5' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
          Our Menu
        </Typography>
        {Object.entries(menuItems).map(([category, items]) => (
          <Box key={category} sx={{ marginBottom: 4 }}>
            <Typography variant="h5" sx={{ marginBottom: 2, textAlign: 'center', textDecoration: 'underline' }}>
              {category}
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {items.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ textAlign: 'center' }}>{item.name}</Typography>
                      <Typography variant="body1" sx={{ textAlign: 'center', color: '#333' }}>
                        ${item.price.toFixed(2)}
                      </Typography>
                      <Button variant="contained" color="secondary" sx={{ marginTop: '15px', display: 'block', margin: '0 auto' }}>
                        Add To Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>

        <AppBar position="static" sx={{ backgroundColor: '#231F20', width: '100%'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ color: '#f5f5f5', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
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
  
  export default Menu;