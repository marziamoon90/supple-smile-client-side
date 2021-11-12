import { LinearProgress } from '@mui/material';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../shared/Navigation/Navigation';


import Banner from '../Banner/Banner';
import HomeLipsticks from '../HomeLipsticks/HomeLipsticks';

const Home = () => {
    const { isLoading } = useAuth()
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            {isLoading ? <LinearProgress color="secondary" /> :
                <HomeLipsticks></HomeLipsticks>}
        </div>
    );
};

export default Home;