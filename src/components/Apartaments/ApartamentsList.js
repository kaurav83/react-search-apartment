import React from 'react';
import ApartamentData from './ApartamentData';

const ApartamentsList = (props) => {
    // console.log(props, 'AL')
    return (
        <div>
            {
                props.arartamentsFiltered ? props.arartamentsFiltered.map((apartamentItem) => {
                    
                    return (
                        
                            <div key={apartamentItem.id}>
                                <ApartamentData 
                                    {...apartamentItem}
                                    currency={props.currency}
                                />   
                            </div>                     
                    )
                }) : null
            }
        </div>
    );
};

export default ApartamentsList;