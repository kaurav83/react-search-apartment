import {combineReducers} from 'redux';
import appartamentReducer from './appartamentReducer';
import currencyReducer from './currencyReducer';
import visibilityFilter from './testFilterRefucer';

export default combineReducers({
    appartament: appartamentReducer,
    currency: currencyReducer,
    testFilter: visibilityFilter
});