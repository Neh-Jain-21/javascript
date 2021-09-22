/** @format */

import { useState } from "react";
import { useSelector } from "react-redux";
import {
    makeStyles,
    Paper,
    Tabs,
    Tab,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    TextField,
} from "@material-ui/core";
//components
import Alltab from "./components/Alltab";
import Activetab from "./components/Activetab";
import Completedtab from "./components/Completedtab";
import Todo from "./components/Todo";

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
};

const Index = ({ handleCloseSearch, openSearch }) => {
    //states
    const [value, setValue] = useState(0);
    const [search, setSearch] = useState("");

    //data from store
    const darkMode = useSelector((state) => {
        return state.themeReducer.darkMode;
    });
    const todos = useSelector((state) => {
        return state.todoReducer.todos;
    });

    //dynamic styles
    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            borderRadius: 0,
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
        },
        inputField: {
            backgroundColor: darkMode ? "#1f1f1f" : "",
            marginTop: 10,
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
        search: {
            color: darkMode ? "white" : "",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        tab: {
            backgroundColor: darkMode ? "#1f1f1f" : "",
            color: darkMode ? "white" : "black",
        },
        dialog: {
            backgroundColor: darkMode ? "#1f1f1f" : "",
            color: darkMode ? "white" : "",
        },
    });

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    indicatorColor="primary"
                    className={classes.tabs}
                >
                    <Tab className={classes.tab} label="All" />
                    <Tab className={classes.tab} label="Active" />
                    <Tab className={classes.tab} label="Completed" />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0}>
                <Alltab todos={todos} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Activetab todos={todos} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Completedtab todos={todos} />
            </TabPanel>

            {/* Search Dialog */}
            <Dialog
                maxWidth={"md"}
                open={openSearch}
                scroll="paper"
                onClose={handleCloseSearch}
                aria-labelledby="max-width-dialog-title"
            >
                <Paper className={classes.dialog}>
                    <DialogTitle id="max-width-dialog-title">
                        Search Todos
                        <TextField
                            className={classes.inputField}
                            fullWidth
                            label="What you want to search?"
                            variant="outlined"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                        />
                    </DialogTitle>
                    <DialogContent dividers="paper">
                        <DialogContentText
                            id="scroll-dialog-description"
                            tabIndex={-1}
                        >
                            {todos.length !== 0 ? (
                                todos.map((todo) => {
                                    if (
                                        !todo.text
                                            .toLowerCase()
                                            .search(search.toLowerCase())
                                    ) {
                                        return (
                                            <Todo todo={todo} key={todo.id} />
                                        );
                                    }
                                })
                            ) : (
                                <div className={classes.search}>
                                    <h3>Nothing to search for!</h3>
                                </div>
                            )}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseSearch} color="inherit">
                            Close
                        </Button>
                    </DialogActions>
                </Paper>
            </Dialog>
        </>
    );
};

export default Index;
