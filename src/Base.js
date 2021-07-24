import React from 'react';
import Detective from "./Detective";

function Base(props) {
    return (
        <div>
            <Detective/>
            <h1>
                HELLO WORLD
            </h1>
            <img src='wolf.jpg' alt='img'/>
        </div>
    );
}

export default Base;