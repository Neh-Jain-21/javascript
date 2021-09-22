/** @format */

import { useSelector } from "react-redux";
import { Grid, Avatar, makeStyles } from "@material-ui/core";
//icons
import { AccountCircle } from "@material-ui/icons";

const Heading = () => {
    // data from store
    const darkMode = useSelector((state) => {
        return state.themeReducer.darkMode;
    });

    //dynamic styles
    const useStyles = makeStyles(() => ({
        container: {
            marginTop: 48,
            padding: 30,
            color: darkMode ? "white" : "black",
            backgroundColor: darkMode ? "black" : "white",
        },
        userIcon: {
            color: "white",
            backgroundColor: "#3F51B5",
            marginRight: 20,
        },
        someText: {
            marginTop: 20,
            fontSize: 16,
            fontWeight: "light",
        },
        task: {
            fontSize: 20,
            fontWeight: "bold",
        },
    }));

    const classes = useStyles();

    return (
        <>
            <Grid className={classes.container}>
                <Grid container direction="row" alignItems="center">
                    <Avatar className={classes.userIcon}>
                        <AccountCircle />
                    </Avatar>
                    <p className={classes.task}>My Tasks</p>
                </Grid>
            </Grid>
        </>
    );
};

export default Heading;
