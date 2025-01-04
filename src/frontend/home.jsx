import { AppBar, Container, Box, Button, Typography, TextField } from '@mui/material'; 
import logo from '../assets/Rolling_Pines_Lodge_Logo.png'; 
import { Home, MenuBook, Phone } from '@mui/icons-material';

function Homepage() {

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
            <Box sx={{
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-around',
                alignContent: 'center'
            }}>
                <Typography component='a' href='#'>Menu</Typography>
                <MenuBook/>
            </Box>
        </AppBar>
        </Container>
    ); 
}

export default Homepage; 