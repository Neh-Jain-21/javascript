/** @format */

const initialData = {
    list: [],
};

const addToDoReducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const id = action.payload.id;
            const data = action.payload.data;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data,
                    },
                ],
            };

        case "DELETE_TODO":
            const newList = state.list.filter((elem) => elem.id !== action.id);
            return {
                ...state,
                list: newList,
            };

        case "REMOVE_TODO":
            return {
                ...state,
                list: [],
            };

        default:
            return state;
    }
};

export default addToDoReducer;
