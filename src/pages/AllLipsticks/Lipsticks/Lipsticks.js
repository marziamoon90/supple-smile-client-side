import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Lipsticks = ({ lipstick }) => {
    // console.log(lipstick)
    const { _id, img, name, price } = lipstick;
    return (
        <Grid item xs={12} sm={12} md={3} sx={{ p: 0 }}>
            <Paper elevation={0} sx={{ backgroundColor: '#ECE2DA', height: 500, textAlign: 'center' }}>
                <img width="100%" height="300px" src={img} alt="" />
                <Typography variant="h6" sx={{ p: 1, textTransform: 'capitalize' }}>{name}</Typography>
                <Typography variant="h5" sx={{ color: 'warning.main' }}>${price}</Typography>
                <Link to={`/lipsticks/${_id}`} style={{ textDecoration: 'none' }}>
                    <Button sx={{ backgroundColor: 'lightpink', color: 'maroon' }}>Add to bag</Button></Link>
            </Paper>
        </Grid>
    );
};

export default Lipsticks;