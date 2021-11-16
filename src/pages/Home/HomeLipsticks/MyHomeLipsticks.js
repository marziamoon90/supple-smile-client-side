import { Divider, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from 'react-router-dom';

const MyHomeLipsticks = ({ myLipstick }) => {
    const { img, name, _id, price, brand } = myLipstick;
    return (
        <Grid item xs={12} md={6}>
            <Paper elevation={0} >
                <Box sx={{ display: 'flex' }}>
                    <Box style={{ width: "40%", overflow: 'hidden' }}>
                        <img style={{ overflow: 'hidden' }} width="180px" height="180px" src={img} alt="" />
                    </Box>
                    <Box width="60%">
                        <Typography variant="h6" sx={{ p: 1, textTransform: 'capitalize', ml: 1 }}>{name}</Typography>
                        <Typography sx={{ p: 1, ml: 1 }}>{brand}</Typography>
                        <Divider />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Typography variant="h5" sx={{ ml: 1, color: 'warning.main' }}>${price}
                            </Typography>
                            <Link to={`/lipsticks/${_id}`}><ShoppingBasketOutlinedIcon
                                sx={{ backgroundColor: 'maroon', color: 'white', border: 1, p: 1, borderRadius: '50%', mr: 1 }}
                            /></Link>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default MyHomeLipsticks;