import {combineReducers} from 'redux';
import appartamentReducer from './appartamentReducer';

export default combineReducers({
    appartament: appartamentReducer
});