import React from 'react';

const name = "Neh";

//internal CSS
const heading = {
    color: "blue",
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontFamily: '"josefin Sans", sans-serif'
};

function Heading() {
    return(
        <h1 style={heading}>Hello, My name is {name}</h1>
    );
}

export default Heading;