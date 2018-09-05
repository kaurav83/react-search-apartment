import React from 'react';
import PriceList from '../Price/PriceList';
import getVisibleApartaments from '../../utils/getVisibleApartaments';
import ApartamentsList from '../Apartaments/ApartamentsList';
import PricesFiltered from '../PricesFiltered/PricesFiltered';
// import selectorForPriceFilter from '../../utils/selectorForPriceFilter'
import PriceFilteredItem from '../PricesFiltered/PriceFilteredItem';

const Apartaments = ({dataForApartaments}) => {
    let arartamentsFiltered = getVisibleApartaments(dataForApartaments.appa.stuff, dataForApartaments.testFilter);
    // let list  = selectorForPriceFilter(dataForApartaments.appa.stuff, dataForApartaments.priceFilter)
    return (
        <div>
            {/* {
                  dataForApartaments.isFetching ?
                    <div>Loading...</div>
                    :
                    <PriceList apartaments={dataForApartaments} />
                }

            <ApartamentsList arartamentsFiltered={arartamentsFiltered} />
            
            {
                dataForApartaments.appa.stuff.map(item => {
                    return (
                        <div key={item.id} style={{margin: "5rem 0"}}>
                            <PricesFiltered item={item} />
                        </div>
                    )
                })
            } */}
        </div>
    );
};

export default Apartaments;