/** @format */

import React, { useState } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import {
    Checkbox,
    Grid,
    IconButton,
    Paper,
    DialogTitle,
    DialogContent,
    DialogActions,
    Dialog,
    Button,
    TextField,
    makeStyles,
    Modal,
} from "@material-ui/core";
//actions
import {
    completeTodo,
    deleteTodo,
    editTodo,
    deleteSnack,
    completeSnack,
    activeSnack,
} from "../../../actions";
//icons
import { Delete, Edit, PhotoCamera } from "@material-ui/icons";

const Todo = ({ todo }) => {
    //states
    const [open, setOpen] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    //data from store
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => {
        return state.themeReducer.darkMode;
    });

    //dynamci styles
    const useStyles = makeStyles(() => ({
        root: {
            marginBottom: 10,
            border: darkMode ? "" : "0.4px solid lightgray",
            padding: 10,
            backgroundColor: darkMode ? "#292929" : "",
            color: darkMode ? "white" : "",
        },
        container: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        todoText: {
            fontSize: 16,
        },
        check: {
            color: darkMode ? "white" : "",
        },
        dialog: {
            backgroundColor: darkMode ? "#1f1f1f" : "",
            color: darkMode ? "white" : "",
        },
        inputField: {
            backgroundColor: darkMode ? "#1f1f1f" : "",
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
        imageContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            objectFit: "contain",
        },
        image: {
            maxHeight: "90vh",
            maxWidth: "90vw",
        },
    }));

    const classes = useStyles();

    return (
        <>
            <Paper elevation={0} className={classes.root}>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <div className={classes.container}>
                        <Checkbox
                            className={classes.check}
                            color="primary"
                            value={todo.completed}
                            checked={todo.completed}
                            onClick={() => {
                                if (todo.completed === false) {
                                    batch(() => {
                                        dispatch(completeTodo(todo.id));
                                        dispatch(completeSnack(true));
                                    });
                                } else {
                                    batch(() => {
                                        dispatch(completeTodo(todo.id));
                                        dispatch(activeSnack(true));
                                    });
                                }
                            }}
                        />
                        <p className={classes.todoText}>
                            {todo.completed ? (
                                <del>{todo.text}</del>
                            ) : (
                                todo.text
                            )}
                        </p>
                    </div>
                    <div className={classes.container}>
                        {todo.image !== "" ? (
                            <PhotoCamera
                                edge="start"
                                color="inherit"
                                onClick={() => {
                                    setShowImage(true);
                                }}
                                fontSize="medium"
                            >
                                <Edit fontSize="small" />
                            </PhotoCamera>
                        ) : null}

                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={() => {
                                setOpen(true);
                            }}
                        >
                            <Edit fontSize="small" />
                        </IconButton>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={() => {
                                batch(() => {
                                    dispatch(deleteTodo(todo.id));
                                    dispatch(deleteSnack(true));
                                });
                            }}
                        >
                            <Delete color="secondary" fontSize="small" />
                        </IconButton>
                    </div>
                </Grid>
            </Paper>

            {/* Image Modal */}
            <Modal
                open={showImage}
                onClose={() => {
                    setShowImage(false);
                }}
                className={classes.imageContainer}
            >
                <div>
                    <img className={classes.image} src={todo.image} alt="..." />
                </div>
            </Modal>

            {/* Edit Todo */}
            <Dialog
                open={open}
                keepMounted
                onClose={() => {
                    setOpen(false);
                }}
            >
                <Paper className={classes.dialog}>
                    <DialogTitle>{"Edit Todo"}</DialogTitle>
                    <DialogContent>
                        <TextField
                            className={classes.inputField}
                            fullWidth
                            value={editedText}
                            onChange={(e) => {
                                setEditedText(e.target.value);
                            }}
                            label="What you want to edit?"
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => {
                                setOpen(false);
                                setEditedText(todo.text);
                            }}
                            color="secondary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={() => {
                                let temp = editedText.trim();
                                if (temp.length !== 0) {
                                    dispatch(editTodo(todo.id, temp));
                                }
                                setEditedText(todo.text);
                                setOpen(false);
                            }}
                            color="inherit"
                        >
                            Edit
                        </Button>
                    </DialogActions>
                </Paper>
            </Dialog>
        </>
    );
};

export default Todo;
