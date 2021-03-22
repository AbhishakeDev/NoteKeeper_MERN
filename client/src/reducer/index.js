import { combineReducers } from 'redux';
import notes from './notes';
import submit from './submit';

export default combineReducers({
    notes,
    submit
})