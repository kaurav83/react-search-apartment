import React from 'react';
import FilterBar from './FilterBar';
import SelectBox from './SelectBox';

const CURRENCY = [
    "UAH",
    "USD",
    "EUR"
];

const Filters = ({ dataFilter }) => {
    const handleCurrencyChange = currency => {
        dataFilter.selectCurrency(currency);
    }

    return (
        <div>
            <SelectBox
                value={dataFilter.currency}
                options={CURRENCY}
                onChange={handleCurrencyChange}
            />
            <FilterBar />
        </div>
    );
};

export default Filters;