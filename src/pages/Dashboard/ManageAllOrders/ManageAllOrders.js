import { Grid, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Order from './Order';

const ManageAllOrders = () => {
    const [manageAllOrders, setManageAllOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const getManageOrders = () => {
        axios.get("https://nameless-citadel-84200.herokuapp.com/orders")
            .then(res => {
                const manageOrders = res.data;
                setManageAllOrders(manageOrders)
                console.log(manageOrders)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    useEffect(() => getManageOrders(), []);

    const handleDeleteOrder = id => {
        const confirm = window.confirm('Are You Sure to?')
        if (confirm) {
            const url = `https://nameless-citadel-84200.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingOrders = manageAllOrders.filter(manageAllOrder => manageAllOrder._id !== id);
                        setManageAllOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <div>
            {isLoading ? <LinearProgress color="secondary" />
                :
                <Box>
                    <h2>Manage all orders</h2>
                    <Grid container spacing={2}>
                        {
                            manageAllOrders.map(order => <Order
                                key={order._id}
                                order={order}
                                handleDeleteOrder={handleDeleteOrder}
                            ></Order>)
                        }
                    </Grid>
                </Box>
            }
        </div >
    );
};

export default ManageAllOrders;