import {combineReducers} from 'redux';
import appartamentReducer from './appartamentReducer';
import currencyReducer from './currencyReducer';
import visibilityFilter from './testFilterRefucer';
import priceFilterReducer from './priceFilterReducer'

export default combineReducers({
    appartament: appartamentReducer,
    currency: currencyReducer,
    testFilter: visibilityFilter,
    priceFilter: priceFilterReducer
});