import React from 'react';

const ApartamentData = (props) => {
    
    let USD = props.currency === "USD" ? `${Math.floor(props.apartamentItem.price/28)} $` : null;
    let EUR = props.currency === "EUR" ? `${Math.floor(props.apartamentItem.price/33)} €` : null;
    return (
        <div>
            <p>total-room: {props.apartamentItem.total_rooms}</p>
            <p>{USD || EUR ||`${props.apartamentItem.price} ₴`}</p>
            <p>rating: {props.apartamentItem.rating}</p>
        </div>
    );
};

export default ApartamentData;