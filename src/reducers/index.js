import {combineReducers} from 'redux';
import appartamentReducer from './appartamentReducer';
import currencyReducer from './currencyReducer';

export default combineReducers({
    appartament: appartamentReducer,
    currency: currencyReducer
});