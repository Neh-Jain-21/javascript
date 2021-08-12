import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchResult from './SearchResult';

const Search = () => {
    const [image, setImage] = useState("");

    const inputEvent = (event) => {
        const data = event.target.value;
        setImage(data);
    };

    return (
        <>
            <br /><br />
            <center>
                <TextField autoComplete="off" id="outlined-basic" label="Search Image" variant="outlined" onChange={inputEvent} value={image} />
            </center>
            <br /><br />
            {image === "" ? null : <SearchResult name={image} />}

        </>
    );
};

export default Search;