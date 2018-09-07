import {combineReducers} from 'redux';
import appartamentReducer from './appartamentReducer';
import currencyReducer from './currencyReducer';
import visibilityFilterTotalRoom from './visibilityFilterTotalRoom';
import priceFilterReducer from './priceFilterReducer';
import visibilityFilterRaiting from './visibilityFilterRaiting';

export default combineReducers({
    appartament: appartamentReducer,
    currency: currencyReducer,
    visibileFilterTotalRoom: visibilityFilterTotalRoom,
    priceFilter: priceFilterReducer,
    filterRaiting: visibilityFilterRaiting
});