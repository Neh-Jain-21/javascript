import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const SearchResult = (props) => {
    let source = "";
    return (
        <>
            <div>
                <center>
                    {source ? (
                        <img className="res_img" src={`https://source.unsplash.com/640x480?${props.name}`} alt="" />
                    ) : (
                        <Skeleton variant="rect" width={640} height={480} />
                    )}
                </center>
            </div>
        </>
    );
};

export default SearchResult;