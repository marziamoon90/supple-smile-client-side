import { Grid, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Order from '../ManageAllOrders/Order';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios.get(`https://nameless-citadel-84200.herokuapp.com/orders?email=${user.email}`)
            .then(res => {
                const myallOrder = res.data;
                setMyOrders(myallOrder)
                // console.log(manageOrders)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [user.email])

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
                        const remainingOrders = myOrders.filter(myOrders => myOrders._id !== id);
                        setMyOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <div>
            <Box>
                <h1>My all orders </h1>
                {isLoading ? <LinearProgress color="secondary" />
                    :
                    <Grid container spacing={2}>
                        {
                            myOrders.map(order => <Order
                                key={order._id}
                                order={order}
                                setMyOrders={setMyOrders}
                                handleDeleteOrder={handleDeleteOrder}
                            ></Order>)
                        }
                    </Grid>
                }
            </Box>
        </div>
    );
};

export default MyOrders;