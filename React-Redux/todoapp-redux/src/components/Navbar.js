/** @format */

import { useDispatch, useSelector } from "react-redux";
import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    alpha,
    Grid,
} from "@material-ui/core";
//icons
import { Menu, Search, Brightness7, Brightness3 } from "@material-ui/icons";
//actions
import { changeTheme } from "../actions/index";

const Navbar = ({ handleOpenSearch }) => {
    // from redux store
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => {
        return state.themeReducer.darkMode;
    });

    //dynamic css
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(1),
        },
        title: {
            flexGrow: 1,
            display: "flex",
        },
        search: {
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            "&:hover": {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(1),
                width: "auto",
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        inputRoot: {
            color: "inherit",
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                width: "12ch",
                "&:focus": {
                    width: "20ch",
                },
            },
        },
        dflex: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        dark: {
            backgroundColor: darkMode ? "#1F1F1F" : "",
        },
    }));

    const classes = useStyles();

    return (
        <>
            {/* navbar */}
            <div className={classes.root}>
                <AppBar className={classes.dark} position="fixed">
                    <Toolbar style={{ minHeight: 48 }}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <div className={classes.dflex}>
                                <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="open drawer"
                                >
                                    <Menu />
                                </IconButton>
                                <Typography
                                    className={classes.title}
                                    variant="h6"
                                    noWrap
                                >
                                    TASK LIST
                                </Typography>
                            </div>
                            {/* Middle Buttons */}
                            <div className={classes.dflex}>
                                {darkMode ? (
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        onClick={() => {
                                            dispatch(changeTheme());
                                        }}
                                        aria-label="open drawer"
                                    >
                                        <Brightness3 />
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        onClick={() => {
                                            dispatch(changeTheme());
                                        }}
                                        aria-label="open drawer"
                                    >
                                        <Brightness7 />
                                    </IconButton>
                                )}
                                <IconButton
                                    edge="end"
                                    color="inherit"
                                    onClick={() => {
                                        handleOpenSearch();
                                    }}
                                    aria-label="open drawer"
                                >
                                    <Search />
                                </IconButton>
                            </div>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
};

export default Navbar;
