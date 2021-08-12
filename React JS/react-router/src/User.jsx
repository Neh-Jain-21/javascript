import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    const history = useHistory();

    return (
        <>
            <h1>Hello {fname} {lname}</h1>
            <p>My Current location is {location.pathname}</p>
            {location.pathname === `/user/Neh/Jain` ? (
                <button onClick={() => history.goBack()}>Go Back</button>
            ) : null}
        </>
    );
};

export default User;