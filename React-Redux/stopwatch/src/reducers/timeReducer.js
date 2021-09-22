/** @format */

const initialData = {
    laps: [],
};

const timeReducer = (state = initialData, action) => {
    switch (action.type) {
        case "SET_LAP":
            return {
                laps: [...state.laps, action.payload],
            };

        case "RESET_LAP":
            return {
                laps: [],
            };

        default:
            return state;
    }
};

export default timeReducer;
