/** @format */

export const changeTheme = () => {
    return {
        type: "CHANGE_THEME",
    };
};

export const addTodo = (text, image) => {
    return {
        type: "ADD_TODO",
        payload: { text: text, completed: false, image: image },
    };
};

export const completeTodo = (id) => {
    return {
        type: "COMPLETE_TODO",
        payload: { id: id },
    };
};

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: { id: id },
    };
};

export const editTodo = (id, text) => {
    return {
        type: "EDIT_TODO",
        payload: { id: id, text: text },
    };
};

export const deleteSnack = (data) => {
    return {
        type: "DELETE_SNACK",
        payload: data,
    };
};

export const activeSnack = (data) => {
    return {
        type: "ACTIVE_SNACK",
        payload: data,
    };
};

export const completeSnack = (data) => {
    return {
        type: "COMPLETE_SNACK",
        payload: data,
    };
};
