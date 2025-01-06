import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, Typography, Card, CardMedia, CardContent, Grid, Stack, Link } from '@mui/material';
import { Home, MenuBook } from '@mui/icons-material';
import 'react-image-gallery/styles/css/image-gallery.css';
import logo from '../assets/Rolling_Pines_Lodge_Logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './home.css'; 
  

function Cart() {

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {

        setCartItems((prevItems) => {
          const existingItem = prevItems.find((item) => item.id === product.id);
          if (existingItem) {
            return prevItems.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            return [...prevItems, { ...product, quantity: 1 }];
          }
        });
      };

      const handleRemoveFromCart = (productId) => {
        setCartItems((prevItems) =>
          prevItems.reduce((acc, item) => {
            if (item.id === productId) {
              if (item.quantity === 1) return acc;
              return [...acc, { ...item, quantity: item.quantity - 1 }];
            } else {
              return [...acc, item];
            }
          }, [])
        );
      };

      const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
      };

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
  
        <Box sx={{ padding: 4, height: '100vh', color: '#f5f5f5'}}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="body1">
                    Quantity: {item.quantity}
                  </Typography>
                  <Typography variant="body1">
                    Price: ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add More
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
            <Typography variant="h5" sx={{ marginTop: 2 }}>
            Total: ${calculateTotal()}
            </Typography>;
        </Grid>
      )}
    </Box>
       
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
  
  export default Cart;