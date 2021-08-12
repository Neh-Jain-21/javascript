/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

const Compa = () => {
    const [num, setNum] = useState("_____");
    const [name, setName] = useState("_____");
    const [moves, setMoves] = useState("_____");

    useEffect(() => {
        async function getData() {
            const res = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${num}`
            );
            console.log(res);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    });

    const getValue = (event) => {
        setNum(event.target.value);
    };

    return (
        <>
            <h1>
                You choose <span style={{ color: "red" }}>{num}</span>
            </h1>
            <h1>
                My name is <span style={{ color: "red" }}>{name}</span>
            </h1>
            <h1>
                I have <span style={{ color: "red" }}>{moves}</span> moves
            </h1>
            <br />
            <select value={num} onChange={getValue}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    );
};

export default Compa;
