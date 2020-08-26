import { combineReducers } from 'redux';
import user from './user';
import modal from './modal';

const reducers = combineReducers({
	user,
	modal,
});

export default reducers;
