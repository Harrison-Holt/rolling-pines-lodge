import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';
import critic from '../assets/food_critic.jpg'; 
import blogger from '../assets/blogger.jpg'; 
import planner from '../assets/planner.jpg'; 
import food_guy from '../assets/food_guy.jpg'; 
import food_blogger from '../assets/food_blogger.jpg'; 

const testimonials = [
  {
    name: 'John Doe',
    image: critic,
    title: 'Food Critic',
    review: 'The ambiance and cuisine at Rolling Pines Lodge are exceptional. A must-visit!',
  },
  {
    name: 'Jane Smith',
    image: blogger,
    title: 'Travel Blogger',
    review: 'An unforgettable dining experience nestled in nature. Highly recommend!',
  },
  {
    name: 'Michael Brown',
    title: 'Culinary Enthusiast',
    image: food_guy,
    review: 'A hidden gem with exquisite dishes and top-notch service. Will return soon!',
  },
  {
    name: 'Emily Davis',
    title: 'Event Planner',
    image: planner,
    review: 'Perfect venue for events with a delightful menu and serene environment.',
  },
  {
    name: 'David Wilson',
    title: 'Food Blogger',
    image: food_blogger,
    review: 'Innovative flavors and a cozy atmosphere. Rolling Pines Lodge stands out!',
  },
];

function Testimonials() {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#967988', color: '#f5f5f5' }}>
      <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 4 }}>
        What Our Guests Are Saying
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <Avatar
                    alt={testimonial.name}
                    src={testimonial.image}
                    sx={{ width: 56, height: 56, marginRight: 2 }}
                  />
                  <Box>
                    <Typography variant="h6">{testimonial.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.title}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  "{testimonial.review}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Testimonials;
