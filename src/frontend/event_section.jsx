import React, { useState } from 'react';
import { Box, Button, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import jazz_photo from '../assets/jazz.jpg';
import wine_photo from '../assets/wine.jpg';
import './home.css'; 
import summer_solstice_photo from '../assets/summer_solstice_photo.jpeg'; 
import cooking_workshop_photo from '../assets/cooking_workshop_photo.jpg'; 
import movie_night_photo from '../assets/movie_night_photo.jpg'; 

const events = [
  {
    image: jazz_photo,
    title: 'Live Jazz Night',
    date: '2025-03-25',
    time: '8:00pm',
    description: 'Join us for an evening of live jazz music with renowned artists.',
    location: 'Rolling Pines Lodge, Whispering Pines, CA',
  },
  {
    image: wine_photo,
    title: 'Spring Wine Tasting',
    date: '2025-04-10',
    time: '2:00pm',
    description: 'Explore a selection of fine wines from local vineyards.',
    location: 'Rolling Pines Lodge, Whispering Pines, CA',
  },
  {
    image: cooking_workshop_photo,
    title: 'Gourmet Cooking Workshop',
    date: 'May 5, 2025',
    description: 'Join our head chef for an interactive cooking workshop where you\'ll learn to prepare a three-course gourmet meal. Perfect for food enthusiasts of all skill levels.',
  },
  {
    image: movie_night_photo,
    title: 'Outdoor Movie Night',
    date: 'June 15, 2025',
    description: 'Enjoy a classic film under the stars in our beautiful garden area. Complimentary popcorn and beverages will be provided. Bring your own blanket!',
  },
  {
    image: summer_solstice_photo,
    title: 'Summer Solstice Celebration',
    date: 'June 21, 2025',
    description: 'Celebrate the longest day of the year with live music, a special summer menu, and festivities for all ages. A perfect way to kick off the summer season.',
  },
];

function UpcomingEvents() {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const generateCalendarLinks = (event) => {
    const { title, date, time, description, location } = event;
    const startDateTime = `${date}T${time}:00`;
    const endDateTime = `${date}T${parseInt(time.split(':')[0]) + 2}:${time.split(':')[1]}:00`; // Assuming event duration is 2 hours

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startDateTime.replace(/[-:]/g, '')}/${endDateTime.replace(
      /[-:]/g,
      ''
    )}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(
      location
    )}`;

    const outlookCalendarUrl = `https://outlook.live.com/owa/?path=/calendar/action/compose&subject=${encodeURIComponent(
      title
    )}&startdt=${startDateTime}&enddt=${endDateTime}&body=${encodeURIComponent(
      description
    )}&location=${encodeURIComponent(location)}`;

    const yahooCalendarUrl = `https://calendar.yahoo.com/?v=60&title=${encodeURIComponent(
      title
    )}&st=${startDateTime}&dur=0200&desc=${encodeURIComponent(
      description
    )}&in_loc=${encodeURIComponent(location)}`;

    return {
      google: googleCalendarUrl,
      outlook: outlookCalendarUrl,
      yahoo: yahooCalendarUrl,
    };
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#967988' }}>
      <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 4 }}>
        Upcoming Events
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {events.map((event, index) => {
          const calendarLinks = generateCalendarLinks(event);
          return (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={event.image}
                  alt={event.title}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'cemter'}}>
                  <Typography variant="h6">{event.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.description}
                  </Typography>
                  <Button variant="contained" color="secondary" sx={{ textTransform: 'none', fontWeight: 'bold', color: '#f5f5f5', marginTop: '15px' }}
                    className="atcb-button"
                    onClick={() => toggleDropdown(index)}
                  >
                    Add to Calendar
                  </Button>
                  {dropdownOpen === index && (
                    <div className="atcb-list" >
                      <a href={calendarLinks.google} target="_blank" rel="noopener noreferrer">
                        Google Calendar
                      </a>
                      <br/>
                      <a href={calendarLinks.outlook} target="_blank" rel="noopener noreferrer">
                        Outlook Calendar
                      </a>
                      <br/>
                      <a href={calendarLinks.yahoo} target="_blank" rel="noopener noreferrer">
                        Yahoo Calendar
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default UpcomingEvents;
