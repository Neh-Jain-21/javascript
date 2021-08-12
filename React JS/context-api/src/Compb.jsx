import React, { useContext } from 'react';
import Compc from './Compc';
import { FirstName, LastName } from './App';

//useContext hook
const Compb = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
        <h1>My name is {fname} {lname}</h1> 
    )
};

export default Compb;