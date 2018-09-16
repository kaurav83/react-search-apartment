import React from 'react';
import './Stars.css';

const Stars = (props) => {
    return (
        <div className={props.selected ? "stars select" : "stars"}>
            
        </div>
    );
};

export default Stars;