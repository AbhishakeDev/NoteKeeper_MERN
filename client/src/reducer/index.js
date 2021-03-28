import { combineReducers } from 'redux';
import notes from './notes';
import submit from './submit';
import auth from './auth';

export default combineReducers({
    notes,
    submit,
    auth
})