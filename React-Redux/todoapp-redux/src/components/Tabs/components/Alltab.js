/** @format */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    makeStyles,
    Button,
    Grid,
    TextField,
    IconButton,
    Tooltip,
} from "@material-ui/core";
//actions
import { addTodo } from "../../../actions/index.js";
//icons
import { PhotoCamera, Sort } from "@material-ui/icons";
//components
import Todo from "./Todo.js";

const Alltab = ({ todos }) => {
    //states
    const [sort, setSort] = useState(false);
    const [image, setImage] = useState("");
    const [inputValue, setInputValue] = useState("");

    //data from store
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => {
        return state.themeReducer.darkMode;
    });

    //dynamic styles
    const useStyles = makeStyles((theme) => ({
        container: {
            paddingTop: 20,
            paddingLeft: 50,
            paddingRight: 50,
            color: darkMode ? "white" : "",
            backgroundColor: darkMode ? "black" : "",
        },
        input: {
            flexWrap: "nowrap",
        },
        inputField: {
            backgroundColor: darkMode ? "#1f1f1f" : "",
            marginRight: 25,
            "& label.Mui-focused": {
                color: darkMode ? "white" : "",
            },
            "& .MuiInput-underline:after": {
                borderBottomColor: darkMode ? "white" : "",
            },
            "& .MuiOutlinedInput-root": {
                "& fieldset": {
                    borderColor: darkMode ? "white" : "",
                },
                "&:hover fieldset": {
                    borderColor: darkMode ? "white" : "",
                },
                "&.Mui-focused fieldset": {
                    borderColor: darkMode ? "white" : "",
                },
            },
            "& .MuiInputLabel-root": {
                color: darkMode ? "white" : "",
            },
            "& .MuiInputBase-root": {
                color: darkMode ? "white" : "",
            },
        },
        inputButton: {
            maxWidth: 150,
        },
        [theme.breakpoints.down("sm")]: {
            todoList: {
                padding: 0,
                paddingTop: 10,
            },
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
            inputButton: {
                maxWidth: 20,
            },
        },
        sort: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        empty: {
            marginTop: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        inputImage: {
            display: "none",
        },
    }));

    const classes = useStyles();

    return (
        <>
            <Grid className={classes.container} container direction="column">
                <Grid className={classes.input} container direction="row">
                    <input
                        accept="image/*"
                        className={classes.inputImage}
                        id="icon-button-file"
                        type="file"
                        onChange={(e) => {
                            if (e.target.files[0] !== undefined) {
                                setImage(
                                    URL.createObjectURL(e.target.files[0])
                                );
                            }
                        }}
                    />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    <TextField
                        className={classes.inputField}
                        fullWidth
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                        label="What have you worked on?"
                        variant="outlined"
                    />
                    <Button
                        className={classes.inputButton}
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            let temp = inputValue.trim();
                            if (temp.length !== 0) {
                                dispatch(addTodo(temp, image));
                                setImage("");
                                setInputValue("");
                            }
                        }}
                    >
                        Add
                    </Button>
                </Grid>
                <Grid className={classes.todoContainer}>
                    <div className={classes.sort}>
                        <h4>ToDo Tasks</h4>
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
                                      return <Todo todo={todo} key={todo.id} />;
                                  })
                                : todos.map((todo) => {
                                      return <Todo todo={todo} key={todo.id} />;
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

export default Alltab;
