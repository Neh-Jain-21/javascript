/** @format */

import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "./Actions/index";
import add from "./imgs/add.png";
import Delete from "./imgs/delete.png";

const App = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const list = useSelector((state) => state.addToDoReducer.list);

    const finalTodo = () => {
        if (input.length >= 3) {
            dispatch(addTodo(input), setInput(""));
        }
    };

    return (
        <>
            <div className="container">
                <h1 style={{ marginBottom: "60px" }}>Your List Items</h1>
                <div className="todo" style={{ marginBottom: "50px" }}>
                    <input
                        type="text"
                        placeholder="Add Items"
                        value={input}
                        onChange={(event) => {
                            setInput(event.target.value);
                        }}
                    />
                    <button className="todo-btn" onClick={finalTodo}>
                        <img src={add} alt="" />
                    </button>
                </div>

                {list.map((elem) => {
                    return (
                        <div className="todo" key={elem.id}>
                            <span>{elem.data}</span>
                            <button className="todo-btn">
                                <img
                                    src={Delete}
                                    alt="Delete"
                                    onClick={() => {
                                        dispatch(deleteTodo(elem.id));
                                    }}
                                />
                            </button>
                        </div>
                    );
                })}

                <div style={{ marginBottom: "20px" }}>
                    <button
                        className="final-btn"
                        onClick={() => {
                            dispatch(removeTodo());
                        }}
                    >
                        Clear All
                    </button>
                </div>
            </div>
        </>
    );
};

export default App;
