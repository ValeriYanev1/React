import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core';
import Box from '@material-ui/core/Box'

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    const user = null;

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
                    <Button className={classes.button} component={Link} to="/" variant="contained" r={5}>Live Chat</Button>
                </Box>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={{}}>Logout</Button>
                    </div>
                ) : (
                    <Box m={2}>
                        <Button className={classes.button} component={Link} to="/auth" l={5} variant="contained">Sign In</Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;