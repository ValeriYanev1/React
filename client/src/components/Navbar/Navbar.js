import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import decode from 'jwt-decode';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">React SPA</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                <Box m={2}>
                    <Button className={classes.button} component={Link} to="/" variant="contained" r={5}>Home</Button>
                </Box>
                <Box m={2} >
                    <Button className={classes.button} component={Link} to="/quiz" variant="contained" r={5}>Quiz</Button>
                </Box>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Box m={2}>
                        <Button className={classes.button} component={Link} to="/auth" l={5} variant="contained">Sign In</Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar >
    );
};

export default Navbar;