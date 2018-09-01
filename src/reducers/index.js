import {combineReducers} from 'redux';
import appartamentReducer from './appartamentReducer';
import currencyReducer from './currencyReducer';
import selectedApartamentsReducer from './selectedApartamentsReducer';

export default combineReducers({
    appartament: appartamentReducer,
    currency: currencyReducer,
    selectedApartments: selectedApartamentsReducer
});