import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Image Search
                    </Typography>
                    <div className="nav">
                        <Button color="inherit">
                            <NavLink to="/image-search-app/"><span style={{ color: 'white' }}>Home</span></NavLink>
                        </Button>
                        <Button color="inherit">
                            <NavLink to="/image-search-app/contact"><span style={{ color: 'white' }}>Contact</span></NavLink>
                        </Button>
                        <Button color="inherit">
                            <NavLink to="/image-search-app/about"><span style={{ color: 'white' }}>About</span></NavLink>
                        </Button>
                        <Button color="inherit">
                            <NavLink to="/image-search-app/user/Neh/Jain"><span style={{ color: 'white' }}>User</span></NavLink>
                        </Button>
                        <Button color="inherit">
                            <NavLink to="/image-search-app/search"><span style={{ color: 'white' }}>Search</span></NavLink>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>

        </>
    );
};

export default Navbar;