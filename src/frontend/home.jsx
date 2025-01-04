import { AppBar, Container, Box, Button, Typography, TextField } from '@mui/material'; 
import logo from '../assets/Rolling_Pines_Lodge_Logo.png'; 

function Home() {

    return (
        <Container className='body'>
        <AppBar className='header'>
            <Box sx={{ 
                height: '75px', 
                backgroundImage: `url(${logo})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                width: '10%'
            }}>
            </Box>
        </AppBar>
        </Container>
    ); 
}

export default Home; 