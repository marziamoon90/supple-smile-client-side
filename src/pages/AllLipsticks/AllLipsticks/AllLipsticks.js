import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useLipsticks from '../../hooks/useLipsticks';
import Navigation from '../../shared/Navigation/Navigation';
import Lipsticks from '../Lipsticks/Lipsticks';


const AllLipsticks = () => {
    const [lipsticks] = useLipsticks()

    return (
        <div>
            <Navigation></Navigation>
            <Typography variant="h4" sx={{ textAlign: 'center', mt: 2 }}>Supple Smile Lipsticks</Typography>
            <Container>
                <Grid container spacing={5} sx={{ my: 2 }}>
                    {
                        lipsticks.map(lipstick => <Lipsticks
                            key={lipstick._id}
                            lipstick={lipstick}
                        ></Lipsticks>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default AllLipsticks;