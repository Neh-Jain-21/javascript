/** @format */

const initState = {
    darkMode: false,
};

const themeReducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                darkMode: !state.darkMode,
            };

        default:
            return state;
    }
};

export default themeReducer;
