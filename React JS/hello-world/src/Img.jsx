import React from 'react';

const image = "https://picsum.photos/seed/picsum/200/300";

function Img() {
    return (
        <div className="img_div">
            <a href="#">
                <img src={image} alt="randomImage" />
            </a>
        </div>
    );
}

export default Img;