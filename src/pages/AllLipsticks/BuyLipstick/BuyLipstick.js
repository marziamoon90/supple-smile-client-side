import { Alert, Container, Grid, LinearProgress, Paper, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import icon from '../../../images/icon.png';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../shared/Navigation/Navigation';




const BuyLipstick = () => {
    const [buyLipstick, setBuyLipstick] = useState({})
    const { lipstickId } = useParams();
    const { isLoading, user } = useAuth();
    const initialInfo = { clientName: user.displayName, email: user.email, phone: '' };
    const [orderInfo, setOrderInfo] = useState(initialInfo);
    const [confirmOrder, setConfirmOrder] = useState(false);


    // on blur 
    const handleOnblur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo }
        newInfo[field] = value;
        // console.log(newInfo)
        setOrderInfo(newInfo)
    }

    // submit order 
    const handleOrderSubmit = e => {
        // collect data from order 
        const productName = buyLipstick.name;
        // console.log(productName)
        const date = new Date();
        const orderDate = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
        console.log(orderDate)
        const order = {
            ...orderInfo,
            productName,
            orderDate
        }
        // console.log(order)
        // send to server 
        fetch('https://nameless-citadel-84200.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    setConfirmOrder(true)
                }
            })
        e.preventDefault();
    }

    const getSingleLipstick = () => {
        axios.get(`https://nameless-citadel-84200.herokuapp.com/lipsticks/${lipstickId}`)
            .then(res => {
                const myLipstick = res.data;
                setBuyLipstick(myLipstick)
                // console.log(myLipstick)
            })
    }
    useEffect(() => getSingleLipstick(), [])
    return (
        <>
            <Navigation></Navigation>
            {isLoading ? <LinearProgress color="secondary" />
                :
                <Container sx={{ my: 5 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img width="25%" height="10%" src={icon} alt="" />
                                <h1>Supple Smile</h1>
                            </div>
                            <form onSubmit={handleOrderSubmit}>
                                <h4>Contact Information</h4>
                                <TextField
                                    required
                                    sx={{ width: "90%", m: 1 }}
                                    id="outlined-basic"
                                    name="email"
                                    onBlur={handleOnblur}
                                    type="email"
                                    label="your email"
                                    variant="outlined"
                                />
                                <TextField
                                    sx={{ width: "90%", m: 1 }}
                                    id="outlined-basic"
                                    type="text"
                                    onBlur={handleOnblur}
                                    name="phone"
                                    label="phone number"
                                    variant="outlined"
                                />
                                <h4>Shipping Address</h4>
                                <TextField
                                    required
                                    sx={{ width: "90%", m: 1 }}
                                    id="outlined-basic"
                                    type="text"
                                    onBlur={handleOnblur}
                                    name="clientName"
                                    label="your name"
                                    variant="outlined"
                                />
                                <TextField
                                    sx={{ width: "90%", m: 1 }}
                                    id="outlined-basic"
                                    type="text"
                                    onBlur={handleOnblur}
                                    name="address"
                                    label="address"
                                    variant="outlined"
                                />
                                {
                                    confirmOrder && <Alert severity="success" >Your Order is confirmed!</Alert>
                                }
                                <button type="submit" style={{ margin: '5px', width: '90%' }} ><h3>Order Now</h3></button>
                            </form>
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <div style={{ color: 'maroon', textAlign: 'start' }}>
                                <h2>{buyLipstick?.name}</h2>
                                <h4>-By {buyLipstick?.brand}</h4>
                                <h4>-For {buyLipstick.skinFor}</h4>
                                <h3>${buyLipstick?.price} USD </h3>
                            </div>
                            <img width="300px" height="300" src={buyLipstick?.img} alt="" />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Paper elevation={0}>
                                <h2 style={{ margin: 0 }}>
                                    Details</h2>
                                <p style={{ marginLeft: '40px' }}>{buyLipstick?.description}</p>
                                <h2 style={{ margin: 0 }}>
                                    What is in it?</h2>
                                <p style={{ marginLeft: '40px' }}>{buyLipstick?.ingredients}</p>
                                <h2 style={{ margin: 0 }}>How to use?</h2>
                                <p style={{ marginLeft: '40px' }}>{buyLipstick?.usage}</p>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            }
        </>
    );
};

export default BuyLipstick;