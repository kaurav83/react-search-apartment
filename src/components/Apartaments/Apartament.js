import React from 'react';

const Apartament = (props) => {
    const {total_rooms, id, price} = props;
    console.log(props);
    return (
        <div>
            <p>{total_rooms}</p>
            <p>{id}</p>
            <p>{price}</p>
        </div>
    );
};

export default Apartament;