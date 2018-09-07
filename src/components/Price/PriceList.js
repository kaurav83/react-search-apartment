import React from 'react';
// import PriceItem from './PriceItem';
import ApartamentData from '../Apartaments/ApartamentData';

const PriceList = ({apartaments}) => {
    console.log(apartaments, 'PL')
    return (
        <div>
            {
               apartaments.appa.stuff.length > 0 ? apartaments.appa.stuff.map((price, index) => {
                    
                    const USD = price.currency === "USD" ? `${Math.floor(price.price/28)} $` : null;
                    const EUR = price.currency === "EUR" ? `${Math.floor(price.price/33)} €` : null;
                    return (
                        // <PriceItem 
                        //     key={apartament.id}
                        //     name={USD || EUR || `${apartament.price} ₴`}
                        // />
                        <div key={index}>
                            
                        </div>                        
                    );
                }) : null
            }
        </div>
    );
};

export default PriceList;