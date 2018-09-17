import React from 'react';
import FilterBar from './FilterBar';
import TabSet from './TabSet';
import FilterPrice from './FilterPrice';
import StarRating from '../UI/StarRating';
import './Filters.css';
import List from "@material-ui/core/List";

const FiltersDesktop = () => {
    return (
        <div>
            <TabSet>
                <div label="UAH"></div>
                <div label="USD"></div>
                <div label="EUR"></div>
            </TabSet>
            <FilterBar />
            <FilterPrice />
            <List>
                <StarRating />
            </List>
        </div>
    );
};

export default FiltersDesktop;