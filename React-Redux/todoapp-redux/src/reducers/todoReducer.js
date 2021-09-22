/** @format */

const initState = {
    todos: [
        {
            id: 0,
            text: "GitLab",
            completed: false,
            image: "https://images.ctfassets.net/lzny33ho1g45/how-to-push-to-gitlab-p-img/c2836512de32c692309658f6ede78fe9/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
        },
        { id: 1, text: "Empty Todo", completed: false, image: "" },
        {
            id: 2,
            text: "Flowers",
            completed: true,
            image: "https://images.unsplash.com/photo-1516123359062-32456af7c128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
        },
    ],
};

let id = 2;

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            id++;
            return {
                todos: [
                    ...state.todos,
                    {
                        id: id,
                        text: action.payload.text,
                        completed: false,
                        image: action.payload.image,
                    },
                ],
            };

        case "DELETE_TODO":
            return {
                todos: [
                    ...state.todos.filter((todo) => {
                        if (todo.id === action.payload.id) {
                            URL.revokeObjectURL(todo.image);
                        }
                        return todo.id !== action.payload.id;
                    }),
                ],
            };

        case "EDIT_TODO":
            state.todos.map((t) => {
                if (t.id === action.payload.id) {
                    t.text = action.payload.text;
                }
            });
            return {
                todos: [...state.todos],
            };

        case "COMPLETE_TODO":
            state.todos.map((t) => {
                if (t.id === action.payload.id) {
                    if (t.completed === false) {
                        t.completed = true;
                    } else {
                        t.completed = false;
                    }
                }
            });
            return {
                todos: [...state.todos],
            };

        default:
            return state;
    }
};

export default todoReducer;
