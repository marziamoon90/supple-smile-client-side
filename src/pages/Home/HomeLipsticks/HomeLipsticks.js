import { Button, Grid, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useLipsticks from '../../hooks/useLipsticks';
import MyHomeLipsticks from './MyHomeLipsticks';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useAuth from '../../hooks/useAuth';


const baground = {
    background: `url(${'https://cdn.shopify.com/s/files/1/2644/9976/files/img18.jpg?v=1516175273'})`,
    // backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    width: '100%',
    height: 600,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(82, 5, 5,0.8)',
    backgroundBlendMode: 'darken, luminosity'
}
const HomeLipsticks = () => {
    const [lipsticks] = useLipsticks();
    const { isLoading } = useAuth()
    const slicedLipsticks = lipsticks.slice(0, 6);
    // console.log(slicedLipsticks)
    return (
        <>
            <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid item xs={12} md={3}>
                    <Box style={baground} sx={{ textAlign: 'end', color: 'white' }}>
                        <Typography variant="h5" sx={{ color: 'warning.main' }}>Enter to win now</Typography>
                        <Typography variant="h3">Great Big Giveaway</Typography>
                        <Link to="/all_lipsticks" style={{ textDecoration: 'none' }}>
                            <Button sx={{ backgroundColor: 'maroon', color: 'white', borderRadius: '0', fontWeight: 'bold' }}> <ArrowForwardIcon /> Read More</Button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={9}>
                    {isLoading ? <LinearProgress color="secondary" /> :
                        <Grid container spacing={2}>
                            {
                                slicedLipsticks.map(myLipstick => <MyHomeLipsticks
                                    key={myLipstick._id}
                                    myLipstick={myLipstick}
                                ></MyHomeLipsticks>)
                            }
                        </Grid>}
                </Grid>
            </Grid>
        </>
    );
};

export default HomeLipsticks;