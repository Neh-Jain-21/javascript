/** @format */

import { useDispatch, useSelector } from "react-redux";
import { IconButton, Snackbar } from "@material-ui/core";
//actions
import { activeSnack, completeSnack, deleteSnack } from "../actions";
//icons
import { Close } from "@material-ui/icons";

const Snacks = () => {
    const dispatch = useDispatch();

    const snacks = useSelector((state) => {
        return state.snackReducer;
    });

    return (
        <>
            {/* Active SB */}
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                open={snacks.activeSnack}
                autoHideDuration={6000}
                onClose={() => {
                    dispatch(activeSnack(false));
                }}
                message="Todo Activated"
                action={
                    <>
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={() => {
                                dispatch(activeSnack(false));
                            }}
                        >
                            <Close fontSize="small" />
                        </IconButton>
                    </>
                }
            />

            {/* completed SB */}
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                open={snacks.completedSnack}
                autoHideDuration={6000}
                onClose={() => {
                    dispatch(dispatch(completeSnack(false)));
                }}
                message="Todo Completed"
                action={
                    <>
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={() => {
                                dispatch(dispatch(completeSnack(false)));
                            }}
                        >
                            <Close fontSize="small" />
                        </IconButton>
                    </>
                }
            />

            {/* Deleted SB */}
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                open={snacks.deletedSnack}
                autoHideDuration={6000}
                onClose={() => {
                    dispatch(deleteSnack(false));
                }}
                message="Todo Deleted"
                action={
                    <>
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={() => {
                                dispatch(deleteSnack(false));
                            }}
                        >
                            <Close fontSize="small" />
                        </IconButton>
                    </>
                }
            />
        </>
    );
};

export default Snacks;
