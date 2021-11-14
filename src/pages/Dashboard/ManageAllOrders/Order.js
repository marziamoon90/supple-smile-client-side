import { Divider, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';


const Order = ({ order, handleDeleteOrder }) => {
    const { clientName, orderDate, productName, productImg, _id, productPrice, email } = order;


    return (
        <Grid item xs={12} md={6}>
            <Paper elevation={0} >
                <Box sx={{ display: 'flex' }} height="100%">
                    <img style={{ marginRight: '10px' }} width="190px" height="200px" src={productImg} alt="" />
                    <Box width="280px">
                        <h3>{productName}</h3>
                        <h4 style={{ margin: 0 }}>{clientName}</h4>
                        <h4 style={{ margin: 0 }}>{email}</h4>
                        <Divider />
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" sx={{ color: 'warning.main' }}>{orderDate}
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'warning.main' }}>$ {productPrice}
                            </Typography>
                        </Box>
                        <Link onClick={() => handleDeleteOrder(_id)} to="#"><DeleteForeverIcon
                            sx={{ backgroundColor: '#540D15', color: 'white', width: "100%" }}
                        /></Link>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default Order;