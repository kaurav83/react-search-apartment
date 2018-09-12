import React from 'react';
import FilterBar from './FilterBar';
import TabSet from './TabSet';
import FilterPrice from './FilterPrice';
import StarRating from '../UI/StarRating';

const CURRENCY = [
    "UAH",
    "USD",
    "EUR"
];

const Filters = (props) => {
    
    // const handleCurrencyChange = currency => {
    //     dataFilter.selectCurrency(currency);
    // }

    return (
        <div>
            <TabSet>
                <div label="UAH"></div>
                <div label="USD"></div>
                <div label="EUR"></div>
            </TabSet>
            <FilterBar />
            <FilterPrice />
            <StarRating />
        </div>
    );
};

export default Filters;