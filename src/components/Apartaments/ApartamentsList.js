import React from 'react';
import ApartamentData from './ApartamentData';

const ApartamentsList = (props) => {
    // let arr = props.arartamentsFiltered.concat(props.raitingApartamentFilter)
    // const valueRating = props.raitingApartamentFilter ? props.raitingApartamentFilter.map(item => console.log(item, 'item')) : null
    return (
        <div>
            {
                
                props.arartamentsFiltered ? props.arartamentsFiltered.map((apartamentItem) => {
                    
                    return (
                        
                            <div key={apartamentItem.id}>
                                <ApartamentData 
                                    apartamentItem={apartamentItem}
                                    currency={props.currency}
                                    filterRaiting={props.raitingApartamentFilter}
                                />   
                            </div>                     
                    )
                }) : null
            }
        </div>
    );
};

export default ApartamentsList;