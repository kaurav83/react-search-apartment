import React from 'react';
import PriceList from '../Price/PriceList';
import getVisibleApartaments from '../../utils/getVisibleApartaments';
import ApartamentsList from '../Apartaments/ApartamentsList';
import PricesFiltered from '../PricesFiltered/PricesFiltered';

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

            <ApartamentsList arartamentsFiltered={arartamentsFiltered} />
            <PricesFiltered />
        </div>
    );
};

export default Apartaments;