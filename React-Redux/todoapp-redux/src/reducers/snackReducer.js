/** @format */

const initState = {
    deletedSnack: false,
    completedSnack: false,
    activeSnack: false,
};

const snackReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_SNACK":
            return {
                deletedSnack: action.payload,
            };

        case "ACTIVE_SNACK":
            return {
                activeSnack: action.payload,
            };

        case "COMPLETE_SNACK":
            return {
                completedSnack: action.payload,
            };

        default:
            return state;
    }
};

export default snackReducer;
