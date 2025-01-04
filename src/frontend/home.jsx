import { AppBar, Container, Box, Button, Typography, TextField, Image } from '@mui/material'; 

function Home() {

    return (
        <Container className='body'>
        <AppBar className='header'>
            <Box sx={{
                height: '400px', 
                backgroundImage: '../assets/Rolling_Pines_Lodge_Logo.png', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }}>
            </Box>
        </AppBar>
        </Container>
    ); 
}

export default Home; 