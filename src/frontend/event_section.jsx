import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

const events = [
  {
    title: 'Live Jazz Night',
    date: 'March 25, 2025',
    description: 'Join us for an evening of live jazz music with renowned artists.',
  },
  {
    title: 'Spring Wine Tasting',
    date: 'April 10, 2025',
    description: 'Explore a selection of fine wines from local vineyards.',
  },
  // Add more events as needed
];

function UpcomingEvents() {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f9f9f9' }}>
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
