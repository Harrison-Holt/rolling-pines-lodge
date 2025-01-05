import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import 'add-to-calendar-button-react/dist/styles.css'; 
import jazz_photo from '../assets/jazz.jpg';
import wine_photo from '../assets/wine.jpg';

const events = [
  {
    image: jazz_photo,
    title: 'Live Jazz Night',
    date: '2025-03-25',
    time: '20:00',
    description: 'Join us for an evening of live jazz music with renowned artists.',
    location: 'Rolling Pines Lodge, Whispering Pines, CA',
  },
  {
    image: wine_photo,
    title: 'Spring Wine Tasting',
    date: '2025-04-10',
    time: '18:00',
    description: 'Explore a selection of fine wines from local vineyards.',
    location: 'Rolling Pines Lodge, Whispering Pines, CA',
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
                  {new Date(event.date).toLocaleDateString()} at {event.time}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
                <AddToCalendarButton
                  name={event.title}
                  startDate={event.date}
                  startTime={event.time}
                  description={event.description}
                  location={event.location}
                  options={['Apple', 'Google', 'iCal', 'Outlook.com', 'Microsoft365', 'Yahoo']}
                  timeZone="America/Los_Angeles"
                  buttonStyle="default"
                  listStyle="dropdown"
                  label="Add to Calendar"
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default UpcomingEvents;
