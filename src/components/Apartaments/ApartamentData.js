import React from 'react';

const ApartamentData = (props) => {
    return (
        <div>
            {
                props.newList.map(item => {
                    let USD = props.currency === "USD" ? `${Math.floor(item.price/28)} $` : null;
                    let EUR = props.currency === "EUR" ? `${Math.floor(item.price/33)} €` : null;
                   
                    return (
                        <div key={item.id}>
                            {
                                item.id === props.apartamentID ? 
                                    <div>
                                        <p>{USD || EUR || `${item.price} ₴`}</p>
                                        <p>{props.apartamentItem}</p>
                                    </div> 
                                    : 
                                    null
                            }
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ApartamentData;