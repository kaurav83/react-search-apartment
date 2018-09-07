import React from 'react';

const PriceItem = (props) => {
    const {name} = props;
    return (
        <div>
            <span>{name}</span>
        </div>
    );
};

export default PriceItem;