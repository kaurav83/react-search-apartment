import React from 'react';
import FilterBar from './FilterBar';
import TabSet from './TabSet';
import FilterPrice from './FilterPrice';
import StarRating from '../UI/StarRating';
import './Filters.css';
import FilterList from '@material-ui/icons/FilterList';

const Filters = (props) => {

    return (
        <div className="filters">
            <div><FilterList /></div>
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