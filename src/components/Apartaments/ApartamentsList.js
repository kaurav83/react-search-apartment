import React from 'react';
import ApartamentData from './ApartamentData';

const ApartamentsList = (props) => {
    return (
        <div>
            {
                
                props.raitingApartamentFilter  ? props.raitingApartamentFilter.map((apartamentItem) => {
                    
                    return (
                        
                            <div key={apartamentItem.id}>
                                <ApartamentData 
                                    currency={props.currency}
                                    apartamentItem={apartamentItem}
                                />   
                            </div>                     
                    )
                }) : null
            }
        </div>
    );
};

export default ApartamentsList;