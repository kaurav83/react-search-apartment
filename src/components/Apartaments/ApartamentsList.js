import React from 'react';
import ApartamentData from './ApartamentData';

const ApartamentsList = ({arartamentsFiltered, newList, currency}) => {
    
    return (
        <div>
            {
                arartamentsFiltered ? arartamentsFiltered.map((apartamentItem, index) => {
                    
                    return (
                        
                            <div key={apartamentItem.id}>
                                <ApartamentData 
                                    apartamentItem={apartamentItem.total_rooms} 
                                    apartamentID={apartamentItem.id}
                                    newList={newList}
                                    currency={currency}
                                />   
                            </div>                     
                    )
                }) : null
            }
        </div>
    );
};

export default ApartamentsList;