import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Nav, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: '#540D15' }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink activeClassName="active" to="/home" style={{ textDecoration: 'none', color: 'white' }}>
                            <Typography variant="h5">Supple Smile</Typography>
                        </NavLink>
                    </Typography>
                    <NavLink activeClassName="active" to="/home" style={{ textDecoration: 'none' }}>
                        <Button sx={{ color: 'white' }} >Home</Button>
                    </NavLink>
                    <NavLink activeClassName="active" to="/all_lipsticks" style={{ textDecoration: 'none' }}>
                        <Button sx={{ color: 'white' }} >Explore</Button>
                    </NavLink>
                    {user?.email ?
                        <Box>
                            <NavLink activeClassName="active" to="/dashboard" style={{ textDecoration: 'none' }}>
                                <Button sx={{ color: 'white' }} >Dashboard</Button>
                            </NavLink>
                            <Button onClick={logOut} sx={{ color: 'white' }} >Logout</Button>
                        </Box> :
                        <NavLink activeClassName="active" to="/login" style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: 'white' }} >Login</Button>
                        </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>

    );
};

export default Navigation;