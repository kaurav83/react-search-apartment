import React from 'react';

const ApartamentData = (props) => {
    // console.log(props, 'props')
    let USD = props.currency === "USD" ? `${Math.floor(props.apartamentItem.price/28)} $` : null;
    let EUR = props.currency === "EUR" ? `${Math.floor(props.apartamentItem.price/33)} €` : null;
    return (
        <div>
            <p>total-room: {props.apartamentItem.total_rooms}</p>
            <p>{USD || EUR ||`${props.apartamentItem.price} ₴`}</p>
            

            <p>
                {
                        // props.filterRaiting.map(item => {
                        //     console.log(item,"item ")
                        //     return (
                        //         <div key={item.id}>
                        //             {
                        //                 props.apartamentItem.id === item.id  ? <p>rating: {item.rating}</p> : null
                        //             }
                        //         </div>
                        //     )
                        // })
                    
                }
            </p>
        </div>
    );
};

export default ApartamentData;