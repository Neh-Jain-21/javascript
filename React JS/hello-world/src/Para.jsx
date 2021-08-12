import React from 'react';

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

function Para() {
    return (
        <>
            <p>Today's Date is {currDate}</p>
            <p>Current Time is {currTime}</p>
        </>
    );
}

export default Para;