import React from 'react';
import PriceItem from './PriceItem';

const PriceList = ({apartaments}) => {
    return (
        <div>
            {
               apartaments.appa.stuff.length > 0 ? apartaments.appa.stuff.map(apartament => {
                    
                    const USD = apartaments.currency === "USD" ? `${Math.floor(apartament.price/28)} $` : null;
                    const EUR = apartaments.currency === "EUR" ? `${Math.floor(apartament.price/33)} €` : null;
                    return (
                        <PriceItem 
                            key={apartament.id}
                            name={USD || EUR || `${apartament.price} ₴`}
                        />
                    );
                }) : null
            }
        </div>
    );
};

export default PriceList;