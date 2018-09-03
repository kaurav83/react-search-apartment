import React from 'react';

const ApartamentsTest = ({arartamentsFiltered}) => {
    return (
        <div>
            {
                arartamentsFiltered ? arartamentsFiltered.map(apartamentItem => {
                    return (
                        <div key={apartamentItem.id}>
                            <div>{apartamentItem.total_rooms}</div>
                        </div>
                    )
                }) : null
            }
        </div>
    );
};

export default ApartamentsTest;