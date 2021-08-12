import React, { useEffect, useState } from 'react';

const App = () => {

    //useState Hook
    const [count, setCount] = useState(0);
    //useEffect Hook
    useEffect(() => {
        document.title = `You clicked me ${count} times`;
    }, [count]);

    const IncNum = () => {
        setCount(count + 1);
    };
    //end

    //useState Hook for Date
    let time = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(time);

    const ShowTime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    };

    setInterval(ShowTime, 1000);
    //end

    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncNum}>Click Me</button>
            <br />
            <h1>{ctime}</h1>
        </>
    );
};

export default App;