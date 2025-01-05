import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import jazz_photo from '../assets/jazz.jpg'; 
import wine_photo from '../assets/wine.jpg'; 

const events = [
  {
    image: jazz_photo,
    title: 'Live Jazz Night',
    date: 'March 25, 2025',
    description: 'Join us for an evening of live jazz music with renowned artists.',
  },
  {
    image: wine_photo, 
    title: 'Spring Wine Tasting',
    date: 'April 10, 2025',
    description: 'Explore a selection of fine wines from local vineyards.',
  },
];

function UpcomingEvents() {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#967988' }}>
      <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 4 }}>
        Upcoming Events
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {events.map((event, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={event.image}
                alt={event.title}
              />
              <CardContent>
                <Typography variant="h6">{event.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default UpcomingEvents;
