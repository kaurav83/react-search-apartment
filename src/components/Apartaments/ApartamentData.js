import React from 'react';

const ApartamentData = (props) => {
    
    let USD = props.currency === "USD" ? `${Math.floor(props.price/28)} $` : null;
    let EUR = props.currency === "EUR" ? `${Math.floor(props.price/33)} €` : null;
    return (
        <div>
            <p>{props.total_rooms}</p>
            <p>{USD || EUR ||`${props.price} ₴`}</p>
        </div>
    );
};

export default ApartamentData;