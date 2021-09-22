/** @format */

import { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles, Grid, IconButton, Tooltip } from "@material-ui/core";
//components
import Todo from "./Todo.js";
//icons
import { Sort } from "@material-ui/icons";

const Completedtab = ({ todos }) => {
    //states
    const [sort, setSort] = useState(false);

    //data from store
    const darkMode = useSelector((state) => {
        return state.themeReducer.darkMode;
    });

    //dynamic styles
    const useStyles = makeStyles((theme) => ({
        container: {
            paddingTop: 20,
            paddingLeft: 50,
            paddingRight: 50,
            color: darkMode ? "white" : "white",
            backgroundColor: darkMode ? "black" : "",
        },
        input: {
            flexWrap: "nowrap",
        },
        inputField: {
            backgroundColor: darkMode ? "#1f1f1f" : "",
            marginRight: 25,
        },
        inputButton: {
            maxWidth: 150,
        },
        todoContainer: {
            marginTop: 30,
        },
        todoList: {
            backgroundColor: darkMode ? "#151515" : "",
            padding: 30,
        },
        [theme.breakpoints.down("sm")]: {
            todoList: {
                padding: 0,
                paddingTop: 10,
            },
        },
        sort: {
            color: darkMode ? "white" : "black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        empty: {
            color: darkMode ? "white" : "black",
            marginTop: 116,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
    }));

    const classes = useStyles();

    return (
        <>
            <Grid className={classes.container} container direction="column">
                <Grid className={classes.todoContainer}>
                    <div className={classes.sort}>
                        <h4>Completed ToDo Tasks</h4>
                        <Tooltip title="Sort" arrow>
                            <IconButton
                                edge="end"
                                size="medium"
                                color="inherit"
                                onClick={() => {
                                    setSort(!sort);
                                }}
                            >
                                <Sort />
                            </IconButton>
                        </Tooltip>
                    </div>
                    {todos.length !== 0 ? (
                        <Grid
                            className={classes.todoList}
                            container
                            direction="column"
                        >
                            {sort
                                ? [...todos].reverse().map((todo) => {
                                      if (todo.completed) {
                                          return (
                                              <Todo todo={todo} key={todo.id} />
                                          );
                                      }
                                  })
                                : todos.map((todo) => {
                                      if (todo.completed) {
                                          return (
                                              <Todo todo={todo} key={todo.id} />
                                          );
                                      }
                                  })}
                        </Grid>
                    ) : (
                        <div className={classes.empty}>
                            <h2>Looks Empty Here!</h2>
                            <h4>Add some Tasks..</h4>
                        </div>
                    )}
                </Grid>
            </Grid>
        </>
    );
};

export default Completedtab;
