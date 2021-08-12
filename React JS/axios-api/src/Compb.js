/** @format */

import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";

const columns = [
    { field: "id", headerName: "id", type: "number", width: 90 },
    { field: "userId", headerName: "UserId", type: "number", width: 120 },
    { field: "title", headerName: "Title", width: 390 },
    {
        field: "completed",
        headerName: "Completed",
        type: "boolean",
        width: 150,
    },
];

const Compa = () => {
    let [rows, setRows] = useState([]);
    let [width, setWidth] = useState("50%");

    useEffect(() => {
        if (window.innerWidth <= 514) {
            setWidth("100%");
        } else {
            setWidth("50%");
        }

        async function getData() {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/todos/"
            );

            setRows(res.data);
        }
        getData();
    });

    return (
        <div style={{ height: 700, width: width }}>
            <DataGrid rows={rows} columns={columns} pageSize={10} />
        </div>
    );
};

export default Compa;
