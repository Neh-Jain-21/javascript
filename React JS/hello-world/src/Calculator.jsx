import React from 'react';

function add(a, b) {
    return (a + b);
}

function sub(a, b) {
    return (a - b);
}

function div(a, b) {
    return (a / b);
}

function mul(a, b) {
    return (a * b);
}

function Calculator() {
    return (
        <ul>
            <li>Sum of two No. is {add(40, 20)}</li>
            <li>Sub of two No. is {sub(40, 20)}</li>
            <li>Div of two No. is {div(40, 20)}</li>
            <li>mul of two No. is {mul(40, 20)}</li>
        </ul>
    );
}

export default Calculator;