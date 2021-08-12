import React, { useState } from 'react';

const App = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("Click Me");
    
    const bgChange = () => {
        let newBg = "#344958";
        setBg(newBg);
        setName("Ouch!! 😒");
    };

    const bgChange2 = () => {
        setBg(purple);
        setName("Oh Thanks!! 😃😉");
    };

    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <button onClick={bgChange} onDoubleClick={bgChange2}>{name}</button>
            </div>
        </>
    );
};

export default App;