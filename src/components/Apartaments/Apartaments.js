import React from 'react';
import PriceList from '../Price/PriceList';
import getVisibleApartaments from '../../utils/getVisibleApartaments';
import ApartamentsTest from '../Apartaments/ApartamentsTest';

const Apartaments = ({dataForApartaments}) => {
    let arartamentsFiltered = getVisibleApartaments(dataForApartaments.appa.stuff, dataForApartaments.testFilter);
    return (
        <div>
            {
                  dataForApartaments.isFetching ?
                    <div>Loading...</div>
                    :
                    <PriceList apartaments={dataForApartaments} />
                }

            <ApartamentsTest arartamentsFiltered={arartamentsFiltered} />
        </div>
    );
};

export default Apartaments;