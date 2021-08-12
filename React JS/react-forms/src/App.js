import React, { useState } from 'react';

const App = () => {

    const [name, setName] = useState({
        fname: "",
        lname: "",
        email: ""
    });

    const inputEvent = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setName((preValue) => {

            return {
                ...preValue,
                [name]: value
            }
            //Spread Operator dong work of below code
            // if (name === "fname") {
            //     return {
            //         fname : value,
            //         lname : preValue.lname,
            //         email : preValue.email
            //     }     
            // }
            // else if (name === "lname") {
            //     return {
            //         fname : preValue.fname,
            //         lname : value,
            //         email : preValue.email
            //     }     
            // }
            // else if (name === "email") {
            //     return {
            //         fname : preValue.fname,
            //         lname : preValue.lname,
            //         email : value
            //     }     
            // }
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted");
    };

    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <h1>Hello {name.fname} {name.lname}</h1>
                    <h3>{name.email}</h3>
                    <br />
                    <input type="text" placeholder="Enter First Name" name="fname" onChange={inputEvent} value={name.fname} />
                    <input type="text" placeholder="Enter Last Name" name="lname" onChange={inputEvent} value={name.lname} />
                    <input type="email" placeholder="Enter Email" name="email" onChange={inputEvent} value={name.email} />
                    <button type="submit">Click Me</button>
                </form>
            </div>
        </>
    );
};

export default App;