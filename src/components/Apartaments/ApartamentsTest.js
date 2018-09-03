import React from 'react';

const ApartamentsTest = ({arartamentsFiltering}) => {
    return (
        <div>
            {
                arartamentsFiltering ? arartamentsFiltering.map(apartamentItem => {
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